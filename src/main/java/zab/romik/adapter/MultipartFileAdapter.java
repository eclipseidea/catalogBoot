package zab.romik.adapter;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;

public class MultipartFileAdapter implements FileAdapter {
    private final MultipartFile file;

    public MultipartFileAdapter(MultipartFile file) {
        this.file = Objects.requireNonNull(file);
    }

    /**
     * {@inheritDoc}
     * <p>
     * Delegate to get bytes from multipart file
     */
    @Override
    public byte[] getBytes() {
        try {
            return file.getBytes();
        } catch (IOException e) {
            throw new RuntimeException("Cannot obtain bytes", e);
        }
    }

    /**
     * {@inheritDoc}
     * <p>
     * Should obtain input stream from given multipart file
     */
    @Override
    public InputStream getInputStream() {
        try {
            return file.getInputStream();
        } catch (IOException e) {
            throw new RuntimeException("Cannot obtain input stream", e);
        }
    }

    /**
     * {@inheritDoc}
     * <p>
     * Should transfer file to special given file
     */
    @Override
    public void transferTo(File output) {
        Objects.requireNonNull(output, "Output file cannot be null!");

        try {
            file.transferTo(output);
        } catch (IOException e) {
            throw new RuntimeException("Cannot transfer file", e);
        }
    }

    /**
     * {@inheritDoc}
     * <p>
     * Should return original file name from multipart file
     *
     * @return May return {@code null} if file name not available
     */
    @Override
    public String getOriginalFileName() {
        return file.getOriginalFilename();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean isEmpty() {
        return file.isEmpty();
    }
}
