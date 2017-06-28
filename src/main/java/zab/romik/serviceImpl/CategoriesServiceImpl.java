package zab.romik.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.dao.CategoriesDao;
import zab.romik.entity.Categories;
import zab.romik.service.CategoriesService;

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

}
