package zab.romik.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String fileName;

    private long commodityId;

    private boolean isIndex;

    Photo() {
        // for hibernate
    }

    public Photo(final String fileName, final long commodityId, final boolean isIndex) {
        this.fileName = fileName;
        this.commodityId = commodityId;
        this.isIndex = isIndex;
    }
}
