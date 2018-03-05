package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zab.romik.entity.Photo;

import java.util.List;


@Repository
public interface PhotoDao extends JpaRepository<Photo,Long> {

    List<Photo> findAllByCommodityIdEquals(long id);

}
