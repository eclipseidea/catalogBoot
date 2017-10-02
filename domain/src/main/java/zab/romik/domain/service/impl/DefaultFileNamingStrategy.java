package zab.romik.domain.service.impl;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.domain.service.FileNamingStrategy;
import zab.romik.domain.service.FileUtils;

import java.util.UUID;

@Component
public class DefaultFileNamingStrategy implements FileNamingStrategy {
    @Override
    public String createNewFileName(MultipartFile sourceFile) {
        final String originalFileName = sourceFile.getOriginalFilename();
        final String randomUUID = UUID.randomUUID().toString();
        final String fileExtension = FileUtils.getFileExtension(originalFileName);

        return String.format("%s.%s", randomUUID, fileExtension);
    }
}
