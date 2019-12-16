$(document).ready(function() {
    var bodyOffset = $('body').offset();
    var $win = $(window);
    var winH = $win.height();

    var scroll_down_little = 50;
    var scroll_down_harf = winH/2;
    var scroll_down_harf_harf = winH/1.35;
    var scroll_down_full = winH;

    $win.scroll(function() {
        if($win.width() > winH - 500) {
            if ($(document).scrollTop() > scroll_down_little) {
                $('.social-link').css('color', '#000');
            }
            else {
                $('.social-link').css('color', '#fff');
            }
            if ($(document).scrollTop() > scroll_down_harf) {
                $('.left-lay-text-logo').css('color','#000');
            } else {
                $('.left-lay-text-logo').css('color','#fff');
            }
            if ($(document).scrollTop() > scroll_down_harf_harf) {
                $('.left-top-image-logo').css('opacity','1');
                $('.right-lay-text-logo').css('display','none');
            } else {
                $('.left-top-image-logo').css('opacity','0');
                $('.right-lay-text-logo').css('display','initial');
            }
            if ($(document).scrollTop() > scroll_down_full - scroll_down_little) {
                $('.right-top-text-nav a').css('color','#000');
            } else {
                $('.right-top-text-nav a').css('color','#fff');
            }

            if ($(document).scrollTop() + scroll_down_harf > $('#product').position().top) {
                $('.left-lay-text-logo').css('color','#fff');
            }
            if ($(document).scrollTop() + winH - 150 > $('#product').position().top) {
                $('.social-link').css('color', '#fff');
            }
            if ($(document).scrollTop() + winH - 150 > $('#product').position().top + winH * 3) {
                $('.social-link').css('color', '#000');
            }
        }
        else {
            if ($(document).scrollTop() > scroll_down_full) {
                $('.left-top-image-logo').css('opacity','1');
            } else {
                $('.left-top-image-logo').css('opacity','0');
            }
        }
    });
});
function MoveSlide(target) {
    $('html, body').animate({ scrollTop: $('#' + target).offset().top - 80 }, 500);
}