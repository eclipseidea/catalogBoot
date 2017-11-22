package zab.romik.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import zab.romik.entity.Commodity;
import zab.romik.service.CommodityService;

import javax.validation.Valid;

@RestController
@RequestMapping("/commodities")
public class CommoditiesController {

    private CommodityService commodityService;

    @Autowired
    public CommoditiesController(CommodityService commodityService) {
        this.commodityService = commodityService;
    }

    @PostMapping
    public Commodity save(@Valid final Commodity commodity, final RedirectAttributes redirectAttributes) {
        Commodity savedCommodity = commodityService.save(commodity);
        redirectAttributes.addFlashAttribute("productWasSuccessfulCreated", "Успешно сохранено");
        return savedCommodity;
    }
}
