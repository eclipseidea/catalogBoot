package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Value;

public interface ValueDao extends JpaRepository<Value, Long> {
}
