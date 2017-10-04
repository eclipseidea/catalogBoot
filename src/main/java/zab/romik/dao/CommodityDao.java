package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Commodity;

public interface CommodityDao extends JpaRepository<Commodity, Long> {

//	@Query("select c from Commodity c left join fetch c.categories where c.id=:id")
//    List <Commodity> findCommodityBySubcat(@Param("id") long id);

//    List<Commodity> findCommodityBySubCat(long id);
}
