$(document).ready(function () {
    $('.js-modal-show-fin').click(function () {
        $('.js-modal-financial').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });

    $('.js-modal-hide-fin').click(function () {
        $('.js-modal-financial').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });
});