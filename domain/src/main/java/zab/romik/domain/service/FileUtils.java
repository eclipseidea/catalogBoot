package zab.romik.domain.service;

public class FileUtils {
    public static String getFileExtension(String fileName) {
        final String[] fileNameParts = fileName.split("\\.");

        return fileNameParts[fileNameParts.length - 1];
    }
}
