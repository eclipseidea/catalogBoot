package zab.romik.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zab.romik.Routes;
import zab.romik.core.ResourceNotFoundException;
import zab.romik.entity.Properties;
import zab.romik.entity.Value;
import zab.romik.service.PropertiesService;

import java.util.List;
import java.util.Objects;

import static java.util.Objects.requireNonNull;

/**
 * Рест контроллер для того чтбы получать значения свойств для
 * динамических формы которые работают со свойствами
 *
 * @since 0.0.1
 */
@RestController
@RequestMapping(Routes.Properties.PROPERTIES_LIST)
public class PropertiesValuesController {

    /**
     * Сервис для работы со свойствами
     */
    private final PropertiesService propertiesService;

    /**
     * Конструктор для внедрения зависимостей
     *
     * @param propertiesService Сервис для работы со свойствами,
     *                          не должен быть null
     */
    @Autowired
    public PropertiesValuesController(PropertiesService propertiesService) {
        this.propertiesService = requireNonNull(propertiesService, "Properties service must be not null!");
    }

    /**
     * Загружает свойство из базы данных по ID
     *
     * @param id ID свойствo
     * @return найденное свойство
     */
    @GetMapping(Routes.Properties.PROPERTY_VALUES)
    private List<Value> findById(@PathVariable("id") final long id) {
        Properties property = propertiesService.findOne(id);
        if (Objects.isNull(property)) {
            throw new ResourceNotFoundException();
        }
        return property.getValue();
    }
}