package zab.romik.domain.entities;

import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
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
    @NotEmpty
    @Length(min = 3, max = 255)
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
    @NotNull
    @Min(0)
    private BigDecimal price;

    /**
     * Количество товара
     */
    @Min(1)
    private int quantity = 10;

    @Column(columnDefinition = "text")
    private String description;

    @OneToMany(mappedBy = "commodity", cascade = CascadeType.REMOVE)
    private List<Orders_Commodity> orders_Commodity = new ArrayList<Orders_Commodity>();

    @OneToMany(mappedBy = "commodity", cascade = CascadeType.REMOVE)
    private List<ProductToProperty> productToProperties = new ArrayList<>();

    @NotNull
    @OneToMany(mappedBy = "commodity", cascade = CascadeType.REMOVE)
    private List<Photo> photos = new ArrayList<>();

    @OneToOne
    @NotNull
    private Categories categories;

    @OneToOne
    @NotNull
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

    /**
     * Это перечесление обозначает пол рекомендуемый для покупателя
     * товара
     * <p>
     * - Мужской
     * - Женский
     *
     * @since 0.0.1
     */
    public enum CommodityGender {
        MALE("Мужской"),
        FEMALE("Женский"),
        UNIVERSAL("Универсальный");

        /**
         * Расшифровка, чтобы можно было вывести нормальное название
         * внутри шаблона на странице
         */
        private final String name;

        CommodityGender(final String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }
}
