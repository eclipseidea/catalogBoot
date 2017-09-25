package zab.romik.entity;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(mappedBy = "categories",cascade = CascadeType.REMOVE)
    private Categories parent;

    private String name;

    public Categories() {
    }

    public Categories(String name) {
        this.name = name;
    }
}

