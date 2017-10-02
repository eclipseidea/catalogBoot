package zab.romik.controller.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;
import zab.romik.domain.entities.Categories;
import zab.romik.domain.service.CategoriesService;

import java.util.List;

@ControllerAdvice(basePackages = {"zab.zab.romik.controller.site"})
public class SiteAdviceController {
    /**
     * Сервис для работы с категориями
     */
    private final CategoriesService categoriesService;

    @Autowired
    public SiteAdviceController(final CategoriesService categoriesService) {
        this.categoriesService = categoriesService;
    }

    @ModelAttribute("categories")
    public List<Categories> showAllCategories() {
        return categoriesService.findNullParentId();
    }
}