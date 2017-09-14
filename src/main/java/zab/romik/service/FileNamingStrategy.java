package zab.romik.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileNamingStrategy {
    String createNewFileName(MultipartFile sourceFile);
}
