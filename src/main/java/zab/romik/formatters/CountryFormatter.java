package zab.romik.formatters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import zab.romik.dao.CountryDao;
import zab.romik.entity.Country;

import java.util.Locale;

/**
 * Это форматтер для поиска сущности поставщика, используется для того
 * чтобы найти поставщика по ID при сохранении товара, сущность
 * {@link zab.romik.entity.Commodity}
 *
 * @author proweber1
 * @since 0.0.1
 */
@Component
public class CountryFormatter
        extends AbstractEntityFormatterById<Country, CountryDao> {

    /**
     * {@inheritDoc}
     */
    @Override
    String getParserExceptionMessage(String id, Locale locale) {
        return "Поставщика с id = " + id + " не существует!";
    }

    /**
     * {@inheritDoc}
     */
    @Autowired
    @Override
    public void setRepository(CountryDao repository) {
        this.repository = repository;
    }
}
