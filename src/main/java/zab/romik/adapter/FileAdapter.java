package zab.romik.adapter;

import java.io.File;
import java.io.InputStream;

public interface FileAdapter {
    byte[] getBytes();

    InputStream getInputStream();

    void transferTo(File output);

    String getOriginalFileName();

    boolean isEmpty();
}
