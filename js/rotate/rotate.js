/**
 * Created by jianyujing on 2016/7/6.
 */
$(document).ready(function () {
    $(".arrow3").hover(function () {
        $(".right3").stop().animate({left: 1, transform: 'scale(1) all 0.3s ease-in-out', opacity: 1});
        $(".left3").stop().animate({left: -40, transform: 'scale(0) all 0.3s ease-in-out ', opacity: 0});

    }, function () {
        $(".right3").stop().animate({left: 40, transform: 'scale(0) all 0.3s ease-in-out', opacity: 0});
        $(".left3").stop().animate({left: 1, transform: 'scale(1) all 0.3s ease-in-out', opacity: 1});

    });
    $(".icon2").hover(function () {

        $("#s_img2").stop().animate({transform:'translate(65px, 15px)  scale(.26, .26)',opacity:0});
        $("#s_img21").stop().animate({transform:'translate(8px, 13px) scale(.26, .26)',opacity:1});
        $("#s_txt2").stop().slideUp().animate({opacity:1});
    },function () {
        $("#s_img2").stop().animate({transform:' translate(71px, 15px)  scale(.23, .23)',opacity:1});
        $("#s_img21").stop().animate({transform:'translate(7px, 11px) scale(.223, .23)',opacity:0});
        $("#s_txt2").stop().animate({transform:'translate(-83px, 158px) scale(1, 1)',opacity:0});
    });






    $(".icon3").hover(function () {

        $("#s_img3").stop().animate({transform:'translate(65px, 15px)  scale(.26, .26)',opacity:0});
        $("#s_img31").stop().animate({transform:'translate(8px, 13px) scale(.26, .26)',opacity:1});
        $("#s_txt3").stop().animate({transform:'translate(-106px, 158px) scale(1, 1)',opacity:1});
    },function () {
        $("#s_img3").stop().animate({transform:' translate(71px, 15px)  scale(.23, .23)',opacity:1});
        $("#s_img31").stop().animate({transform:'translate(7px, 11px) scale(.223, .23)',opacity:0});
        $("#s_txt3").stop().animate({transform:'translate(-83px, 158px) scale(1, 1)',opacity:0});
    });




    $("#arrow3").click(function(){
        $("#r_container").css('display','none');
        $("#view").css('display','none');
        $("#container").css('display','block');
        $("#btn").css('display','block');
        $("#header").css('display','block');
        $("#footer").css('display','block');
      
    });
    // $("#s_img21").click(function(){
    //     $("#r_container").css('display','none');
    //     $(".compare").css('display','block');
    // });
    // $("#s_img21").click(function(){
    //     $("#r_container").css('display','none');
    //     $(".exam").css('display','block');
    // });

    $("#rotate_canvas").vc3dEye({
        imagePath:"imgs/",
        totalImages:72,
        imageExtension:"png"
    });

    //click 发动机按钮，展示相应介绍（利用bootstrap的model组件）
   
    $("#intro_btn1").hover(function () {
        $("#logo").hide();
        $("#intro_btn1_img").css("display","block").hide().fadeIn();
        $("#intro_btn1_p").css("display","block").hide().fadeIn();
    },function () {
        $("#logo").show();
        $("#intro_btn1_p").css("display","none");
        $("#intro_btn1_img").css("display","none");
    });
    $("#intro_btn1").click(function () {
        $("#logo").hide();
        $("#intro_btn1_img").hide();
        $("#intro_btn1_p").hide();

        // $('#intro_btn1_model1').modal({
        //     show: 'true'
        // });
    });





































});