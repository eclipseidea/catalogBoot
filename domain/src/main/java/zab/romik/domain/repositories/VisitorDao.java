package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Visitor;

public interface VisitorDao extends JpaRepository<Visitor,Long> {
}
