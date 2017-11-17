package zab.romik.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.dao.PhotoDao;
import zab.romik.entity.Photo;
import zab.romik.service.PhotoService;

import java.io.IOException;
import java.util.List;

@Service
public class PhotoServiceImpl implements PhotoService {

    /**
     * сервис для сохранения картинок
     */
    private PhotoDao photoDao;

    /**
     * дефолтный конструктор
     */
    public PhotoServiceImpl() {
    }

    /**
     *
     * @param photoDao
     * @throws IOException
     */
    @Autowired
    public PhotoServiceImpl(PhotoDao photoDao) {
        this.photoDao = photoDao;
    }

    @Override
    public void save(Photo photo) {
        photoDao.save(photo);
    }

    @Override
    public List<Photo> findAll() {
        return null;
    }

    @Override
    public Photo findOne(long id) {
        return null;
    }

    @Override
    public void delete(long id) {

    }

    @Override
      public void update(Photo photo){

    }
}
