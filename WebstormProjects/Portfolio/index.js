$(document).ready(function () {

    $(window).on('scroll',function () {
    var skillposition = $('#skills').offset().top-$(window).scrollTop()- $(window).outerHeight()
        if(skillposition < - 530) {
            $('.html').animate({width: '90%'}, 2000);
            $('.css').animate({width: '90%'}, 2000);
            $('.javascript').animate({width: '85%'}, 2000);
            $('.nodejs').animate({width: '75%'}, 2000);
            $('.vuejs').animate({width: '70%'}, 2000);
            $('.reactjs').animate({width: '70%'}, 2000);
        }
    });

    $('a.scrollto').on('click', function () {
        var scrollto = $(this).attr('data-scrollto');

        $('body, html').animate({
            "scrollTop": $('#' + scrollto).offset().top - 100
        }, 500);
        return false;
    });
});

