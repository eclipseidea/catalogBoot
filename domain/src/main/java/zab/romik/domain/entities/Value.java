package zab.romik.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Value {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JsonIgnore
    private Properties properties;

    private String value;

    public Value() {
    }

    public Value(final Properties properties, final String value) {
        super();
        this.properties = properties;
        this.value = value;
    }
}
