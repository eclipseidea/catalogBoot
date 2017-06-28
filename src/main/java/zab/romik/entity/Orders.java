package zab.romik.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@ToString
@EqualsAndHashCode
@Entity
public class Orders {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Getter
    @Setter
    private LocalDateTime date;
    @Getter
    @Setter
    @ManyToOne
    private User user;
    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    private orderState status;
    @Getter
    @Setter
    @OneToMany(mappedBy = "orders", cascade = CascadeType.REMOVE)
    private List<Orders_Commodity> orders_Commodity;

    public Orders() {
    }

    public Orders(final LocalDateTime date) {
        super();
        this.date = date;
    }
    @Getter
    public enum orderState {
        NEW, CONFIRMED, SENT, RECIEVED, PAID
    }
}
