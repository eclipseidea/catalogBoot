package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Properties;

public interface PropertiesDao extends JpaRepository<Properties, Long> {
}
