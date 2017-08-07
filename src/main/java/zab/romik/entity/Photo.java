package zab.romik.entity;

import lombok.*;
import javax.persistence.*;

@Data
@Entity
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String fileName;

    @ManyToOne
    private Commodity commodity;

    private boolean isIndex;

    public Photo() {

    }

    public Photo(final String fileName) {
        this.fileName = fileName;

    }
}
