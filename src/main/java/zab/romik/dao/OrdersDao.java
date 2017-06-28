package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Orders;

public interface OrdersDao extends JpaRepository<Orders, Long> {
//	Orders findByDate(LocalDate date);
//	@Query("select distinct o from Orders o left join fetch o.commodity where o.id=:id ")
//	Orders  findOrdersWithCommodity(@Param("id")int id);
}
