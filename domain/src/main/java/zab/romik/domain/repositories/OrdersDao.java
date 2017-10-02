package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Orders;

public interface OrdersDao extends JpaRepository<Orders, Long> {
}
