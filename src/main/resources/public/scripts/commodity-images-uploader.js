$(document).ready(function () {

    'use strict';

    /*
     *
     * Это плохо, нельзя делать тут глобальную коллекцию
     * ради только файлов, позже переделать
     */
    window.files = [];

    let uploadButton = $('<div class="file-upload">');

    let button = $('<button class="btn_button">ADD FILES</button>').appendTo(uploadButton);

    $(button).append($('<input type="file" multiple accept="image/!*"/>'));


    $('#file-upload-button-container').append(uploadButton);

    $('input[type = "file"]').change(function (e) {

        $.each(this.files, function (index, file) {

            if (file.name && file.type) {

                uploadButton.addClass('hidden');

                let size = function () {

                    if ($('#files').width() > 700) {

                        return '55%'
                    }

                    return '100%'
                };

                let url = URL.createObjectURL(e.target.files[index]);

                let div = $('<div class="file_container">')
                    .prepend('<br/>')
                    .css({'margin-bottom': '40px;', 'width': size})

                    .appendTo($('#files'));


                let img = $('<img/>').appendTo(div)

                    .attr('src', url)
                    .css({'width': '100%', 'height': 'auto', 'margin-bottom': '5px'})
                    .load = function () {

                    window.URL.revokeObjectURL(this.src);
                };

                let deleteButton = $('<button type="button" class="btn_btn" data-id="delete">DELETE</button>/')

                const radioButton = $('<div class="switch demo3">')
                    .append('<input type="radio" name="is_index">')
                    .append('<label><i></i></label></div>');

                const ul = $('<ul class="file__control-panel">')
                    .append($('<li class="li">').append(uploadButton))
                    .append($('<li class ="li">').append(deleteButton))
                    .append($('<li class="li">').append(radioButton))
                    .append('</ul>');

                ul.appendTo(div);

                const fileModel = {
                    file: file,
                    isIndex: false
                };

                files.push(fileModel);
            }

            uploadButton.removeClass('hidden');
        });


        const elementList = document.querySelectorAll('.btn_btn');

        $(elementList).click(function () {

            const parent = $(this).parentsUntil("#files");

            if (($(parent).is('.file_container:last'))) {

                const _div = $(parent).prev();

                _div.find(".li:first").append(uploadButton);
            }

            if (($(parent).is('.file_container:last')) && ($(parent).is('.file_container:first'))) {

                $('#file-upload-button-container').append(uploadButton);
            }


            $(parent).remove();

        });


    });

});


/*if(action=="rename"){
 var tel = $("#"+ id+ "_tel").val();

 }

 const r = $('#delete-file').parent();

 r.addClass("hidden");

 alert("ok");
 */




















// const uploadButton = $('<button/>')
//     .addClass('btn btn-primary')
//     .prop('disabled', true)
//     .text('Processing...')
//     .on('click', function () {
//         const $this = $(this),
//             data = $this.data();
//         $this
//             .off('click')
//             .text('Abort')
//             .on('click', function () {
//                 $this.remove();
//                 data.abort();
//             });
//         data.submit().always(function () {
//             $this.remove();
//         });
//     });

// $("#fileupload").fileupload({
//     dataType: "json",
//     url: "/commodity-images",
//     autoUpload: false,
//     maxFileSize: 999000,
//     previewMaxWidth: 100,
//     previewMaxHeight: 100,
//     previewCrop: true
// }).on('fileuploadadd', function (e, data) {
//     data.context = $('<div/>').appendTo('#files');
//     $.each(data.files, function (index, file) {
//         const node = $('<p/>')
//             .append($('<span/>').text(file.name));
//         if (!index) {
//             node
//                 .append('<br>')
//                 .append('<br><input type="radio" id="contactChoice">' +
//                     '<label for="contactChoice">выбрать фото как титульное</label>' +
//                     '<br><br>')
//                 .append(uploadButton.clone(true).data(data));
//         }
//         node.appendTo(data.context);
//     });
// }).on('fileuploadprocessalways', function (e, data) {
//     const index = data.index,
//         file = data.files[index],
//         node = $(data.context.children()[index]);
//     if (file.preview) {
//         node
//             .prepend('<br>')
//             .prepend(file.preview);
//     }
//     if (file.error) {
//         node
//             .append('<br>')
//             .append($('<span class="text-danger"/>').text(file.error));
//     }
//     if (index + 1 === data.files.length) {
//         data.context.find('button')
//             .text('Upload')
//             .prop('disabled', !!data.files.error);
//     }
// }).on('fileuploadprogressall', function (e, data) {
//     const progress = parseInt(data.loaded / data.total * 100, 10);
//     $('#progress .progress-bar').css(
//         'width',
//         progress + '%'
//     );
// }).on('fileuploaddone', function (e, data) {
//     $.each(data.result.files, function (index, file) {
//         if (file.url) {
//             const link = $('<a>')
//                 .attr('target', '_blank')
//                 .prop('href', file.url);
//             $(data.context.children()[index])
//                 .wrap(link);
//         } else if (file.error) {
//             const error = $('<span class="text-danger"/>').text(file.error);
//             $(data.context.children()[index])
//                 .append('<br>')
//                 .append(error);
//         }
//     });
// }).on('fileuploadfail', function (e, data) {
//     $.each(data.files, function (index) {
//         const error = $('<span class="text-danger"/>').text('File upload failed.');
//         $(data.context.children()[index])
//             .append('<br>')
//             .append(error);
//     });
// });






