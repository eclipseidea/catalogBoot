package zab.romik.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;
import zab.romik.core.ResourceNotFoundException;
import zab.romik.dao.CommodityDao;
import zab.romik.entity.Commodity;
import zab.romik.request.CommodityDetails;
import zab.romik.request.CommodityFullDetails;
import zab.romik.service.CommodityService;

import java.util.List;
import java.util.Optional;

@Service
public class CommodityServiceImpl implements CommodityService {

    /**
     * DAO для работы с товарами
     */
    private final CommodityDao commodityDao;
    private final ConversionService conversionService;

    @Autowired
    public CommodityServiceImpl(final CommodityDao commodityDao,
                                final ConversionService conversionService) {
        this.commodityDao = commodityDao;
        this.conversionService = conversionService;
    }

    /**
     * Создает товар исходя из формы которую отсылает пользователь.
     *
     * @param form Форма с данными товара который нужно создать
     */
    @Override
    public CommodityDetails save(final CommodityDetails form) {
        Commodity commodity = conversionService.convert(form, Commodity.class);

        commodityDao.save(commodity);
        form.setId(commodity.getId());

        return form;
    }

    public List<Commodity> findAll() {
        return commodityDao.findAll();
    }

    /**
     * Method should find one commodity by id and return commodity details
     *
     * @param id commodity id
     * @return Optional of commodity details
     */
    @Override
    public Optional<CommodityFullDetails> findOne(final long id) {
        Commodity commodity = commodityDao.findOne(id);

        return Optional.ofNullable(commodity)
                .map(this::convertToCommodityDetails);
    }

    private CommodityFullDetails convertToCommodityDetails(Commodity commodity) {
        return conversionService.convert(commodity, CommodityFullDetails.class);
    }

    @Override
    public CommodityFullDetails findRequiredById(long id) {
        return findOne(id).orElseThrow(ResourceNotFoundException::new);
    }

    @Override
    public boolean delete(final long commodityId) {
        Commodity commodity = commodityDao.findOne(commodityId);
        if (commodity == null) {
            return false;
        }

        commodity.markDeleted();
        commodityDao.save(commodity);

        return true;
    }
}
