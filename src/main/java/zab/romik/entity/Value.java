package zab.romik.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@ToString
@EqualsAndHashCode
@Entity
public class Value {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Getter
    @Setter
    @ManyToOne
    @JsonIgnore
    private Properties properties;
    @Getter
    @Setter
    private String value;

    public Value() {
    }

    public Value(final Properties properties,final String value) {
        super();
        this.properties = properties;
        this.value = value;
    }
}
