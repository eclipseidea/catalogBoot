package zab.romik.controller.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import zab.romik.core.ResourceNotFoundException;
import zab.romik.entity.Categories;
import zab.romik.service.CategoriesService;
import zab.romik.service.CommodityService;

import java.util.Objects;

@Controller
public class CommoditySiteController {
    /**
     * CommodityService
     */
    private CommodityService commodityService;
    /**
     * CategoriesService
     *
     */
    private CategoriesService categoriesService;
    /**
     *
     * @param commodityService для работы с товарами
     * @param categoriesService для работы с категориями
     */
    @Autowired
    public CommoditySiteController(final CommodityService commodityService,final CategoriesService categoriesService) {
        this.commodityService = commodityService;
        this.categoriesService = categoriesService;
    }

    /**
     * @param id  id запрашиваемой категории
     * @param ui  Свойства которые будут инжектиться в отображение
     * @return    Имя вьюхи которую надо отрендерить
     */
    @GetMapping("/categories/{id}")
    public String showCommodity(@PathVariable final long id, Model ui) {
        Categories category = categoriesService.findOne(id);
        if (Objects.isNull(category)) {
            throw new ResourceNotFoundException();
        }

        ui.addAttribute("commodity_list", commodityService.findAll());
            return "site/site_commodity_show";
    }



}
