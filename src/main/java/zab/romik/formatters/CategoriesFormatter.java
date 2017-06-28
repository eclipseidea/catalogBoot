package zab.romik.formatters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import zab.romik.dao.CategoriesDao;
import zab.romik.entity.Categories;

import java.util.Locale;

/**
 * Этот форматтер используется для того чтобы выбирать категории по
 * ID при сохранении товара, сущность {@link zab.romik.entity.Commodity}
 *
 * @author proweber1
 * @since 0.0.1
 */
@Component
public class CategoriesFormatter
        extends AbstractEntityFormatterById<Categories, CategoriesDao> {

    /**
     * {@inheritDoc}
     */
    @Autowired
    @Override
    public void setRepository(CategoriesDao repository) {
        this.repository = repository;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    String getParserExceptionMessage(String id, Locale locale) {
        return "Категории с id = " + id + " не существует!";
    }
}
