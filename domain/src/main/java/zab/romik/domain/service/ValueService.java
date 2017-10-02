package zab.romik.domain.service;

import zab.romik.domain.entities.Categories;
import zab.romik.domain.entities.Value;

import java.util.List;

public interface ValueService {
    void save(Value value);

    List<Value> findAll();

    Categories findOne(long id);

    void delete(long id);

    void update(Value value);
}
