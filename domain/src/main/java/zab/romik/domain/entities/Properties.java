package zab.romik.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Properties {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnore
    @OneToMany(mappedBy = "properties", cascade = CascadeType.REMOVE)
    private List<Value> value;

    private String title;

    public Properties() {
    }

    public Properties(final String title) {
        super();
        this.title = title;
    }
}
