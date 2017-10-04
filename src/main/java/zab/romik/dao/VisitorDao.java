package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Visitor;


public interface VisitorDao extends JpaRepository<Visitor,Long> {
}
