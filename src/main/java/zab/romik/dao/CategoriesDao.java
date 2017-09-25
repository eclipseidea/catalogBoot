package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import zab.romik.entity.Categories;

import java.util.List;

public interface CategoriesDao extends JpaRepository<Categories, Long> {

    @Query("select name from Categories where parent_id =:id")
    List<Categories> findAllByParentId(@Param("id") Long id);

    List<Categories> findAllByParentIsNull();
}
