package zab.romik.utils;

public class FileUtils {
    public static String getFileExtension(String fileName) {
        final String[] fileNameParts = fileName.split("\\.");
        return fileNameParts[fileNameParts.length - 1];
    }
}
