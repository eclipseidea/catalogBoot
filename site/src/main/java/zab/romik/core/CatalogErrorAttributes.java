package zab.romik.core;

import org.springframework.boot.autoconfigure.web.DefaultErrorAttributes;
import org.springframework.web.context.request.RequestAttributes;

import java.util.Map;

/**
 * Этот класс используется для того чтобы настроить список аттрибутов которые
 * должны выводиться при сериализации исключения
 *
 * @author proweber1
 * @since 0.0.1
 */
public class CatalogErrorAttributes extends DefaultErrorAttributes {

    /**
     * Название аттрибута который содержит класс исключения
     */
    private static final String EXCEPTION_ATTRIBUTE = "exception";

    /**
     * {@inheritDoc}
     */
    @Override
    public Map<String, Object> getErrorAttributes(
            RequestAttributes requestAttributes, boolean includeStackTrace) {
        final Map<String, Object> errorAttributes
                = super.getErrorAttributes(requestAttributes, includeStackTrace);

        errorAttributes.remove(EXCEPTION_ATTRIBUTE);
        return errorAttributes;
    }
}
