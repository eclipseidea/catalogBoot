package zab.romik.controller.rest.commodity;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.adapter.FileAdapter;
import zab.romik.adapter.MultipartFileAdapter;
import zab.romik.service.PhotoService;


@RestController
@RequestMapping("commodities/{id}/photos")
public class CommodityPhotosController {
    private final PhotoService photoService;

    public CommodityPhotosController(PhotoService photoService) {
        this.photoService = photoService;
    }

    /**
     * Should upload given file and attach it to commodity
     *
     * @param id commodity id
     * @param isIndex is file index
     * @param file multipart file
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void upload(@PathVariable long id,
                       @RequestParam("isIndex") boolean isIndex,
                       @RequestParam("file") MultipartFile file) {

        FileAdapter fileAdapter = new MultipartFileAdapter(file);

        photoService.attachFileToCommodity(id, isIndex, fileAdapter);
    }
}
