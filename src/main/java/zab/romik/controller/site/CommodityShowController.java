package zab.romik.controller.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import zab.romik.entity.Categories;
import zab.romik.entity.Commodity;
import zab.romik.service.CategoriesService;
import zab.romik.service.CommodityService;

import java.util.List;

@Controller
public class CommodityShowController {

    private final CommodityService commodityService;

    private final CategoriesService categoriesService;

    @Autowired
    public CommodityShowController(final CommodityService commodityService, final CategoriesService categoriesService) {
        this.commodityService = commodityService;
        this.categoriesService = categoriesService;
    }

    @PostMapping("/com_show")
    public Categories showCommodity(Model model, Long id) {
        return categoriesService.findOne(id);
    }

    @GetMapping("/site._components/commodity_show")
    public List<Commodity> showAllCommodity() {
        return commodityService.findAll();
    }
}
