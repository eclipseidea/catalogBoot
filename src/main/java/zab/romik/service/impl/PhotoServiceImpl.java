package zab.romik.service.impl;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.dao.PhotoDao;
import zab.romik.entity.Photo;
import zab.romik.service.FileNamingStrategy;
import zab.romik.service.PhotoService;
import zab.romik.utils.FileUtils;

import java.util.UUID;

@Service
public class PhotoServiceImpl implements PhotoService, FileNamingStrategy {

    /**
     * сервис для сохранения картинок
     */
    private final PhotoDao photoDao;

    /**
     * дефолтный конструктор
     */
    public PhotoServiceImpl(PhotoDao photoDao) {
        this.photoDao = photoDao;
    }


    @Override
    public void attachFileToCommodity(long commodityId,
                                      boolean isIndex,
                                      String fileName) {
        Photo photo = new Photo(fileName, commodityId, isIndex);

        photoDao.save(photo);
    }

    @Override
    public String createNewFileName(MultipartFile sourceFile) {
        final String originalFileName = sourceFile.getOriginalFilename();
        final String randomUUID = UUID.randomUUID().toString();
        final String fileExtension = FileUtils.getFileExtension(originalFileName);

        return String.format("%s.%s", randomUUID, fileExtension);
    }

}
