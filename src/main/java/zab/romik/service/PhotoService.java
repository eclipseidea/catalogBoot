package zab.romik.service;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.entity.Photo;

import java.util.List;
@Repository
public interface PhotoService {

    void savePhoto(List <MultipartFile> files);

    List<Photo> findAll();

    Photo findOne(long id);

    void delete(long id);

    void update (Photo photo);

}
