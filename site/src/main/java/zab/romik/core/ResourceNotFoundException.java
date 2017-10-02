package zab.romik.core;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Исключение которое нужно возбуждать тогда, когда ресурс не был найден
 *
 * @author proweber1
 * @apiNote Использовать это исключение нужно без сообщения, потому что это
 * просто знак того что надо отобразить страницу с ошибкой и все
 * @since 0.0.1
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
}
