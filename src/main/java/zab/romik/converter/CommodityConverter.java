package zab.romik.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import zab.romik.entity.Categories;
import zab.romik.entity.Commodity;
import zab.romik.entity.Country;
import zab.romik.request.CommodityDetails;

@Component
public class CommodityConverter implements Converter<CommodityDetails, Commodity> {

    /**
     * {@inheritDoc}
     */
    @Override
    public Commodity convert(CommodityDetails commodityDetails) {
        Commodity entity = new Commodity(
                commodityDetails.getName(),
                commodityDetails.getPrice());

        entity.setCountry(createCountry(commodityDetails));
        entity.setAge(commodityDetails.getAge());
        entity.setCategories(createCategory(commodityDetails));
        entity.setDescription(commodityDetails.getDescription());
        entity.setGender(commodityDetails.getGender());
        entity.setQuantity(commodityDetails.getQuantity());

        return entity;
    }

    private Categories createCategory(CommodityDetails commodityDetails) {
        Categories category = new Categories();
        category.setId(commodityDetails.getCategoryId());

        return category;
    }

    private Country createCountry(CommodityDetails commodityDetails) {
        Country country = new Country();
        country.setId(commodityDetails.getCountryId());

        return country;
    }
}
