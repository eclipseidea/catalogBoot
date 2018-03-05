package zab.romik.service.impl;

import org.springframework.stereotype.Service;
import zab.romik.adapter.FileAdapter;
import zab.romik.dao.PhotoDao;
import zab.romik.entity.Photo;
import zab.romik.service.PhotoService;
import zab.romik.service.UploadService;

@Service
public class PhotoServiceImpl implements PhotoService {
    private final PhotoDao photoDao;
    private final UploadService uploadService;

    /**
     * дефолтный конструктор
     */
    public PhotoServiceImpl(PhotoDao photoDao, UploadService uploadService) {
        this.photoDao = photoDao;
        this.uploadService = uploadService;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void attachFileToCommodity(long commodityId, boolean isIndex,
                                      FileAdapter fileAdapter) {

        String fileName = uploadService.upload(fileAdapter);

        photoDao.save(new Photo(fileName, commodityId, isIndex));
    }

    public void searchFilesInFolder() {

    }

}
