package zab.romik.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.dao.Orders_CommodityDao;
import zab.romik.entity.Orders_Commodity;
import zab.romik.service.Orders_CommodityService;

import java.util.List;

@Service
public class Orders_CommodityServiceImpl implements Orders_CommodityService {

    @Autowired
    private Orders_CommodityDao Orders_ComodityDao;

    public void save(Orders_Commodity orders_Commodity) {
        Orders_ComodityDao.save(orders_Commodity);
    }

    public List<Orders_Commodity> findAll() {
        return Orders_ComodityDao.findAll();
    }

    public Orders_Commodity findOne(long id) {
        return Orders_ComodityDao.findOne(id);
    }

    public void delete(long id) {
        Orders_ComodityDao.delete(id);
    }

    public void update(Orders_Commodity orders_Commodity) {
        Orders_ComodityDao.save(orders_Commodity);
    }
}
