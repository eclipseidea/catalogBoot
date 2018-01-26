package zab.romik.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
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

    public Photo(final String fileName, final Commodity commodity, final boolean isIndex) {
        this.fileName = fileName;
        this.commodity = commodity;
        this.isIndex = isIndex;
    }

    public Photo(String fileName) {
        this.fileName = fileName;
    }
}
