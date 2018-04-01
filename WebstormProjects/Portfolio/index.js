$(document).ready(function () {
$('a.scrollto').on('click', function () {
   var scrollto = $(this).attr('data-scrollto');
    $('.html').animate({width: '90%'}, 2000);
    $('.css').animate({width: '90%'}, 2000);
    $('.javascript').animate({width: '85%'}, 2000);
    $('.nodejs').animate({width: '75%'}, 2000);
    $('.vuejs').animate({width: '70%'}, 2000);
    $('.reactjs').animate({width: '70%'}, 2000);
    $('body, html').animate({
       "scrollTop": $('#'+scrollto).offset().top-100
   },500);
   return false;
});
});

