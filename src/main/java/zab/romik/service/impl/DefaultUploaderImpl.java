package zab.romik.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.service.FileNamingStrategy;
import zab.romik.service.Uploader;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Стандартный загрузчик файлов, загружает файлы в папку на сервере
 */
@Service
public class DefaultUploaderImpl implements Uploader {

    /**
     * Стратегия для именования новых файлов
     */
    private final FileNamingStrategy fileNamingStrategy;
    private final String directoryForUploadingFiles;

    public DefaultUploaderImpl(FileNamingStrategy fileNamingStrategy,
                               @Value("${screenshot.root.path}") String directoryForUploadingFiles) {
        this.fileNamingStrategy = fileNamingStrategy;
        this.directoryForUploadingFiles = directoryForUploadingFiles;
    }

    /**
     * {@inheritDoc}
     * <p>
     * Решение основано на {@literal Java8 Stream API}, если видите не понятные
     * конструкции, советую почитать документацию по stream api
     */
    @Override
    public List<String> uploadAllMultipartFiles(List<MultipartFile> inputFiles) {
        return inputFiles.stream()
                .filter(file -> !file.isEmpty())
                .map(this::uploadMultipartFile)
                .collect(Collectors.toList());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String uploadMultipartFile(MultipartFile file) {
        checkFileIsNotEmpty(file);

        return FileUploader.newInstance(
                file, fileNamingStrategy, directoryForUploadingFiles).transferFile();
    }

    /**
     * Метод проверяет файл на то, что он не пустой, если файл пустой, выбрасывается
     * исключение, мы не должны загружать пустые файлы, чтобы не наводить мусор
     * на сервере
     *
     * @param file Файл который будет проверяться на пустоту
     */
    private void checkFileIsNotEmpty(MultipartFile file) {
        if (file.isEmpty()) {
            throw new RuntimeException("Вы не можете загружать пустые файлы!");
        }
    }

    /**
     * Вспомогательный класс который занимается непосредственной загрузкой
     * файлов, вынесен в отдельный класс потому из-за того что если бы мы
     * разбивали этот функционал по методам класса {@link DefaultUploaderImpl},
     * то мы бы начали терять зависимость методов от свойств класса, а это
     * обычно означает, что класс имеет несколько ответственностей
     */
    private static class FileUploader {

        /**
         * Файл который загружается на сервер
         */
        private final MultipartFile file;

        /**
         * Алгоритм который будет генерировать имя для загружаемого файла
         */
        private final FileNamingStrategy namingStrategy;

        /**
         * Директория в которую нужно загружать файл
         */
        private final String targetDirectory;

        private FileUploader(MultipartFile file, FileNamingStrategy namingStrategy,
                             String targetDirectory) {
            this.file = file;
            this.namingStrategy = namingStrategy;
            this.targetDirectory = targetDirectory;
        }

        /**
         * Статический метод фабрика, смотрите книгу {@literal Effective Java}
         */
        static FileUploader newInstance(MultipartFile file, FileNamingStrategy namingStrategy,
                                        String targetDirectory) {

            return new FileUploader(file, namingStrategy, targetDirectory);
        }

        /**
         * Метод оборачивает загрузку файла в блок {@literal try-catch},
         * если файл загрузить не удалось, то будет выброшено исключение
         * {@literal RuntimeException} с причиной по которой не удалось
         * загрузить файл и сообщением об ошибке загрузки файла
         *
         * @return Название загруженного файла
         */
        String transferFile() {
            try {
                return uploadFileToTargetDirectory();
            } catch (IOException e) {
                throw new RuntimeException("Не удалось загрузить файл", e);
            }
        }

        /**
         * Метод создает название для загружаемого файла, уникальное, чтобы
         * файлы с одинаковыми названиями не затирали друг друга и делегирует
         * загрузку файла другому методу
         *
         * @return Название загруженного файла (уникальное)
         * @throws IOException Не удалось загрузить файл
         */
        private String uploadFileToTargetDirectory() throws IOException {
            final String randomFileName = namingStrategy.createNewFileName(file);
            final String pathForTransferFile = buildUploadDirectory(randomFileName);

            delegateTransferFileToSpringFiles(pathForTransferFile);

            return randomFileName;
        }

        /**
         * Метод собирает путь для загрузки файла на сервер
         *
         * @param fileName Название файла которое будет загружено (уникальное)
         * @return Полный путь для загрузки файла
         */
        private String buildUploadDirectory(String fileName) {
            return String.format("%s/%s", targetDirectory, fileName);
        }

        /**
         * Метод делегирует загрузку файла интерфейсу {@link MultipartFile}
         *
         * @param destinationPath Полный путь для загрузки файла
         * @throws IOException Исключение если не удалось загрузить файл
         */
        private void delegateTransferFileToSpringFiles(String destinationPath) throws IOException {
            file.transferTo(new File(destinationPath));
        }
    }
}
