package zab.romik.entity;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(mappedBy = "user")
    private Set<Visitor> visitor = new HashSet<Visitor>();

    private String name;

    private String email;

    private String country;

    private String region;

    private String city;

    private String street;

    private String numberOfPone;

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
