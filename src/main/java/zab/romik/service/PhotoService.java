package zab.romik.service;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

@Repository
public interface PhotoService {

    void attachFileToCommodity(long commodityId,
                               boolean isIndex,
                               String fileName);


    String createNewFileName(MultipartFile file);
}
