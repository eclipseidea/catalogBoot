$(function () {
    'use strict';

    const propertyValuesContainer = $("#property__values");

    $("#properties").change(function () {
        const that = $(this);
        const propertyId = that.val();

        propertyValuesContainer.html("");
        propertyValuesContainer.append("<option value=''>Выберите свойство</option>");

        if (propertyId < 1) {
            propertyValuesContainer.attr("disabled", "disabled");

            return;
        }

        $.get('/properties/' + propertyId + '/values')
            .then(buildDynamicSelect)
            .fail(showServerError)
    });
    /**
     * метод для отправки данных с формы на сервер
     */

    $("#commodityForm").submit(function (e) {

        e.preventDefault();
        const that = $(this);

        that.find('label.error').remove();
        that.find('input, select').removeClass('error');

        $.post('/commodities', that.serializeArray())
            .done(function (response) {
                RedirectAttributes.addFlashMessage('commodityWasSuccessfulCreated', 'товар успешно сохранен');

                location.href = "/commodity/" + response.id;
            })
            .fail(function (xhr) {
                const errorResponse = JSON.parse(xhr.responseText);

                const validator = App.Validator(errorResponse, that);

                if (validator.isValidationErrorsResponse()) {
                    return validator.renderErrors();
                }

                showServerError(xhr);
            });
    });

    function buildDynamicSelect(serverResponse) {
        serverResponse.forEach(appendOption);

        propertyValuesContainer.removeAttr('disabled');
    }

    function appendOption(item) {
        propertyValuesContainer
            .append("<option value='" + item.id + "'>" + item.value + "</option>");
    }

    /**
     * функция выводит на экран ошибку сервера по созданию товара
     * @param xhr
     */
    function showServerError(xhr) {
        swal({
            title: "Ошибка на сервере",
            type: "error",
            text: JSON.parse(xhr.responseText).error
        });
    }
});