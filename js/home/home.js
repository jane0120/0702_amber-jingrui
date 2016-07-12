/**
 * Created by jianyujing on 2016/7/5.
 */
$(document).ready(function () {
    $(".car").show(function () {
        $(".car").animate({ marginLeft: -552, opacity: 1 }, 800);
    });
    
    
    
   $(".learn").hover(function () {
        $('.circle1').stop().animate({transform:'translate(-11,7px) scale(2)',opacity:0});
        $('.txt1').stop().animate({transform:' translate(42px,0px) scale(1)',opacity:1});
        $('.arrow1_left').stop().animate({transform:'translate(-16px,4px) scale(1)'});

        },function () {
       $('.circle1').stop().animate({transform:'translate(0,3px) scale(1)',opacity:1});
       $('.txt1').stop().animate({transform:'translate(23px,-4px) scale(.75)',opacity:1});
       $('.arrow1_left').stop().animate({transform: 'translate(-5px,0px) scale(.48)'});
   });

    $(".trip").hover(function () {
        $('.circle2').stop().animate({transform:'translate(-16,3px) scale(2)',opacity:0});
        $('.txt2').stop().animate({transform:'translate(40px,-2px) scale(1)',opacity:1});
        $('.arrow2_left').stop().animate({transform:'translate(-19px,2px) scale(1)'});

    },function () {
        $('.circle2').stop().animate({transform:'translate(0,3px) scale(1)',opacity:1});
        $('.txt2').stop().animate({transform:'translate(24,-3px) scale(.75)',opacity:1});
        $('.arrow2_left').stop().animate({transform: 'translate(-5px,0px) scale(.48)'});
    });
    $("#learn").click(function(){
        $("#view").css('display','none');
        $("#btn").css('display','block');
    });
    $("#trip").click(function(){
        $(".container").css('display','none');
        $("#loading").show();
    });





});




