package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.User;

public interface UserDao extends JpaRepository<User, Long> {
//	User findByNameAndEmail(String name, String email);
//	@Query("select distinct u from User u left join fetch u.orders where u.id=:id")
//	User findUserWithCommodity(@Param("id")int id);
   User findByName(String name);
}
