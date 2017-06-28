package zab.romik.service;

import zab.romik.entity.Orders_Commodity;

import java.util.List;

public interface Orders_CommodityService {

    void save(Orders_Commodity orders_Commodity);

    List<Orders_Commodity> findAll();

    Orders_Commodity findOne(long id);

    void delete(long id);

    void update(Orders_Commodity orders_Commodity);

}