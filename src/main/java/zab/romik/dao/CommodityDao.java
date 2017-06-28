package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Commodity;

public interface CommodityDao extends JpaRepository<Commodity, Long> {
//	Commodity  findByName(String name);
//	@Query("select distinct c from Commodity c left join fetch c.country where c.id=:id")
//	Commodity  findCommodityWithCountry(@Param("id")int id);
}
