package zab.romik.domain.properties;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * Конфигурация для сервиса загрузки файлов
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "screenshot")
public class FileUploadProperties {

    /** Место хранения файлов, обязательное свойство */
    @NotEmpty
    private String location;
}
