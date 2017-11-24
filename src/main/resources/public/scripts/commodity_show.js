$(function () {
    const COMMODITY_SUCCESSFUL_CREATED_KEY = 'commodityWasSuccessfulCreated';
    // Attempt to read flash message about successful create commodity from local storage
    const message = RedirectAttributes.getFlashMessage(COMMODITY_SUCCESSFUL_CREATED_KEY);
    if (message) {
        $(".alert-block").html("<div class='alert alert-success'>" + message + "</div>");
    }
});