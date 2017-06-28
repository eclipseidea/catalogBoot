package zab.romik.enums;

/**
 * Это перечесление обозначает пол рекомендуемый для покупателя
 * товара
 * <p>
 * - Мужской
 * - Женский
 *
 * @since 0.0.1
 */
public enum CommodityGender {
    MALE("Мужской"),
    FEMALE("Женский"),
    UNIVERSAL("Универсальный");

    /**
     * Расшифровка, чтобы можно было вывести нормальное название
     * внутри шаблона на странице
     */
    private final String name;

    CommodityGender(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
