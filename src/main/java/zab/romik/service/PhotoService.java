package zab.romik.service;

import zab.romik.adapter.FileAdapter;


public interface PhotoService {
    void attachFileToCommodity(long commodityId, boolean isIndex,
                               FileAdapter multipartFile);

}
