package zab.romik.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import zab.romik.dao.PhotoDao;
import zab.romik.entity.Categories;
import zab.romik.entity.Commodity;
import zab.romik.entity.Country;
import zab.romik.request.CommodityFullDetails;

@Component
public class CommodityDetailsConverter
        implements Converter<Commodity, CommodityFullDetails> {

    private final PhotoDao photoDao;

    private long commodityId;

    public CommodityDetailsConverter(PhotoDao photoDao) {
        this.photoDao = photoDao;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public CommodityFullDetails convert(Commodity commodity) {
        commodityId = commodity.getId();
        CommodityFullDetails details = new CommodityFullDetails();
        details.setName(commodity.getName());
        details.setAge(commodity.getAge());
        details.setGender(commodity.getGender());
        details.setDescription(commodity.getDescription());
        details.setPrice(commodity.getPrice());
        details.setQuantity(commodity.getQuantity());
        details.setGender(commodity.getGender());
        details.setId(commodity.getId());
        details.setDeleted(commodity.isDeleted());

        Categories category = commodity.getCategories();
        if (category != null) {
            details.setCategoryId(category.getId());
            details.setCategoryName(category.getName());
        }

        Country country = commodity.getCountry();
        if (country != null) {
            details.setCountryId(country.getId());
            details.setCountryName(country.getName());
        }

        return details;
    }

   /* private List<String> loadPhotos() {
        List <Photo> photos = photoDao.findAllByCommodityIdEquals(commodityId);
        List<String>photosName = null;
        for (Photo photo:photos){
            photosName.add(photo.getFileName());
        }

        return photosName;
    }*/


}
