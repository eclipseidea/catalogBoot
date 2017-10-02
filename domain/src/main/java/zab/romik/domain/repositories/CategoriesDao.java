package zab.romik.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.domain.entities.Categories;

import java.util.List;

public interface CategoriesDao extends JpaRepository<Categories, Long> {
    List<Categories> findAllByParentIsNull();
}
