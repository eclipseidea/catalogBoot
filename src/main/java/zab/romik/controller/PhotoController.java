package zab.romik.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.service.PhotoService;

import java.util.List;


@Controller
@RequestMapping("/commodity-images")
public class PhotoController {

    /**
     * Сервис для работы с файлами
     */
    private PhotoService photoService;


    @Autowired
    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @PostMapping
    public void saveFile(@RequestParam ("files[]")List<MultipartFile> file) {
        photoService.savePhoto(file);
    }
}

