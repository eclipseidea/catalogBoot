package zab.romik.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@ToString
@EqualsAndHashCode
@Entity
public class User {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Getter
    @Setter
    @OneToMany(mappedBy = "user")
    private Set<Visitor> visitor = new HashSet<Visitor>();
    @Getter
    @Setter
    private String name;
    @Getter
    @Setter
    private String email;
    @Getter
    @Setter
    private String country;
    @Getter
    @Setter
    private String region;
    @Getter
    @Setter
    private String city;
    @Getter
    @Setter
    private String street;
    @Getter
    @Setter
    private String numberOfPone;
    @Getter
    @Setter
    @OneToMany(mappedBy = "user")
    private List<Orders> orders;

    public User() {
    }

    public User(final String name,final String email) {
        super();
        this.name = name;
        this.email = email;
    }
}
