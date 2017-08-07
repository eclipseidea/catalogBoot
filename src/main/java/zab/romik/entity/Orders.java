package zab.romik.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDateTime date;

    @ManyToOne
    private User user;

    @Enumerated(EnumType.STRING)
    private orderState status;

    @OneToMany(mappedBy = "orders", cascade = CascadeType.REMOVE)
    private List<Orders_Commodity> orders_Commodity;

    public Orders() {
    }

    public Orders(final LocalDateTime date) {
        super();
        this.date = date;
    }

    public enum orderState {
        NEW, CONFIRMED, SENT, RECIEVED, PAID
    }
}
