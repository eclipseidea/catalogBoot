package zab.romik.service;

import zab.romik.entity.Categories;

import java.util.List;

public interface CategoriesService {

    List<Categories> findNullParentId();

    void save(Categories categories);

    List<Categories> findAll();

    Categories findOne(long id);

    void delete(long id);

    void update(Categories categories);
}
