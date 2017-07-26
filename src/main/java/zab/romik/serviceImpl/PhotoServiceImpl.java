package zab.romik.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zab.romik.dao.PhotoDao;
import zab.romik.entity.Photo;
import zab.romik.service.PhotoService;

import java.util.List;

@Service
public class PhotoServiceImpl implements PhotoService {

    private Photo photo;

    private PhotoDao photoDao;


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
        return photoDao.findAll();
    }

    @Override
    public Photo findOne(long id) {
        return photoDao.findOne( id);
    }

    @Override
    public void delete(long id) {
        photoDao.delete(id);
    }

    @Override
    public void update(Photo photo) {
        photoDao.save(photo);
    }
}
