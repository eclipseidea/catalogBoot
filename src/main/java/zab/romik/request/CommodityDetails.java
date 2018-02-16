package zab.romik.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;
import zab.romik.enums.CommodityGender;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

/**
 * Форма для создания нового товара, это внешний
 * объект, он не являюется частью домена
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CommodityDetails {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private long id;
    @NotEmpty
    private String name;
    @NotNull
    private BigDecimal price;
    private String description;
    private int age = 3;
    @Min(1)
    private int quantity = 10;
    @Enumerated(EnumType.STRING)
    private CommodityGender gender = CommodityGender.UNIVERSAL;
    private boolean deleted;
    @NotNull
    private Long categoryId;
    @NotNull
    private Long countryId;
}
