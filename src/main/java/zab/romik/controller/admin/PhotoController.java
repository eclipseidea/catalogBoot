package zab.romik.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.facades.PhotoFacade;

import java.util.List;

@RestController
@RequestMapping("/commodity-images")
public class PhotoController {

    private final PhotoFacade photoFacade;

    @Autowired
    public PhotoController(final PhotoFacade photoFacade) {
        this.photoFacade = photoFacade;
    }

    @PostMapping
    public void saveFile(@RequestParam("files[]") List<MultipartFile> files) {
        photoFacade.uploadFilesAndPersistThem(files);

    }
}

