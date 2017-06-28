package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Visitor;

/**
 * Created by user on 05/24/2017.
 */
public interface VisitorDao extends JpaRepository<Visitor,Long> {
}
