package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zab.romik.entity.Categories;

import java.util.List;

public interface CategoriesDao extends JpaRepository<Categories, Long> {

    List<Categories> findAllByParentIsNull();
}
