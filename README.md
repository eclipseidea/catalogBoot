### Запуск

По-умолчанию в приложении используется профиль dev, для того чтобы создать файл
с настройками для локального окружения в папке `src/main/resources` скопируйте и переименуйте файл 
`application-dev.properties.sample` в `application-dev.properties` и в нем установите настройки для подключения к
своей базе данных

#### При этом не удаля сам файл `application-dev.properties.sample`

Для запуска проекта можно воспользоваться maven wrapper'ом, для этого выполните следующую команду в консоле

```bash
./mvnw package -am -T -DskipTests
```
Так же можно запустить приложение по "идеевски", для этого в
Intellij idea запустите класс `Application` в корне проекта