package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Photo;

public interface PhotoDao extends JpaRepository<Photo, Long> {
}
