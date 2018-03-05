package zab.romik.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import zab.romik.Routes;
import zab.romik.entity.Categories;
import zab.romik.entity.Country;
import zab.romik.entity.Properties;
import zab.romik.enums.CommodityGender;
import zab.romik.request.CommodityDetails;
import zab.romik.service.*;

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
     * Сервис для работы с files
     */
    private final PhotoService photoService;

    /**
     * Сервис для работы с товарами
     */
    private final CommodityService commodityService;

    /**
     * Сервис для работы с категориями
     */
    private final CategoriesService categoriesService;

    /**
     * Cервис для работы со странами производителями
     */
    private final CountryService countryService;

    /**
     * Cервис для работы с PROPERTIES
     */
    private final PropertiesService propertiesService;

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
                               final CountryService countryService,
                               final PropertiesService propertiesService,
                               final PhotoService photoService) {
        this.commodityService = commodityService;
        this.categoriesService = categoriesService;
        this.countryService = countryService;
        this.propertiesService = propertiesService;
        this.photoService = photoService;
    }

    /**
     * Глобальная переменная список полов, чтобы не делать дублирования
     * для того чтобы кидать ее во вьюху.
     *
     * @return Список полов
     */
    @ModelAttribute("genders")
    public CommodityGender[] genders() {
        return CommodityGender.values();
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
     * Возвращает список проперти из базы данных
     *
     * @return Список properties
     */
    @ModelAttribute("properties")
    public List<Properties> properties(){return propertiesService.findAll();}

    /**
     * loading files in the template
     * @return
     */
    /*@ModelAttribute("photos")
    public List <String> photoLoad(){return commodityService.loadPhotos();}*/

    /**
     * Страница со списком товаров.
     *
     * @param model Свойства которые будут инжектиться в отображение
     * @return Имя вьюхи которую надо отрендерить
     */
    @GetMapping(Routes.Commodity.LIST)
    public String allCommodities(Model model) {
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
        model.addAttribute(COMMODITY_MODEL_ATTRIBUTE, new CommodityDetails());

        return CREATE_COMMODITY_VIEW_NAME;
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
        model.addAttribute(COMMODITY_MODEL_ATTRIBUTE, commodityService.findRequiredById(id));

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
        if (commodityService.delete(id)) {
            redirectAttributes.addFlashAttribute("commoditySuccessfulDeleted", "Товар успешно снят с продажи");
        } else {
            redirectAttributes.addFlashAttribute("commodityWasNotDeleted", "Товар удалить не удалось, попробуйте позже");
        }

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
        model.addAttribute(COMMODITY_MODEL_ATTRIBUTE, commodityService.findRequiredById(id));

        return "admin/commodity/commodity_update";
    }
}