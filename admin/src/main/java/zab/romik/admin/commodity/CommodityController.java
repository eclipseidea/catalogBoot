package zab.romik.admin.commodity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import zab.romik.admin.Routes;
import zab.romik.domain.entities.Categories;
import zab.romik.domain.entities.Commodity;
import zab.romik.domain.entities.Country;
import zab.romik.domain.service.CategoriesService;
import zab.romik.domain.service.CommodityService;
import zab.romik.domain.service.CountryService;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.List;

@Controller
public class CommodityController {

    /**
     * Имя страницы на которой можно создавать товары
     */
    private static final String CREATE_COMMODITY_VIEW_NAME = "admin/commodity/commodity_create";

    /**
     * Имя атрибута которое содержит в себе форму commodity
     */
    private static final String COMMODITY_MODEL_ATTRIBUTE = "commodity";

    /**
     * Ключ в сессии для сообщения о том, что товар был успешно создан
     */
    private static final String COMMODITY_FLASH_MSG_KEY = "flashMessage";

    /**
     * Имя формы которое будет использоваться при редиректе с ошибками, чтобы спринг смог их подхватить
     */
    private static final String COMMODITY_FORM_ERRORS_NAME_FOR_REDIRECT = "org.springframework.validation.BindingResult.commodity";

    /**
     * Сервис для работы с товарами
     */
    private CommodityService commodityService;

    /**
     * Сервис для работы с категориями
     */
    private final CategoriesService categoriesService;

    /**
     * Cервис для работы со странами производителями
     */
    private final CountryService countryService;

    /**
     * Конструктор для внедрения зависимостей
     *
     * @param commodityService  Сервис для работы с товарами
     * @param categoriesService Сервис для работы с категориями
     * @param countryService    Сервис для работы с поставщиками
     */
    @Autowired
    public CommodityController(final CommodityService commodityService,
                               final CategoriesService categoriesService,
                               final CountryService countryService) {
        this.commodityService = commodityService;
        this.categoriesService = categoriesService;
        this.countryService = countryService;
    }

    /**
     * Глобальная переменная список полов, чтобы не делать дублирования
     * для того чтобы кидать ее во вьюху.
     *
     * @return Список полов
     */
    @ModelAttribute("genders")
    public Commodity.CommodityGender[] genders() {
        return Commodity.CommodityGender.values();
    }

    /**
     * Загружает список категорий во вьюхи
     *
     * @return Список категорий
     */
    @ModelAttribute("categories")
    public List<Categories> categories() {
        return categoriesService.findAll();
    }

    /**
     * Возвращает список поставщиков из базы данных
     *
     * @return Список поставщиков
     */
    @ModelAttribute("countries")
    public List<Country> countries() {
        return countryService.findAll();
    }

    /**
     * Страница со списком товаров.
     *
     * @param model Свойства которые будут инжектиться в отображение
     * @return Имя вьюхи которую надо отрендерить
     */
    @GetMapping(Routes.Commodity.LIST)
    public String Commodity(Model model) {
        model.addAttribute("commodities", commodityService.findAll());

        return "admin/commodity/commodity";
    }

    /**
     * На этой странице можно заполнить форму для создания товара и
     * отправить ее на обработку
     *
     * @param model Модель для заполнения страницы данными
     * @return Имя шаблона который надо отрисовать
     */
    @GetMapping(Routes.Commodity.CREATE)
    public String createNewCommodity(final Model model) {
        if (!model.containsAttribute(COMMODITY_MODEL_ATTRIBUTE)) {
            model.addAttribute(COMMODITY_MODEL_ATTRIBUTE, new Commodity());
        }

        return CREATE_COMMODITY_VIEW_NAME;
    }

    /**
     * Создает новый товар в системе перед этим его валидирует
     *
     * @param commodity          Товар который мы создаем
     * @param bindingResult      Результат валидации формы товара
     * @param redirectAttributes Класс для хранения аттрибутов которые потом можно достать после
     *                           редиректа
     * @return Редирект на страницу со списком товаров или страница создания товара
     * с ошибками валидации
     */
    @PostMapping(Routes.Commodity.CREATE)
    public String processNewCommodity(@ModelAttribute(COMMODITY_MODEL_ATTRIBUTE) @Valid final Commodity commodity,
                                      final BindingResult bindingResult,
                                      final RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute(COMMODITY_FORM_ERRORS_NAME_FOR_REDIRECT, bindingResult);
            redirectAttributes.addFlashAttribute(COMMODITY_MODEL_ATTRIBUTE, commodity);

            return Routes.redirectTo(Routes.Commodity.CREATE);
        }

        redirectAttributes.addFlashAttribute(COMMODITY_FLASH_MSG_KEY, "Товар успешно добавлен в магазин");
        commodityService.save(commodity);

        return Routes.redirectTo(Routes.Commodity.LIST);
    }

    /**
     * Загружает товар по ID и отображает его на странице с действиями
     * удаления и редактирования
     *
     * @param id ID товара который надо загрузить
     * @return Имя страницы для отображения
     */
    @GetMapping(Routes.Commodity.SHOW)
    public String view(final Model model, @PathVariable @Min(1) final long id) {
        model.addAttribute(COMMODITY_MODEL_ATTRIBUTE, findOrFail(id));

        return "admin/commodity/show";
    }

    /**
     * Удаляет товар из базы данных
     *
     * @param id ID товара который будем удалять
     * @return Редирект на страницу со списком товаров
     */
    @GetMapping(Routes.Commodity.DELETE)
    public String delete(@PathVariable long id, final RedirectAttributes redirectAttributes) {
        commodityService.delete(findOrFail(id));
        redirectAttributes.addFlashAttribute(COMMODITY_FLASH_MSG_KEY, "Товар успешно снят с продажи");

        return Routes.redirectToWithId(Routes.Commodity.SHOW, id);
    }

    /**
     * Страница для обновления товара
     *
     * @param id    ID модели которую надо загрузить
     * @param model Класс для передачи данных в модель
     * @return Имя страницы
     */
    @GetMapping(Routes.Commodity.UPDATE)
    public String update(@PathVariable final long id, final Model model) {
        model.addAttribute(COMMODITY_MODEL_ATTRIBUTE, findOrFail(id));

        return "admin/commodity/commodity_update";
    }

    /**
     * Сохранение товара после изменения
     *
     * @param commodity     Модель товара
     * @param bindingResult Результат валидации
     * @param attributes    Аттрибуты редиректа
     * @return Название роута на которую будем редиректиться
     */
    @PostMapping(Routes.Commodity.UPDATE_PROCESS)
    public String update(@ModelAttribute(COMMODITY_MODEL_ATTRIBUTE) @Valid Commodity commodity,
                         BindingResult bindingResult,
                         RedirectAttributes attributes) {
        if (bindingResult.hasErrors()) {
            attributes.addFlashAttribute(COMMODITY_FORM_ERRORS_NAME_FOR_REDIRECT, bindingResult);
            attributes.addFlashAttribute(COMMODITY_MODEL_ATTRIBUTE, commodity);
            return Routes.redirectToWithId(Routes.Commodity.UPDATE, commodity.getId());
        }
        attributes.addFlashAttribute(COMMODITY_FLASH_MSG_KEY, "Товар успешно обновлен");
        commodityService.update(commodity);

        return Routes.redirectToWithId(Routes.Commodity.SHOW, commodity.getId());
    }

    /**
     * Ищет товар по ID и если не находит, то бросает исключение о том, что
     * ресурс не найден
     *
     * @param id ID товара который надо найти
     * @return Найденный товар
     */
    private Commodity findOrFail(final long id) {
        final Commodity commodity = commodityService.findOne(id);
        if (commodity == null) {
            throw new RuntimeException();
        }
        return commodity;
    }
}