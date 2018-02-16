package zab.romik.service.exceptions;

/**
 * Exception for throw when given file is empty
 *
 * @author vgusser
 */
public class EmptyFileException extends RuntimeException {
    public EmptyFileException(String fileName) {
        super("Попытка загрузки пустого файла " + fileName);
    }
}
