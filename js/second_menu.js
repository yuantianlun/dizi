/**
 * Created by Administrator on 2017/5/26.
 */
/*侧边栏二级菜单部分JS开始*/
$(function () {
    var clickTimes = 1;
    $(".nav_wrap .nav .nav_left .nav_logo").click(function () {
        clickTimes++;
        if (0 == clickTimes % 2) {
            $(".banner1_wrap .banner1").css({
                "display": "block",
                "width": "220px"
            });
        } else {
            $(".banner1_wrap .banner1").css({
                "display": "none",
                "width": "0"
            });
        }
    });
    $(".banner1_wrap .banner1 .banner1_left .second_menu1").hover(function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left1").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left1_1.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu1 .second_menu_right .second_menu_right_title").css({"color": "#222"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu1").css({"background": "white"});
        $(".banner1_wrap .banner1").css({"width": "820px"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu1_1").css({"display": "block"});
    }, function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left1").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left1.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu1 .second_menu_right .second_menu_right_title").css({"color": "white"});
        $(this).css({"background": "#929292"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menus").css({"display": "none"});
        $(".banner1_wrap .banner1").css({"width": "220px"});
    });
    $(".banner1_wrap .banner1 .banner1_left .second_menu2").hover(function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left2").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left2_2.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu2 .second_menu_right .second_menu_right_title").css({"color": "#222"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu2").css({"background": "white"});
        $(".banner1_wrap .banner1").css({"width": "820px"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu2_1").css({"display": "block"});
    }, function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left2").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left2.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu2 .second_menu_right .second_menu_right_title").css({"color": "white"});
        $(this).css({"background": "#929292"});

        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menus").css({"display": "none"});
        $(".banner1_wrap .banner1").css({"width": "220px"});
    });
    $(".banner1_wrap .banner1 .banner1_left .second_menu3").hover(function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left3").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left3_3.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu3 .second_menu_right .second_menu_right_title").css({"color": "#222"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu3").css({"background": "white"});
        $(".banner1_wrap .banner1").css({"width": "820px"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu3_1").css({"display": "block"});
    }, function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left3").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left3.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu3 .second_menu_right .second_menu_right_title").css({"color": "white"});
        $(this).css({"background": "#929292"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menus").css({"display": "none"});
        $(".banner1_wrap .banner1").css({"width": "220px"});
    });
    $(".banner1_wrap .banner1 .banner1_left .second_menu4").hover(function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left4").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left3_3.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu4 .second_menu_right .second_menu_right_title").css({"color": "#222"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu4").css({"background": "white"});
        $(".banner1_wrap .banner1").css({"width": "820px"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu4_1").css({"display": "block"});
    }, function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left4").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left3.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu4 .second_menu_right .second_menu_right_title").css({"color": "white"});
        $(this).css({"background": "#929292"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menus").css({"display": "none"});
        $(".banner1_wrap .banner1").css({"width": "220px"});
    });
    $(".banner1_wrap .banner1 .banner1_left .second_menu5").hover(function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left5").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left3_3.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu5 .second_menu_right .second_menu_right_title").css({"color": "#222"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu5").css({"background": "white"});
        $(".banner1_wrap .banner1").css({"width": "820px"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu5_1").css({"display": "block"});
    }, function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left5").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left3.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu5 .second_menu_right .second_menu_right_title").css({"color": "white"});
        $(this).css({"background": "#929292"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menus").css({"display": "none"});
        $(".banner1_wrap .banner1").css({"width": "230px"});
    });
    $(".banner1_wrap .banner1 .banner1_left .second_menu6").hover(function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left6").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left3_3.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu6 .second_menu_right .second_menu_right_title").css({"color": "#222"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu6").css({"background": "white"});
        $(".banner1_wrap .banner1").css({"width": "820px"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu6_1").css({"display": "block"});
    }, function () {
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menu_left6").attr({"src": "/template/1/huisuanzhang/_files/images/index_imgs/second_menu_left3.png"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu6 .second_menu_right .second_menu_right_title").css({"color": "white"});
        $(this).css({"background": "#929292"});
        $(".banner1_wrap .banner1 .banner1_left .second_menu .second_menus").css({"display": "none"});
        $(".banner1_wrap .banner1").css({"width": "230px"});
    });
    /*点击二级菜单列表项弹出尊享无忧表单*/
    $(".banner1_wrap .banner1 .banner1_left .second_menu1 .second_menus .second_menu_lists .second_menu_list").mouseenter(function () {
        $(this).css({"cursor": "pointer"});
    }).click(function () {
        _czc.push(["_trackEvent", "PC_全部服务", "点击"]);
        document.getElementById("enjoyFormSite").value = "全部服务-开公司";
        /*$("#account,#cover").css({"display":"block"});*/
    });

    $(".second_menu1 .s_m_1,.second_menu1 .s_m_2,.second_menu1 .s_m_3").click(function () {
        $("#account,#cover").css({"display": "block"});
    });

    $(".second_menu2 .s_m_4,.second_menu2 .s_m_5").click(function () {
        $("#account,#cover").css({"display": "block"});
    });

    $(".second_menu3 .s_m_6,.second_menu3 .s_m_7,.second_menu3 .s_m_8").click(function () {
        $("#account,#cover").css({"display": "block"});
    });

    $(".banner1_wrap .banner1 .banner1_left .second_menu2 .second_menus .second_menu_lists .second_menu_list").mouseenter(function () {
        $(this).css({"cursor": "pointer"});
    }).click(function () {
        _czc.push(["_trackEvent", "PC_全部服务", "点击"]);
        document.getElementById("enjoyFormSite").value = "全部服务-代理记账";
        /*$("#account,#cover").css({"display":"block"});*/
    });
    $(".banner1_wrap .banner1 .banner1_left .second_menu3 .second_menus .second_menu_lists .second_menu_list").mouseenter(function () {
        $(this).css({"cursor": "pointer"});
    }).click(function () {
        _czc.push(["_trackEvent", "PC_全部服务", "点击"]);
        document.getElementById("enjoyFormSite").value = "全部服务-增值服务";
        /*$("#account,#cover").css({"display":"block"});*/
    });
    $(".banner1 .banner1_left .second_menu_left,.banner1 .banner1_left .second_menu_right").mouseenter(function () {
        $(this).css({"cursor": "pointer"});
    });

    /*屏蔽信息*/
    /*$("#mainCon .banner_ul_li3 a").attr("id","index_banner323");*/
});
/*侧边栏二级菜单部分JS结束*/