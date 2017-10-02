package zab.romik.domain.service;

import zab.romik.domain.entities.Country;

import java.util.List;

public interface CountryService {
    void save(Country country);

    List<Country> findAll();

    Country findOne(long id);

    void delete(long id);

    void update(Country country);
}
