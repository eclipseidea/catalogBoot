package zab.romik.controller.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;
import zab.romik.entity.Categories;
import zab.romik.service.CategoriesService;

import java.util.List;


@ControllerAdvice(basePackages = {"zab.romik.controller.site"})
public class CategoryController {
    /**
     * Сервис для работы с категориями
     */
    private final CategoriesService categoriesService;

    @Autowired
    public CategoryController(final CategoriesService categoriesService) {
        this.categoriesService = categoriesService;
    }

    @ModelAttribute("categories")
    public List<Categories> showAllCategories(){
        return categoriesService.findAll();
    }

}
