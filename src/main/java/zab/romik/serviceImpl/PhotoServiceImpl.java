package zab.romik.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.dao.PhotoDao;
import zab.romik.entity.Photo;
import zab.romik.service.PhotoService;

import java.io.*;

import java.nio.file.Paths;
import java.util.List;
import java.nio.file.Path;
import java.nio.file.Files;
import java.util.StringJoiner;


@Service
public class PhotoServiceImpl implements PhotoService {
    /**
     * сервис для сохранения картинок
     */
    private PhotoDao photoDao;

    @Value("${screenshot.root.path}")
    private String folderToUpload;

//    private File file= File.

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
    public void savePhoto(final List <MultipartFile> files) {
        for (MultipartFile file: files) {
            try {
                byte[] bytes = file.getBytes();
                Path path = Paths.get(folderToUpload + file.getOriginalFilename());
                Files.write(path, bytes);

            } catch (Exception e) {
                e.printStackTrace();
            }
            photoDao.save(new Photo(file.getOriginalFilename()));
        }
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
