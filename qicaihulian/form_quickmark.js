/**
 * Created by Administrator on 2017/5/27.
 */
/*控制表单弹出部分JS开始*/
$(function () {
    /*调整表单左侧偏移量*/
    var width = document.documentElement.clientWidth;
    var left = width/2 -250;
    $("#account,#join,#offer,#experience,#search,.quickMark_wrap").css({"left":left});

    /*点击按钮弹出普通代账客户表单（尊享无忧财税服务）和二维码*/

    $("#account .title_wrap img").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
    	_czc.push(["_trackEvent", "PC_全部服务", "表单", "关闭"]);
        $("#account,#cover").css({display:"none"});
    });
    $("#account form ul .btn").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        /*$("#cover").css({display:"none"});*/
    });

    /*表单单选框JS开始*/
    $("#account form ul li .circle_out1").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#account form ul li .circle_out2").css({"background":"#989898"});
        $("#woman").prop("checked","true");
    });
    $("#account form ul li .circle_out2").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#account form ul li .circle_out1").css({"background":"#989898"});
        $("#man").prop("checked","true");
    });
    /*表单单选框JS结束*/
    /*///////////////////////////////////////////////////////////////////////////////////////////*/
    /*获取报价表单*/
    $("#offer .title_wrap img").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $("#offer,#cover").css({display:"none"});
    });
    $("#offer form ul .btn").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $("#cover").css({display:"none"});
    });

    /*表单单选框JS开始*/
    $("#offer form ul li .circle_out1").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#offer form ul li .circle_out2").css({"background":"#989898"});
        $("#woman33").prop("checked","true");
    });
    $("#offer form ul li .circle_out2").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#offer form ul li .circle_out1").css({"background":"#989898"});
        $("#man33").prop("checked","true");
    });
    /*表单单选框JS结束*/
     /*///////////////////////////////////////////////////////////////////////////////////////////*/
    /*申请免费体验表单*/
    $("#experience .title_wrap img").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $("#experience,#cover").css({display:"none"});
    });
    $("#experience form ul .btn").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $("#cover").css({display:"none"});
    });

    /*表单单选框JS开始*/
    $("#experience form ul li .circle_out1").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#experience form ul li .circle_out2").css({"background":"#989898"});
        $("#woman44").prop("checked","true");
    });
    $("#experience form ul li .circle_out2").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#experience form ul li .circle_out1").css({"background":"#989898"});
        $("#man44").prop("checked","true");
    });
    /*表单单选框JS结束*/
    /*///////////////////////////////////////////////////////////////////////////////////////////*/
    /*免费查询表单*/
    $("#search .title_wrap img").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $("#search,#cover").css({display:"none"});
    });
    $("#search form ul .btn").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        /*$("#cover").css({display:"none"});*/
    });

    /*表单单选框JS开始*/
    $("#search form ul li .circle_out1").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#search form ul li .circle_out2").css({"background":"#989898"});
        $("#woman55").prop("checked","true");
    });
    $("#search form ul li .circle_out2").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#search form ul li .circle_out1").css({"background":"#989898"});
        $("#man55").prop("checked","true");
    });
    /*表单单选框JS结束*/
    /*///////////////////////////////////////////////////////////////////////////////////////////*/
    /*点击加盟我们弹出加盟我们表单和二维码*/
    $("#join .title_wrap img").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $("#join,#cover").css({display:"none"});
    });
    $("#join form ul .btn").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $("#cover").css({display:"none"});
    });
    $(".quickMark_bottom .button,.quickMark_top .close_logo").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $(".quickMark_wrap,#cover").css({display:"none"});
    });
    /*表单单选框JS开始*/
    $("#join form ul li .circle_out1").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#join form ul li .circle_out2").css({"background":"#989898"});
        $("#woman1").prop("checked","true");
    });
    $("#join form ul li .circle_out2").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#join form ul li .circle_out1").css({"background":"#989898"});
        $("#man1").prop("checked","true");
    });
    /*表单单选框JS结束*/
});
/*控制表单弹出部分JS结束*/


/*select框mock点击切换城市*/


window.onload = function () {
    $("#formCityMock1_1").text($("#province option:selected").text());
    $("#formCityMock1_2").text($("#city option:selected").text());
    $("#formCityMock1_3").text($("#area option:selected").text());
    $("#formCityMock2_1").text($("#province22 option:selected").text());
    $("#formCityMock2_2").text($("#city22 option:selected").text());
    $("#formCityMock2_3").text($("#area22 option:selected").text());
    $("#formCityMock3_1").text($("#province33 option:selected").text());
    $("#formCityMock3_2").text($("#city33 option:selected").text());
    $("#formCityMock3_3").text($("#area33 option:selected").text());
    $("#formCityMock4_1").text($("#province44 option:selected").text());
    $("#formCityMock4_2").text($("#city44 option:selected").text());
    $("#formCityMock4_3").text($("#area44 option:selected").text());
    $("#formCityMock5_1").text($("#province55 option:selected").text());
    $("#formCityMock5_2").text($("#city55 option:selected").text());
    $("#formCityMock5_3").text($("#area55 option:selected").text());
};