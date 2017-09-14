package zab.romik.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Интерфейс для загрузки файлов на сервер
 */
public interface Uploader {

    /**
     * Загружает список файлов который прислали пользователи
     *
     * @param inputFiles Список файлов которые прислали пользователи
     * @return Список имен загруженных файлов
     */
    List<String> uploadAllMultipartFiles(List<MultipartFile> inputFiles);

    /**
     * Загружает один {@literal multipart} файл на сервер
     *
     * @param file Файл из запроса пользователя
     * @return Название загруженного файла
     */
    String uploadMultipartFile(MultipartFile file);
}
