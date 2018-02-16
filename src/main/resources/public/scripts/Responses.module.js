'use strict';

window.App.Responses = {
    isValidationErrors(response) {
        if (!response) {
            return false;
        }

        return response.hasOwnProperty("errors");
    }
};