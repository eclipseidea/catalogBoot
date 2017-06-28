package zab.romik.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.dao.CommodityDao;
import zab.romik.entity.Commodity;
import zab.romik.service.CommodityService;

import java.util.List;

@Service
public class CommodityServiceImpl implements CommodityService {

    /** DAO для работы с товарами */
    private final CommodityDao commodityDao;

    @Autowired
    public CommodityServiceImpl(final CommodityDao commodityDao) {
        this.commodityDao = commodityDao;
    }

    /**
     * Создает товар исходя из формы которую отсылает пользователь.
     *
     * @param form Форма с данными товара который нужно создать
     */
    @Override
    public void save(final Commodity form) {
        commodityDao.save(form);
    }

    public List<Commodity> findAll() {
        return commodityDao.findAll();
    }

    public Commodity findOne(long id) {
        return commodityDao.findOne(id);
    }

    /**
     * Мягкое удаление товара, фактически не удаляется, но перестает быть
     * доступен для поиска и заказа.
     *
     * @param commodity Сущность товара которую будем удалять
     */
    public void delete(final Commodity commodity) {
        commodity.setDeleted(true);
        update(commodity);
    }

    public void update(Commodity commodity) {
        commodityDao.save(commodity);
    }
}
