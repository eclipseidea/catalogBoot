package zab.romik.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import zab.romik.enums.CommodityGender;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Commodity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    /**
     * Название товара используемое для отображения
     */
    private String name;
    private int age = 3;

    /**
     * Рекомендуемый пол для покупателя товара
     */

    @Enumerated(EnumType.STRING)
    private CommodityGender gender = CommodityGender.UNIVERSAL;

    /**
     * Цена товара
     */
    private BigDecimal price;

    /**
     * Количество товара
     */
    private int quantity = 10;

    @Column(columnDefinition = "text")
    private String description;

    @JsonIgnore
    @OneToMany(mappedBy = "commodity", cascade = CascadeType.REMOVE)
    private List<Orders_Commodity> orders_Commodity = new ArrayList<>();


    @OneToMany(mappedBy = "commodity", cascade = CascadeType.REMOVE)
    private List<ProductToProperty> productToProperties = new ArrayList<>();

    @OneToOne
    private Categories categories;

    @OneToOne
    private Country country;

    /**
     * Статус удаленности товара, типа товар удален или нет
     */

    private boolean deleted;


    public Commodity() {
    }

    public Commodity(final String name, final BigDecimal price) {
        super();
        this.name = name;
        this.price = price;
    }

    public void markDeleted() {
        deleted = true;
    }
}
