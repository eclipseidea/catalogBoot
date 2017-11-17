package zab.romik.service.impl;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.service.FileNamingStrategy;
import zab.romik.utils.FileUtils;

import java.util.UUID;

@Component
public class DefaultFileNamingStrategy implements FileNamingStrategy {

    public String createNewFileName(MultipartFile sourceFile) {
        final String originalFileName = sourceFile.getOriginalFilename();
        final String randomUUID = UUID.randomUUID().toString();
        final String fileExtension = FileUtils.getFileExtension(originalFileName);

        return String.format("%s.%s", randomUUID, fileExtension);
    }
}
