package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zab.romik.entity.Photo;


@Repository
public interface PhotoDao extends JpaRepository<Photo,Long> {
//    @Query(value = "INSERT INTO photo (`file_name`/*, `is_index`, `commodity_id`*/)VALUES (1)", nativeQuery = true)
//    Photo bulkInsert(@Param("file_name") String name/*,@Param("is_index") boolean is_index,@Param("commodity_id") Long id*/);

//@Query("insert into photo (`file_name`)values (1)"name = true)
//void bulkInsert(@Param("name")String name);
}
