package zab.romik.facades;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PhotoFacade {
    void uploadFilesAndPersistThem(List<MultipartFile> files);
}
