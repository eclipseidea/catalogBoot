package zab.romik.service;

import zab.romik.entity.Commodity;
import zab.romik.request.CommodityDetails;
import zab.romik.request.CommodityFullDetails;
import zab.romik.request.CommodityFullDetailsWithPhotos;

import java.util.List;
import java.util.Optional;

public interface CommodityService {

    CommodityFullDetailsWithPhotos showCommodity(long id);

    CommodityDetails save(CommodityDetails commodity);

    List<Commodity> findAll();

    Optional<CommodityFullDetails> findOne(long id);

    CommodityFullDetails findRequiredById(long id);

    boolean delete(long id);

    /*List<String> loadPhotos();*/

}
