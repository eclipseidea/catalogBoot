package zab.romik.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
@Data
@Entity
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String query;

    @Column(name = "ip", columnDefinition = "char(15)")
    private String ip;

    @ManyToOne
    private User user;

    private LocalDateTime date;

    public Visitor() {
    }

    public Visitor(final User user, final LocalDateTime date) {
        super();
        this.user = user;
        this.date = date;
    }
}
