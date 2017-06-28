package zab.romik.formatters;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.format.Formatter;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.util.Locale;
import java.util.Objects;

/**
 * Параметризированный форматтер который используется для того чтобы
 * выбирать сущности по ID и маппить их в родительские сущности, этот класс
 * создан для того чтобы не дублировать код во всех реализациях такого
 * рода форматтеров
 *
 * @param <E> Тип сущности в которую будет реализовываться приобразование
 * @param <D> Тип репозитория который будет внедрен контейнером
 * @author proweber1
 * @since 0.0.1
 */
public abstract class AbstractEntityFormatterById<E, D extends JpaRepository<E, Long>> implements Formatter<E> {

    /**
     * Имя метода для получения ID сущности, используется в рефлексии
     */
    private static final String GET_ID_METHOD_NAME = "getId";

    /**
     * Репозиторий из которого мы будем выбирать данные которые будут маппиться
     * в другие родительские сущности
     */
    protected D repository;

    /**
     * Разбирает сущность из переданного ID из формы и загружает данные из базы
     * данных, если данных нет, то ошибка, если есть то они возвращаются
     *
     * @param id     ID сущности которую будем грузить
     * @param locale Локаль (для того чтобы сообщения на разных языках кидать)
     * @return Найденная сущность
     * @throws ParseException Исключение которое будет брошено если не удалось
     *                        найти нужную сущность по ID
     */
    @Override
    public E parse(String id, Locale locale) throws ParseException {
        final E entity = repository.findOne(Long.valueOf(id));
        if (Objects.isNull(entity)) {
            final String exceptionMessage = getParserExceptionMessage(id, locale);
            throw new ParseException(exceptionMessage, 0);
        }
        return entity;
    }

    /**
     * Этот метод получает из сущности ID и возвращает его, можно было бы
     * параметризировать generic каким-нибудь интерфейсом для того чтобы не
     * использовать рефлексию, но применение интерфейсов к сущностям не очень
     * хорошая практика, кроме Serializable
     *
     * @param object Объект сущности
     * @param locale Локаль для того чтобы в зависимости от локали отдавать ID
     * @return ID который будет использоваться в форме для назначения значения тегу <option>
     */
    @Override
    public String print(E object, Locale locale) {
        final Class<?> aClass = object.getClass();
        try {
            final Method method = aClass.getMethod(GET_ID_METHOD_NAME);
            return String.valueOf(method.invoke(object));
        } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
            throw new RuntimeException("Fetch entity from form error", e);
        }
    }

    /**
     * Возвращает сообщение которое надо бросить в ParseException в методе
     * {@link AbstractEntityFormatterById#parse(String, Locale)}
     *
     * @param id ID сущности которую не удалось загрузить
     * @param locale Локально для обработки сообщения
     * @return Сообщение которое надо бросить
     */
    abstract String getParserExceptionMessage(String id, Locale locale);

    /**
     * Этот метод должен делать setter injection для того чтобы потом
     * выбирать данных с помощью заинжекченного репозиторий, сделано так
     * только потому что, спринг не умеет внедрять generic типы, все из-за
     * особенностей дженериков в java, они затирают тип при компиляции после
     * проверки компилятора
     *
     * @param repository Репозиторий для выборки сущностей
     */
    abstract public void setRepository(D repository);
}
