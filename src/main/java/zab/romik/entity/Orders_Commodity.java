package zab.romik.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;

@ToString
@EqualsAndHashCode
@Entity
public class Orders_Commodity {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter
    @Setter
    private int quantityProduct;

    @Getter
    @Setter
    private BigDecimal costOfCommodity;

    @Getter
    @Setter
    @ManyToOne
    private Orders orders;

    @Getter
    @Setter
    @ManyToOne
    private Commodity commodity;

    public Orders_Commodity() {
    }

    public Orders_Commodity(final int quantityProduct,final BigDecimal costOfCommodity,final Orders orders, final Commodity commodity) {
        super();
        this.quantityProduct = quantityProduct;
        this.costOfCommodity = costOfCommodity;
        this.orders = orders;
        this.commodity = commodity;
    }
}
