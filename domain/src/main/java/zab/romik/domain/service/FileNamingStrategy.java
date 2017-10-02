package zab.romik.domain.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileNamingStrategy {
    String createNewFileName(MultipartFile sourceFile);
}
