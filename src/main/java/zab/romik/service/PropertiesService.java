package zab.romik.service;

import zab.romik.entity.Properties;

import java.util.List;


public interface PropertiesService {

    void save(Properties properties);

    List<Properties> findAll();

    Properties findOne(long id);

    void delete(long id);

    void update(Properties properties);


}
