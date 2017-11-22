package zab.romik.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Categories parent;

    @OneToMany
    @JoinColumn(referencedColumnName = "id", name = "parent_id")
    @JsonIgnore
    private Set<Categories> children;

    private String name;

    public Categories() {
    }

    public Categories(String name) {
        this.name = name;
    }
}

