package zab.romik.domain.service;

import org.springframework.web.multipart.MultipartFile;
import zab.romik.domain.entities.Photo;

import java.util.List;

public interface PhotoService {
    void savePhoto(List<MultipartFile> files);

    List<Photo> findAll();

    Photo findOne(long id);

    void delete(long id);

    void update(Photo photo);
}
