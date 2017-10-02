package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Commodity;

public interface CommodityDao extends JpaRepository<Commodity, Long> {
}
