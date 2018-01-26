$(document).ready(function () {

    var counter = null;

    $('input[type="file"]').change(function (e) {

        for (let i = 0; i < this.files.length; i++) {

            counter++;

            var url = URL.createObjectURL(e.target.files[i]);

            var element = $('<img/>').appendTo('#files');

            $(element).addClass('elem-' + counter);

            element.onload = function () {
                window.URL.revokeObjectURL(this.src);
            };

            element.attr('src', url);
        }

    })

});
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






