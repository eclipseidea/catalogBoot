package zab.romik.service;


import zab.romik.entity.Country;

import java.util.List;

public interface CountryService {

    void save(Country country);

    List<Country> findAll();

    Country findOne(long id);

    void delete(long id);

    void update(Country country);
}
