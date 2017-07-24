'use strict';

/**
 * Этот JS класс занимается рендерингом ошибок к форме
 *
 * @param errors
 * @param form
 * @returns {{renderErrors: renderErrors}}
 */
const errorsRenderer = function (errors, form) {

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
         * Этот метод отображает на форму все ошибки которые пришли с сервера
         */
        renderErrors: function () {
            errors.forEach(function (error) {
                const field = form.find("[name=" + error.field + "]");
                if (!field) return;

                addErrorToField(field, error);
            });
        }
    }
};

/**
 * Этот класс является входной точкой в валидатор серверный, он имеет
 * методы для проверки ответа на то что это ошибки валидации и прочие
 * дополнительные нужные методы
 *
 * @param response Ответ от сервера
 * @param form Форма в которой будут привязываться ошибки
 * @returns {{isValidationErrorsResponse: isValidationErrorsResponse, renderErrors: renderErrors}}
 */
window.App.Validator = function (response, form) {
    return {

        /**
         * Сообщает вызывающему методу что валидатор содержит внутри себя
         * ответ с ошибками валидации от сервера
         *
         * @returns {boolean}
         */
        isValidationErrorsResponse: function () {
            return response.hasOwnProperty("errors");
        },

        /**
         * Рендерит ошибки используя для этого вспомогательный класс
         * errors renderer
         */
        renderErrors: function () {
            errorsRenderer(response.errors, form).renderErrors();
        }
    }
};