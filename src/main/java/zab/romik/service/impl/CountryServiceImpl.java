package zab.romik.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.dao.CountryDao;
import zab.romik.entity.Country;
import zab.romik.service.CountryService;

import java.util.List;


@Service
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryDao countryDao;

    private Country country;


    public void save(Country country) {
        countryDao.save(country);

    }

    public List<Country> findAll() {
        return countryDao.findAll();
    }

    public Country findOne(long id) {
        return countryDao.findOne(id);
    }

    public void delete(long id) {
        countryDao.delete(id);
    }

    public void update(Country country) {
        countryDao.save(country);

    }
}
