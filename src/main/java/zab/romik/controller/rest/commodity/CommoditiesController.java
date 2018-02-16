package zab.romik.controller.rest.commodity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import zab.romik.request.CommodityDetails;
import zab.romik.service.CommodityService;

import javax.validation.Valid;

@RestController
@RequestMapping("/commodities")
public class CommoditiesController {
    private CommodityService commodityService;


    @Autowired
    public CommoditiesController(final CommodityService commodityService) {
        this.commodityService = commodityService;

    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CommodityDetails save(@Valid @RequestBody CommodityDetails commodity) {
        return commodityService.save(commodity);
    }
}
