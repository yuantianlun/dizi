$(function(){
	$(document).click(function(){
		$(".provinceLists,.cityLists").css({"display": "none"});
	});
	/* cookie操作 */
	/*function setCookie(c_name,value,expiredays){
		 var exdate=new Date()
		 exdate.setDate(exdate.getDate()+expiredays)
		 document.cookie=c_name+ "=" +escape(value)+
		 ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
	}*/
	jQuery.getScript("https://pv.sohu.com/cityjson",function(){
		var jmsCity = returnCitySN["cname"];
	 	/*setCookie("jmsCity",jmsCity);*/
		$.ajax({
			url : "/getCityByIP.jspx",
			type : "POST",
			data : {cityName: jmsCity},
			success : function(result) {
				if (result != "" && result != null) {
					baseCitySync(result);
				}
			},
			error : function(){
				//alert("error");
			}
		});
	 	function baseCitySync(result){
	 		$(".provinceLists li").each(function(){
	 			if($(this).attr("data-areaNo").substring(0,2)==result.substring(0,2)){
	 				var province = $(this).text();
	 				/*setCookie("jmsProvince",province);*/
	 				if(province == "省" || province == "北京市" || province == "天津市" || province == "上海市" || province == "重庆市" || province == "台湾省" || province == "香港特别行政区" || province == "澳门特别行政区"){
	 					$(".showAdress").text(province);
						return false;
					} else{
						$(".showAdress").text(province+"-"+jmsCity);
					}
	 			} 
	 		});
	 	}
	});
	$(".showAdress").click(function(event){
		var event = event || window.event;
		event.stopPropagation();
		$(".provinceLists").css({"display": "block"});
	});
	$.ajax({
		url : '/showProvince.jspx',
		type : 'POST',
		async: false,
		data : {},
		success : function(data) {
			if (data != "" && data != null) {
				var obj = eval("(" + data + ")"); 
				$(".provinceLists").html("<li data-areaNo=''>省</li>");
				$.each(obj.returnMsg, function(i) {
				    $(".provinceLists").append("<li data-areaNo=" + i + ">" + obj.returnMsg[i] + "</li>");
				});
				$(".provinceLists li").hover(function(){
					$(this).css({"background": "#28a7e1"});
					var province = $(this).text();
					if(province == "省" || province == "北京市" || province == "天津市" || province == "上海市" || province == "重庆市" || province == "台湾省" || province == "香港特别行政区" || province == "澳门特别行政区"){
						$(".cityLists").css({"display": "none"});
						return false;
					} else{
							var areaNo = $(this).attr("data-areaNo");
							$.ajax({
								url : "/showCity.jspx?areaNo="+areaNo,
								type : "POST",
								data : {},
								success : function(data) {
									if (data != "" && data != null) {
										var obj = eval("(" + data + ")");
										$(".cityLists").html("<li>市</li>");
										$.each(obj.returnMsg, function(i) {
										    $(".cityLists").append("<li>" + obj.returnMsg[i] + "</li>");
										});
										$(".cityLists li").hover(function(){
											$(this).css({"background": "#28a7e1"});
										},function(){
											$(this).css({"background": "#fff"});
										}).click(function(event){
											var event = event || window.event;
											event.stopPropagation();
											var city = $(this).text();
											/*setCookie("jmsProvince",city);*/
											/*setCookie("jmsCity",province);*/
											$(".showAdress").text(province + "-" + city);
											$(this).parent().css({"display": "none"})
													.prev().css({"display": "none"});
										});
										$(".cityLists").css({"display": "block"});
									}
								},
								error : function(){
									//alert("error");
								}
						});
					}
				},function(){
					$(this).css({"background": "#fff"});
				}).click(function(event){
					var event = event || window.event;
					event.stopPropagation();
					var province = $(this).text();
					/*setCookie("jmsProvince",province);*/
					$(".showAdress").text(province);
					$(this).parent().css({"display": "none"})
							.next().css({"display": "none"});
				});
			}
		},
		error : function(){
			//alert("error");
		}
	});
	
	$(".btn-zx").mouseenter(function () {
        $(this).css({"color":"#fff","background":"#25a6ff"});
    }).mouseleave(function() {
    	$(this).css({"color":"#25a6ff","background":"#fff"})
    }).click(function () {
    	/*_czc.push(["_trackEvent", "公注_PC", "更多"]);*/
    	/*_MEIQIA('showPanel');*/
    });
	
	// 点击立即购买弹出表单
	/*调整表单左侧偏移量*/
    var width = document.documentElement.clientWidth;
    var left = width/2 -250;
    $("#jms-product-form").css({"left":left});
    
	$(".product_account_wrap .product_account_right .btn .btn-form").mouseenter(function() {
		$(this).css({"cursor":"pointer"});
	}).click(function() {
		document.getElementById("enjoyFormSite").value="产品页下单";
		$("#jms-product-form,#cover").css({"display":"block"});
	});
	
	$("#jms-product-form .title_wrap img").mouseenter(function () {
        $(this).css({"cursor":"pointer"});
    }).click(function () {
        $("#jms-product-form,#cover").css({display:"none"});
    });
	
	/*表单单选框JS开始*/
    $("#jms-product-form form ul li .circle_out1").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#jms-product-form form ul li .circle_out2").css({"background":"#989898"});
        $("#woman66").prop("checked","true");
    });
    $("#jms-product-form form ul li .circle_out2").click(function () {
        $(this).css({"background":"#28a8e0"});
        $("#jms-product-form form ul li .circle_out1").css({"background":"#989898"});
        $("#man66").prop("checked","true");
    });
});
/*=====================================验证码start========================================*/
/*获取验证码*/
function getCode2(){
    var tel = $("#jmsproductPhone").val();//获取手机号码输入框值
    var reg = /^1[3|4|5|7|8|9]\d{9}$/;
	var arr = ["134","135","136","137","138","139","147","150","151","152","157","158","159","147","172","178","182","183","184","187","188","198","130","131","132","145","155","156","166","171","175","176","185","186","133","149","153","173","177","180","181","189","199"];
	var telCut = tel.slice(0, 3);
	var verifyTelCut = $.inArray(telCut, arr);
    if(!reg.test(tel)&&verifyTelCut!=-1){ //校验手机号码格式
       swal({
			title : '操作失败',
			text : '手机号码有误，请重填',
			type : 'warning',
			animation : 'none'
		});
        return false;
    }

	$.ajax({
	    url : "/enterprisePhysical/getcode.jspx?phone="+tel,
    type : "get",
    data:"",
    async:false,
    success : function(result) {
        if (result == "success") {
        	get_code_time2();  //发送成功则出发get_code_time（）函数
        } else {
        	 swal({
			    title : result,
			    text : "",
			    type : 'warning',
			    animation : 'none'
			});
        	return false;
        }
    },
    error : function() {
    	 swal({
		    title : '获取失败',
		    text : '验证码发送出错，请重新获取！',
		    type : 'warning',
		    animation : 'none'
				});
		    }
		});
    }
/*获取验证码倒计时*/
function get_code_time2() {
	var count = 60;
	var timer = null;
	clearInterval(timer);
	$("#jms-product-form form ul .get-code").attr("disabled", true);
	$("#jms-product-form form ul .get-code").css({"background":"#d8dfe5","color":"#333"});
	timer = setInterval(sendMessage, 1000);
	function sendMessage() {
		count--;
		if(count >= 0) {
			$("#jms-product-form form ul .get-code").html(count + "(s)");
		}else {
			count = 60;
			$("#jms-product-form form ul .get-code").html("获取验证码");
			$("#jms-product-form form ul .get-code").css({"background":"#26a6ff","color":"#fff"});
			$("#jms-product-form form ul .get-code").attr("disabled", false);
			clearInterval(timer);
		}
	}
}/*获取验证码倒计时 结束*/
$(function() {
	$("#jms-product-form form ul .get-code").click(function() {
		getCode2();
	});
});
/*===================================验证码 end========================================*/
/*表单收据数据开始*/
function formSubmitEnjoyWithout66(){
    // _czc.push(["_trackEvent", "PC_全部服务", "表单", "申请"]);
    //自动获取的城市ID
    var ID=returnCitySN.cid;
    var serviceProject =document.getElementById('jmsproductConsult').value; 
    if(serviceProject==null || typeof(serviceProject)=="undefined" || serviceProject==''){
    	document.getElementById('jmsproductConsult').value= "空";
	}
    //手机号校验
    var tel = document.getElementById('jmsproductPhone').value;
    if(!(/^1[3|4|5|7|8]\d{9}$/.test(tel))){
        swal({
            title : '操作失败',
            text : '手机号码有误，请重填',
            type : 'warning',
            animation : 'none'
        });
        return false;
    }

    var params = $("#jmsproductForm").serialize();
    $.ajax({
        url : "/storeConsultInfo.jspx",
        type : "post",
        data : params,
        success : function(result) {
            if (result == "success") {
                $(".quickMark_wrap").css({display:"block"});
                $("#jms-product-form").css({display:"none"});
            } else {
                swal({
                    title : '操作失败',
                    text : '您的信息提交失败，请重新提交。',
                    type : 'error',
                    animation : 'none'
                });
            }
        },
        error : function() {
            //alert("error");
        }
    });
  //手机号校验
	/*var tel = document.getElementById('jmsproductPhone').value;//获取手机号码输入框值
	var userCode = $("#jms-product-form form ul #auth-code").val();//获取用户输入的验证码
	$.ajax({
	    url : "/enterprisePhysical/checkcode.jspx?userCode="+userCode,
	    type : "get",
	    data:"",
	    async:false,
	    success : function(result) {
	    	var params=$("#jmsproductForm").serialize();
	        if (result == "success") {
	        	    $.ajax({
	        	        url : "/storeConsultInfo.jspx",
	        	        type : "post",
	        	        data: params,
	        	        success : function(result) {
	        	        	console.log(result);
	        	            if (result == "success") {
	        	            	$(".quickMark_wrap").css({display:"block"});
	        	                $("#jms-product-form").css({display:"none"});
	        	            } else {
	        	                swal({
	        	                    title : '操作失败',
	        	                    text : '您的信息提交失败，请重新提交。',
	        	                    type : 'error',
	        	                    animation : 'none'
	        	                });
	        	            }
	        	        },
	        	        error : function() {
	        	        	swal({
	        	                title : '操作失败',
	        	                text : '提交异常！',
	        	                type : 'error',
	        	                animation : 'none'
	        	            });
	        	        }
	        	    });
	        } else {
	        	 swal({
				    title : '验证失败',
				    text : result,
				    type : 'warning',
				    animation : 'none'
				});
	        	return false;
	        }
	    },
	    error : function() {
	    	 swal({
			    title : '操作失败',
			    text : '请输入正确的验证码!',
			    type : 'warning',
			    animation : 'none'
			});
	    }
	});*/
}
/*表单收据数据结束*/