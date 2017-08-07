package zab.romik;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.context.annotation.Bean;
import zab.romik.core.CatalogErrorAttributes;

/**
 * Входная точка в приложение, этот класс является корнем
 * приложения каталога и запускает spring boot приложение
 */
@SpringBootApplication
public class Application {

    /**
     * Возвращает класс который содержит список аттрибутов
     * которые будут сериализоваться в json схему
     *
     * @return Аттрибуты исключения
     */
    @Bean
    public ErrorAttributes errorAttributes() {
        return new CatalogErrorAttributes();
    }

    /**
     * Запускает спринг бут приложение и указывает {@link Application}
     * как основной класс приложения
     *
     * @param args Аргументы с консоли
     */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
