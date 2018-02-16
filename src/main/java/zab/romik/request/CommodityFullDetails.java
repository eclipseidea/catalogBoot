package zab.romik.request;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
public class CommodityFullDetails
        extends CommodityDetails {

    private String categoryName;
    private String countryName;
}
