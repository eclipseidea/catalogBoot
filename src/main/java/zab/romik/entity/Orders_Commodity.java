package zab.romik.entity;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
public class Orders_Commodity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private int quantityProduct;

    private BigDecimal costOfCommodity;

    @ManyToOne
    private Orders orders;

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
