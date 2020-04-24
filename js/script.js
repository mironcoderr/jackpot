
$(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 130) {
            $(".menu_head").addClass("menu_fix");
        } else {
            $(".menu_head").removeClass("menu_fix");
        }
    });




$('.card').on('click', function(){
    $('.add_border').removeClass('add_border');
    $(this).toggleClass('add_border');          
});





  // Coundown js
    $('.coun_down1').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.coun_down2').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('.coun_down3').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%S'));
    });





    //Tounament scroll js

    $(".tun_scroll").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,
    });







$(document).ready(function(){
    $('.venobox').venobox(); 
});




















