package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Orders_Commodity;

public interface Orders_CommodityDao
        extends JpaRepository<Orders_Commodity, Long> {
}
