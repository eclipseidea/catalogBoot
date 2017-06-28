package zab.romik.service;

import zab.romik.entity.Categories;
import zab.romik.entity.Value;

import java.util.List;

public interface ValueService {

    void save(Value value);

    List<Value> findAll();

    Categories findOne(long id);

    void delete(long id);

    void update(Value value);
}
