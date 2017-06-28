package zab.romik.service;

import zab.romik.entity.Categories;

import java.util.List;

public interface ProductToPropertiesService {

    void save(ProductToPropertiesService productToPropertiesService);

    List<Categories> findAll();

    Categories findOne(long id);

    void delete(long id);

    void update(ProductToPropertiesService productToPropertiesService);
}
