package zab.romik.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import zab.romik.Routes;
import zab.romik.entity.Commodity;
import zab.romik.service.CommodityService;

import javax.validation.Valid;

@RestController
@RequestMapping(Routes.Commodity.CREATE)
public class CommoditiesController {


    private CommodityService commodityService;


    @Autowired
    public CommoditiesController(CommodityService commodityService) {
        this.commodityService = commodityService;
    }

    @PostMapping("/commodities")
    public 
    HttpStatus save(/*@Valid,*/@RequestBody final Commodity commodity) {
        commodityService.save(commodity);
        return HttpStatus.OK;
    }
}
