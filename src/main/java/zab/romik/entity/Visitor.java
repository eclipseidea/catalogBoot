package zab.romik.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
@ToString
@EqualsAndHashCode
@Entity
public class Visitor {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Getter
    @Setter
    private String query;
    @Getter
    @Setter
    @Column(name = "ip", columnDefinition = "char(15)")
    private String ip;
    @Getter
    @Setter
    @ManyToOne
    private User user;
    @Getter
    @Setter
    private LocalDateTime date;

    public Visitor() {
    }

    public Visitor(final User user, final LocalDateTime date) {
        super();
        this.user = user;
        this.date = date;
    }
}
