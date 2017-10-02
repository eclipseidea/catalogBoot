package zab.romik.domain.service;

import zab.romik.domain.entities.Properties;

import java.util.List;

public interface PropertiesService {
    void save(Properties properties);

    List<Properties> findAll();

    Properties findOne(long id);

    void delete(long id);

    void update(Properties properties);
}
