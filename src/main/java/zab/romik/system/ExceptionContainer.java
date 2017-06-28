package zab.romik.system;

import lombok.*;

@Getter
@Setter
public class ExceptionContainer {

    private String message;
    private int statusCode;

    private ExceptionContainer() {
    }

    public static ExceptionContainer from(final Exception ex) {
        final ExceptionContainer exc = new ExceptionContainer();
        exc.setMessage(ex.getMessage());


        return exc;
    }
}
