package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Commodity;

public interface CommodityDao extends JpaRepository<Commodity, Long> {

}
