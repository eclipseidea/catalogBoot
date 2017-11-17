package zab.romik.facades.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.entity.Photo;
import zab.romik.facades.PhotoFacade;
import zab.romik.service.PhotoService;
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

    private PhotoService photoService;

    public PhotoFacadeImpl(Uploader uploader, PhotoService photoService) {
        this.uploader = uploader;
        this.photoService = photoService;
    }

    @Override
    public void uploadFilesAndPersistThem(List<MultipartFile> files) {
        List<String> uploadedFileNames = uploader.uploadAllMultipartFiles(files);
        if (uploadedFileNames.size() != 0) {
            for (String name : uploadedFileNames) {
                Photo photo = new Photo();
                photo.setFileName(name);
                photoService.save(photo);
                LOGGER.info("loaded" + uploadedFileNames);

            }


        }
    }
}
