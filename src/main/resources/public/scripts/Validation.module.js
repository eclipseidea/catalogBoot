'use strict';

/**
 * Этот класс является входной точкой в валидатор серверный, он имеет
 * методы для проверки ответа на то что это ошибки валидации и прочие
 * дополнительные нужные методы
 *
 * @param response Ответ от сервера
 * @param form Форма в которой будут привязываться ошибки
 * @returns {{renderErrors: renderErrors}}
 */
window.App.Validator = function (response, form) {
    /**
     * Добавляет определенную ошибку к форме
     *
     * @param field Поле к которому надо добавить ошибку
     * @param error Ошибка которую надо добавить
     */
    function addErrorToField(field, error) {
        field.addClass('error')
            .parent('div')
            .append(buildHtmlErrorLabel(field, error));
    }

    /**
     * Этот метод формирует html код ошибки который будет вставлен
     * в форму
     *
     * @param field Поле к которому будет привязана ошибка
     * @param error Модель ошибки
     * @returns {string}
     */
    function buildHtmlErrorLabel(field, error) {
        return `<label for="${field.attr("id")}" class="error">${error.defaultMessage}</label>`;
    }

    return {

        /**
         * Рендерит ошибки используя для этого вспомогательный класс
         * errors renderer
         */
        renderErrors() {
            response.errors.forEach(function (error) {
                const field = form.find("[name=" + error.field + "]");

                if (!field) return;

                addErrorToField(field, error);
            });
        }
    }
};