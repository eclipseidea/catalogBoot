package zab.romik.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Commodity> commodities;

    public Country() {
    }

    public Country(final String name) {
        this.name = name;
    }
}

