package zab.romik.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@EqualsAndHashCode
@Entity
public class Categories {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter
    @Setter
    @OneToOne
    private Categories parent;

    @Getter
    @Setter
    private String name;

    public Categories() {
    }

    public Categories(String name) {
        this.name = name;
    }
}

