package zab.romik.service;

import zab.romik.entity.Commodity;

import java.util.List;

public interface CommodityService {

    void save(final Commodity commodity);

    List<Commodity> findAll();

    Commodity findOne(long id);

    void delete(final Commodity commodity);

    void update(Commodity commodity);
}
