package zab.romik.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.dao.PropertiesDao;
import zab.romik.dao.ValueDao;
import zab.romik.entity.Properties;
import zab.romik.service.PropertiesService;

import java.util.List;


@Service
public class PropertiesServiceImpl implements PropertiesService {

    private PropertiesDao propertiesDao;

    private ValueDao valueDao;

    @Autowired
    public PropertiesServiceImpl(final PropertiesDao propertiesDao, final ValueDao valueDao) {
        this.propertiesDao = propertiesDao;
        this.valueDao = valueDao;
    }


    @Override
    public void save(Properties properties) {

    }

    @Override
    public List<Properties> findAll() {
        return propertiesDao.findAll();
    }

    @Override
    public Properties findOne(long id) {
        return propertiesDao.findOne(id);
    }

    @Override
    public void delete(long id) {

    }

    @Override
    public void update(Properties properties) {

    }
}
