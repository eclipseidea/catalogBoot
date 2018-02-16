package zab.romik.controller.rest.commodity;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import zab.romik.service.PhotoService;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;


@RestController
@RequestMapping("commodities/{id}/photos")
public class CommodityPhotosController {
    private final PhotoService photoService;

    public CommodityPhotosController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void upload(@PathVariable long id,
                       @RequestParam("isIndex") boolean isIndex,
                       @RequestParam("file") MultipartFile file) {

        final String FOLDER_PATH = "C:/Users/ROMIK/IdeaProjects/catalogBoot/projectimages/";

        if (!file.isEmpty()) {

            String fileName = photoService.createNewFileName(file);

            try {
                byte[] bytes = file.getBytes();
                BufferedOutputStream stream =
                        new BufferedOutputStream(new FileOutputStream(new File(FOLDER_PATH, fileName)));
                stream.write(bytes);
                stream.close();

            } catch (Exception e) {
                e.printStackTrace();
            }

            photoService.attachFileToCommodity(id, isIndex, fileName);
        }

    }
}







/*
         * Если нужно будет, возвращай здесь какой-нибудь ответ.
         *
         * Проблема данного решения
         *
         * Каждый файл загружается своим запросом, это плохо,
         * потому что у нас http thread pool забивается запросами
         * на загрузку файлов, если кто-то решит загрузить 200
         * файлов сразу (больших, 200 потому что это дефолтное
         * значение http пула в tomcate'е), то пришедшие новые
         * запросы встанут в очерерь, что резко свалит latency
         * у системы
         *
         * Для решения
         *
         * Надо загружать список файлов на этот эндпоинт, но, тебе
         * надо подумать и решить проблему с тем, как ты определишь
         * главную индексную картинку, передавать например ее
         * индекс в массиве файлов не совсем надежно, я сомневаюсь
         * в том что порядок загружаемых файлов сохраняется. По-этому
         * нужно подумать. Второе решение, чтобы не париться, просто
         * ставь ограничения на размер загружаемого файла, и количества
         * файлов, например не больше 10 картинок.
         *
         * TODO: Доделай на этом роуте фактическую загрузку файлов
         * на диск, сейчас я тупо сохранил его в базе, затем на клиенте
         * верни то что я закомментил и расположи все так, чтобы работало,
         * там должно быть достаточно отправку запроса вниз перенести.
         *
         * Все
         */
