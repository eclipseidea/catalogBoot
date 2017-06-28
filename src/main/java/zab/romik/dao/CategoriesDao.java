package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Categories;

public interface CategoriesDao extends JpaRepository<Categories, Long> {

}
