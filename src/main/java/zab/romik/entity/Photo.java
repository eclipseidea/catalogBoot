package zab.romik.entity;

import lombok.*;
import javax.persistence.*;

@ToString
@EqualsAndHashCode
@Entity
public class Photo {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter
    @Setter
    private String fileName;

    @Getter
    @Setter
    private Commodity parentId;

    @Getter
    @Setter
    @ManyToOne
    private Commodity commodity;

    @Getter
    @Setter
    private boolean isIndex;

    public Photo( final String fileName,final Commodity parentId, final boolean isIndex) {
        this.fileName = fileName;
        this.parentId = parentId;
        this.isIndex = isIndex;
    }
}
