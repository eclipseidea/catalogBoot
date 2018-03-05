package zab.romik.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import zab.romik.adapter.FileAdapter;
import zab.romik.service.UploadService;
import zab.romik.service.exceptions.EmptyFileException;

import java.io.File;

import static zab.romik.utils.FileUtils.randomNameFromOriginalName;

/**
 * Service for file uploading
 *
 * @author vgusser
 */
@Component
public class UploadServiceImpl implements UploadService {
    private final String targetPath;

    public UploadServiceImpl(@Value("${shop.files.target.path}")
                                     String targetPath) {
        this.targetPath = targetPath;
    }

    /**
     * {@inheritDoc}
     *
     * Upload file to directory on server
     */
    @Override
    public String upload(FileAdapter file) {
        if (file.isEmpty()) {
            throw new EmptyFileException(file.getOriginalFileName());
        }
        String originalFileName = file.getOriginalFileName();
        String fileName = randomNameFromOriginalName(originalFileName);
        file.transferTo(new File(targetPath + fileName));

        return fileName;
    }
}
