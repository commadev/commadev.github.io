$(document).ready(function() {
    var bodyOffset = $('body').offset();
    var $win = $(window);
    var winH = $win.height();   
    $win.scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.social-link').css('color', '#000');
        }
        else {
            $('.social-link').css('color', '#fff');
        }
        if ($(document).scrollTop() > winH/2) {
            $('.left-lay-text-logo').css('color','#000');
        } else {
            $('.left-lay-text-logo').css('color','#fff');
        }
        if ($(document).scrollTop() > winH/1.6) {
            $('.left-top-image-logo').css('opacity','1');
        } else {
            $('.left-top-image-logo').css('opacity','0');
        }
        if ($(document).scrollTop() > winH) {
            $('.right-top-text-nav a').css('color','#000');
        } else {
            $('.right-top-text-nav a').css('color','#fff');
        }
    });
});
function MoveSlide(target) {
    $('html, body').animate({ scrollTop: $('#' + target).offset().top - 80 }, 500);
}