package zab.romik.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@ToString
@EqualsAndHashCode
@Entity
public class Country {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Commodity> commodities;

    public Country() {
    }

    public Country(final String name) {
        this.name = name;
    }
}

