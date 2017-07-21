$(function () {
    'use strict';

    const propertyValuesContainer = $("#property__values");

    $("#properties").on('change', function () {
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

    $("#commodityForm").on("submit", function (e) {
        e.preventDefault();

        $.post('/commodities', $(this).serializeArray())
            .then(showSuccessfulCreateProduct)
            .fail(showErrorCreateProduct);
    });

    function buildDynamicSelect(serverResponse) {
        serverResponse.forEach(appendOption);

        propertyValuesContainer.removeAttr('disabled');
    }

    function appendOption(item) {
        propertyValuesContainer
            .append("<option value='" + item.id + "'>" + item.value + "</option>");
    }

    function showServerError(xhr) {
        swal({
            title: "Ошибка на сервере",
            type: "error",
            text: JSON.parse(xhr.responseText).error
        });
    }

    function showSuccessfulCreateProduct() {
        swal({
            title: "ok",
            type: "success",
            text: JSON.parse(xhr.responseText).success
        });
    }

    function showErrorCreateProduct() {
        swal({
            title: "Ошибка",
            type: "error",
            text: JSON.parse(xhr.responseText).error
        });
    }
});