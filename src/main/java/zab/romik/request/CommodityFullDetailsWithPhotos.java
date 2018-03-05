package zab.romik.request;

import lombok.Data;

import java.util.List;

@Data
public class CommodityFullDetailsWithPhotos {

    private CommodityFullDetails commodityFullDetails;

    private List<String> fileNames;

    public CommodityFullDetailsWithPhotos() {

    }

    public CommodityFullDetailsWithPhotos(CommodityFullDetails commodityFullDetails, List<String> fileNames) {
        this.commodityFullDetails = commodityFullDetails;
        this.fileNames = fileNames;
    }
}
