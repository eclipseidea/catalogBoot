package zab.romik.domain.service;

import zab.romik.domain.entities.Visitor;

import java.util.List;

public interface VisitorService {
    void save(Visitor visitor);

    List<Visitor> findAll();

    Visitor findOne(long id);

    void delete(long id);

    void update(Visitor visitor);
}
