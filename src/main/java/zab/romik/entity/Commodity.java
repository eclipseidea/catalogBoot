package zab.romik.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;
import zab.romik.enums.CommodityGender;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@ToString
@EqualsAndHashCode
@Entity
public class Commodity {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    /**
     * Название товара используемое для отображения
     */
    @NotEmpty
    @Length(min = 3, max = 255)
    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private int age = 3;

    /**
     * Рекомендуемый пол для покупателя товара
     */
    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    private CommodityGender gender = CommodityGender.UNIVERSAL;

    /**
     * Цена товара
     */
    @NotNull
    @Min(0)
    @Getter
    @Setter
    private BigDecimal price;

    /**
     * Количество товара
     */
    @Min(1)
    @Getter
    @Setter
    private int quantity = 10;

    @Getter
    @Setter
    @Column(columnDefinition = "text")
    private String description;

    @Getter
    @Setter
    @OneToMany(mappedBy = "commodity", cascade = CascadeType.REMOVE)
    private List<Orders_Commodity> orders_Commodity = new ArrayList<Orders_Commodity>();

    @Getter
    @Setter
    @OneToMany(mappedBy = "commodity", cascade = CascadeType.REMOVE)
    private List<ProductToProperty> productToProperties = new ArrayList<>();

    @Getter
    @Setter
    @OneToOne
    @NotNull
    private Categories categories;

    @Getter
    @Setter
    @OneToOne
    @NotNull
    private Country country;

    /**
     * Статус удаленности товара, типа товар удален или нет
     */
    @Getter
    @Setter
    private boolean deleted;

    public Commodity() {
    }

    public Commodity(final String name, final BigDecimal price) {
        super();
        this.name = name;
        this.price = price;
    }
}
