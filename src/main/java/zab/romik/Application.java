package zab.romik;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Входная точка в приложение, этот класс является корнем
 * приложения каталога и запускает spring boot приложение
 */
@SpringBootApplication
@EnableAutoConfiguration
public class Application {

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
