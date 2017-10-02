package zab.romik.domain.service;

import zab.romik.domain.entities.Commodity;

import java.util.List;

public interface CommodityService {
    Commodity save(final Commodity commodity);

    List<Commodity> findAll();

    Commodity findOne(long id);

    void delete(final Commodity commodity);

    void update(Commodity commodity);
}
