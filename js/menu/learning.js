/**
 * Created by jianyujing on 2016/7/4.
 */


$(document).ready(function () {
    $(".back").hover(function () {
        $(".right").stop().animate({left: 1, transform: 'scale(1) all 0.3s ease-in-out ', opacity: 1});
        $(".left").stop().animate({left: -40, transform: 'scale(0) all 0.3s ease-in-out', opacity: 1});
    }, function () {
        $(".right").stop().animate({left: 40, transform: 'scale(0) all 0.3s ease-in-out', opacity: 1});
        $(".left").stop().animate({left: 1, transform: 'scale(1) all 0.3s ease-in-out', opacity: 1});
    });
    $(".menu1").hover(function () {
        this.style.webkitAnimationPlayState='paused';
        $('#img1').stop().animate({transform:'translate(93px, -11px) scale(1, 1)',opacity:0});
        $("#img11").stop().animate({transform:'translate(27px, -11px) scale(1,1) -webkit-transform-style: preserve-3d; ',opacity:1
         });
        $("#txt11").stop().animate({transform:'translate(212px, 290px) scale(1, 1)  -webkit-transform-style: preserve-3d' ,opacity:1
        });
        $("#shadow1").stop().animate({transform: 'translate(26px, 329px) scale(1, 1) -webkit-transform-style: preserve-3d;',opacity:1
        });

    },function () {
        this.style.webkitAnimationPlayState='running';
        $('#img1').stop().animate({transform: 'translate(90px, 2px) scale(.95, .95)', opacity: 1});
        $("#img11").stop().animate({
            transform: 'translate(24px, 0px) scale(.93,.93) -webkit-transform-style: preserve-3d;', opacity: 0
        });
        $("#txt11").stop().animate({
            transform: 'translate(214px, 314px) scale(1, 1) -webkit-transform-style: preserve-3d',
            opacity:0
        });
        $("#shadow1").stop().animate({
            transform: 'translate(10px, 329px) scale(1, 1) -webkit-transform-style: preserve-3d;', opacity: 1
        });

    });
    $(".menu2").hover(function () {
        this.style.webkitAnimationPlayState='paused';
        $('#img2').stop().animate({transform:'translate(90px, -3px) scale(1, 1)',opacity:0});
        $("#img21").stop().animate({transform:'translate(28px, -2px) scale(1,1) -webkit-transform-style: preserve-3d;',opacity:1
        });
        $("#txt21").stop().animate({transform:'translate(137px, 286px) scale(1, 1)  -webkit-transform-style: preserve-3d' ,opacity:1
        });
        $("#shadow2").stop().animate({transform: 'translate(74px, 298px) scale(1, 1) -webkit-transform-style: preserve-3d;',opacity:1
        });

    },function () {
        this.style.webkitAnimationPlayState='running';
        $('#img2').stop().animate({transform: 'translate(90px, 2px) scale(.95, .95)', opacity: 1});
        $("#img21").stop().animate({
            transform: 'translate(24px, 0px) scale(.93,.93) -webkit-transform-style: preserve-3d;', opacity: 0
        });
        $("#txt21").stop().animate({
            transform: 'translate(137px,307px) scale(1, 1) -webkit-transform-style: preserve-3d',
            opacity:0
        });
        $("#shadow2").stop().animate({
            transform: 'translate(59px, 298px) scale(1, 1) -webkit-transform-style: preserve-3d;', opacity: 1
        });

    });
    $(".menu3").hover(function () {
        this.style.webkitAnimationPlayState='paused';
        $('#img3').stop().animate({transform:'translate(90px, -3px) scale(1, 1)  ',opacity:0});
        $("#img31").stop().animate({transform:'translate(28px, -2px) scale(1,1) -webkit-transform-style: preserve-3d;',opacity:1
        });
        $("#txt31").stop().animate({transform:'translate(82px, 289px) scale(1, 1) -webkit-transform-style: preserve-3d' ,opacity:1
        });
        $("#shadow3").stop().animate({transform: 'translate(74px, 298px) scale(1, 1)   -webkit-transform-style: preserve-3d;',opacity:1
        });

    },function () {
        this.style.webkitAnimationPlayState='running';
        $('#img3').stop().animate({transform: 'translate(90px, 2px) scale(.95, .95)', opacity: 1});
        $("#img31").stop().animate({
            transform: 'translate(32px, -3px) scale(.93,.93)   -webkit-transform-style: preserve-3d;', opacity: 0
        });
        $("#txt31").stop().animate({
            transform: 'translate(82px,289px) scale(1, 1)  -webkit-transform-style: preserve-3d',
            opacity:0
        });
        $("#shadow3").stop().animate({
            transform: 'translate(59px, 298px) scale(1, 1)  -webkit-transform-style: preserve-3d;', opacity: 1
        });
    });
    $(".back").click(function(){
        $("#btn").css('display','none');
        $("#view").css('display','block');
    });
    $("#img11").click(function(){
        $("#container").css('display','none');
        $("#r_container").css('display','block');
    });





















});

		