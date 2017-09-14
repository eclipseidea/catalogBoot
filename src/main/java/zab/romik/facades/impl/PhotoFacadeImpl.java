package zab.romik.facades.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.facades.PhotoFacade;
import zab.romik.service.Uploader;

import java.util.List;

/**
 * Фасад для объединения подсистем загрузки файлов и сохранения
 * их в базе данных
 */
@Service
public class PhotoFacadeImpl implements PhotoFacade {

    private static final Logger LOGGER = LoggerFactory.getLogger(PhotoFacadeImpl.class);

    /** Cервис для загрузки файлов */
    private final Uploader uploader;

    public PhotoFacadeImpl(Uploader uploader) {
        this.uploader = uploader;
    }

    @Override
    public void uploadFilesAndPersistThem(List<MultipartFile> files) {
        final List<String> uploadedFileNames = uploader.uploadAllMultipartFiles(files);

        // persist them
        LOGGER.info("" + uploadedFileNames);
    }
}
