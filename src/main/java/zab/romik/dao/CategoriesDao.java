package zab.romik.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import zab.romik.entity.Categories;

import java.util.List;

public interface CategoriesDao extends JpaRepository<Categories, Long> {
    /**
     * @param id параметр для поиска
     * @return Выводим список подкатегорий в контент
     */
    @Query("select distinct c.children from Categories c where c.id =:id")
    List<Categories> findAllById(@Param("id") long id);

    /**
     * @return список всех категорий с парентом null
     */
    List<Categories> findAllByParentIsNull();
}
