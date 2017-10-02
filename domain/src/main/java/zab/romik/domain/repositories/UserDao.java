package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.User;

public interface UserDao extends JpaRepository<User, Long> {
}
