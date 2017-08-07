package zab.romik.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

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

    public Value(final Properties properties,final String value) {
        super();
        this.properties = properties;
        this.value = value;
    }
}
