package zab.romik.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@ToString
@EqualsAndHashCode
@Entity
public class ProductToProperty {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Getter
    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    private Properties propertyID;
    @Getter
    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    private Value valueID;
    @Getter
    @Setter
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
