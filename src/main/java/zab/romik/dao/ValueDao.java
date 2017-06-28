package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Value;

public interface ValueDao extends JpaRepository<Value, Long> {

}
