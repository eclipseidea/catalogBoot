package zab.romik.entity;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
public class ProductToProperty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(cascade = CascadeType.ALL)
    private Properties propertyID;

    @OneToOne(cascade = CascadeType.ALL)
    private Value valueID;

    @ManyToOne
    private Commodity commodity;

    public ProductToProperty() {
    }

    public ProductToProperty(final Properties propertyID, final Value valueID,final Commodity commodity) {
        super();
        this.propertyID = propertyID;
        this.valueID = valueID;
        this.commodity = commodity;
    }
}
