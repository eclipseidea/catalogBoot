package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Properties;

public interface PropertiesDao extends JpaRepository<Properties, Long> {

}
