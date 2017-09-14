package zab.romik.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.facades.PhotoFacade;
import zab.romik.service.PhotoService;

import java.util.List;

@RestController
@RequestMapping("/commodity-images")
public class PhotoController {
    private final PhotoFacade photoFacade;

    @Autowired
    public PhotoController(PhotoFacade photoFacade) {
        this.photoFacade = photoFacade;
    }

    @PostMapping
    public void saveFile(@RequestParam("files[]") List<MultipartFile> files) {
        photoFacade.uploadFilesAndPersistThem(files);
    }
}

