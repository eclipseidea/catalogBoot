package zab.romik.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.domain.entities.Categories;
import zab.romik.domain.repositories.CategoriesDao;
import zab.romik.domain.service.CategoriesService;

import java.util.List;

@Service
public class CategoriesServiceImpl implements CategoriesService {

    private final CategoriesDao categoriesDao;

    @Autowired
    public CategoriesServiceImpl(CategoriesDao categoriesDao) {
        this.categoriesDao = categoriesDao;
    }

    public void save(Categories categories) {
        categoriesDao.save(categories);
    }

    public List<Categories> findAll() {
        return categoriesDao.findAll();
    }

    public Categories findOne(long id) {
        return categoriesDao.findOne(id);
    }

    public void delete(long id) {
        categoriesDao.delete(id);
    }

    public void update(Categories categories) {
        categoriesDao.save(categories);
    }

    public List<Categories> findNullParentId() {
        return categoriesDao.findAllByParentIsNull();
    }

}
