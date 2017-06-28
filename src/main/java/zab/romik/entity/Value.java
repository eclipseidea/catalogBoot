package zab.romik.entity;

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
