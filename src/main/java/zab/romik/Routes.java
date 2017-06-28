package zab.romik;

/**
 * В этом клссе хранятся роуты для разных частей системы, чтобы их
 * можно было потом легко и безпроблемно менять, а так же взаимодействовать
 * с разными роутам в системе через один класс
 * <p>
 * TODO: Замерить производительность
 *
 * @author proweber1
 * @apiNote Возможно у этого класса низкая производительность
 * @since 0.0.1
 */
public abstract class Routes {

    /**
     * Имя ID аттрибута который будет искаться внутри роута
     */
    private static final String VALID_ID_ATTRIBUTE = "{id}";

    /**
     * Все роуты контроллера который занимается товарами
     */
    public abstract static class Commodity {

        /**
         * Роут для загрузки списка товаров
         */
        public static final String LIST = "/commodity";

        /**
         * Роут для создания нового товара
         */
        public static final String CREATE = "/commodity/create";

        /**
         * Роут для отображения одного конкретного товара
         */
        public static final String SHOW = "/commodity/{id}";

        /**
         * Роут для удаления товара
         */
        public static final String DELETE = "/commodity/{id}/delete";

        /**
         * Роут для обновления товара
         */
        public static final String UPDATE = "/commodity/{id}/update";

        /**
         * Роут для обработки действия обновления
         */
        public static final String UPDATE_PROCESS = "/commodity/update";
    }

    /**
     * Роуты которые относятся к рест контроллеру свойств
     */
    public static class Properties {

        /**
         * Этот роут может служить как для выборки списка свойств так и как
         * корневой маршрут ROOT Mapping
         */
        public static final String PROPERTIES_LIST = "/properties";

        /**
         * Роут для получения списка значений свойства
         */
        public static final String PROPERTY_VALUES = "/{id}/values";
    }

    /**
     * Возвращает ссылку понятную спрингу для переадресации
     *
     * @param routeName Имя маршрута для переадресации
     * @return Ссылка на переадрисацию
     */
    public static String redirectTo(final String routeName) {
        String route = routeName.startsWith("/") ? routeName : "/" + routeName;

        return String.format("redirect:%s", route);
    }

    /**
     * Собирает маршрут для редиректа с ID
     *
     * @param routeName Имя маршрута
     * @param id        ID который надо подставить в маршрут
     * @return Собранный маршрут
     */
    public static String redirectToWithId(final String routeName, final long id) {
        if (!routeName.contains(VALID_ID_ATTRIBUTE)) {
            throw new IllegalArgumentException("Route name: '" + routeName + "' is invalid, " +
                    "{id} not found in route name");
        }

        return redirectTo(routeName.replace(VALID_ID_ATTRIBUTE, String.valueOf(id)));
    }
}
