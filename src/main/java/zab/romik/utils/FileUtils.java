package zab.romik.utils;

public class FileUtils {
    private static String getFileExtension(String fileName) {
        final String[] fileNameParts = fileName.split("\\.");
        return fileNameParts[fileNameParts.length - 1];
    }

    /**
     * Method should generate random file name from given multipart file
     *
     * @param originalFileName source file
     * @return random file name
     */
    public static String randomNameFromOriginalName(String originalFileName) {
        final String fileExtension = getFileExtension(originalFileName);

        return String.format("%d.%s", System.nanoTime(), fileExtension);
    }
}
