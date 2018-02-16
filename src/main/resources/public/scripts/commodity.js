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

    function obtainValueById(elementId, defaultValue) {
        if (!elementId) {
            return null;
        }

        /*
         * Этот хак нужен для того чтобы axios не удалил поля
         * для которых не был передан default value, чтобы этот
         * default value был null
         */
        const axiosDefaultValueHack = defaultValue || null;

        return $("#" + elementId).val() || axiosDefaultValueHack;
    }

    /**
     * метод для отправки данных с формы на сервер
     */

    $("#commodityForm").submit(function (e) {

        e.preventDefault();
        const that = $(this);

        that.find('label.error').remove();
        that.find('input, select').removeClass('error');

        const $request = {
            name: obtainValueById("commodityName"),
            price: obtainValueById("commodityPrice", .0),
            description: obtainValueById("commodityDescription"),
            age: obtainValueById("commodityAge", 3),
            quantity: obtainValueById("commodityQuantity", 10),
            categoryId: obtainValueById("categories"),
            gender: obtainValueById("gender"),
            countryId: obtainValueById("countries")
        };

        let savedCommodityId = undefined;

        axios.post("/commodities", $request)

            .then(commodity => {
                savedCommodityId = commodity.data.id;

                const promises = files.map(file => {
                    const fileRequest = new FormData();

                    fileRequest.append("isIndex", file.isIndex);
                    fileRequest.append("file", file.file);

                    return axios.post(`/commodities/${savedCommodityId}/photos`, fileRequest);
                });

                return Promise.all(promises);
            }).then(function () {
                RedirectAttributes.addFlashMessage('commodityWasSuccessfulCreated', 'товар успешно сохранен');

            location.href = "/commodity/" + savedCommodityId;
        }).catch((error) => {
            if (error.response) {
                const errorResponse = error.response.data;

                if (App.Responses.isValidationErrors(errorResponse)) {
                    App.Validator(errorResponse, that).renderErrors();

                    return;
                }

                showServerError(error);
            }
            });

    })

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
        text: xhr.message.error
    });
}