package zab.romik.service;

import zab.romik.adapter.FileAdapter;
import zab.romik.service.exceptions.EmptyFileException;

/**
 * Service for uploading files to server
 */
public interface UploadService {

    /**
     * Should upload file to directory on server
     *
     * @param file file for uploading
     * @return uploaded file name
     * @throws EmptyFileException when uploading file is empty
     */
    String upload(FileAdapter file);
}
