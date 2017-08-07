package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zab.romik.entity.Photo;



public interface PhotoDao extends JpaRepository<Photo,Long> {
}
