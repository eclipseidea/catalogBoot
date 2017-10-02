package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Country;

/**
 * @since 0.0.1
 */
public interface CountryDao extends JpaRepository<Country, Long> {
}
