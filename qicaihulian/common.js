/**
 * Created by Administrator on 2017/5/23.

 */
/*初始化选择城市表单以及各页面表单中的三级联动*/
threeLinkage("","","","1_1","1_2","1_3");
threeLinkage("11","11","11");
threeLinkage("22","22","22","2_1","2_2","2_3");
threeLinkage("33","33","33","3_1","3_2","3_3");
threeLinkage("44","44","44","4_1","4_2","4_3");
threeLinkage("55","55","55","5_1","5_2","5_3");
threeLinkage("66","66","66","6_1","6_2","6_3");

formCityMock();
formCityMock2();
formCityMock3();
changeCity();
/*根据IP定位当前城市*/
var pageURL=window.location.href;
//防止跨框架脚本攻击（XFS）Iframe
if (self == top) {
    var theBody = document.getElementsByTagName('body')[0];
    theBody.style.display = "block";
} else {
    top.location = self.location;
}

$(document).ready(function(){
	$.ajax({
        type:"POST",
        url:"/getCityNameByIP.jspx", //访问的链接
        dataType:"text",
        /*async:false,*/
        success:function(data){  //成功的回调函数
        	var remote_ip_info=JSON.parse(data);
        	var cityTS = remote_ip_info["city"];
   		 for(var p in cityJC){
   			 if(p.indexOf(cityTS)>=0){
   				 $("#citySpan1").text(cityTS);
   				 $("#citySpan2").html("<a href='https://www.huisuanzhang.com/dailijizh/"+cityJC[''+p+'']+".html'>"+cityTS+"代理记账<a/>");
   				break;
   				}
   			 }
        },
        error: function (e) {
           // alert("城市定位出错！");
        }
    });
	var city=getCookie("city");
	 var result="";
	/*判断是否有session city如果没有自动抓取 若有就从session中抓取 对应城市的
	 * ID根据获取的IP从后台查询
	 * */
	 if(city==""||city==null||city=="undefined"){
		 $.ajax({
		        type:"POST",
		        url:"/getCityNameByIP.jspx", //访问的链接
		        dataType:"text",
		        success:function(data){  //成功的回调函数
		        	var remote_ip_info=JSON.parse(data);
		    	 	city = remote_ip_info["city"];
		    	 	setCookie("city",city);
		    	 	$("#formCityMock").text(city);
		    	 	$("#formCityMock1").text(city);
		    	 	$("#citySpan").text(city); 
		    	 	$("#export-city-mock").text(city);
		    	 	$("#formCityMock4").text(city);
		      $.ajax({
					url:"/getCityByIP.jspx?"+pageURL,
					type:"post",
					data:{cityName:city},
					success:function(result){
							/*result=resultCityID;*/
							$("#cityID").html('<option value="'+result+'">'+city+'</option>');
							$("#cityID1").text(city).attr("value",result);
							if(result.substring(2,6)=="0000"){
								setCookie("jms-province-id",result);
								baseProvinceSync("","","",result)
								baseProvinceSync("11","11","11",result)
								baseProvinceSync("22","22","22",result)
								baseProvinceSync("33","33","33",result)
								baseProvinceSync("44","44","44",result)
								baseProvinceSync("55","55","55",result)
								baseProvinceSync("66","66","66",result)
							}else{
								if(result.substring(4,6)=="00"){
									setCookie("jms-city-id",result);
	
									baseCitySync("","","",result);
									baseCitySync("11","11","11",result);
									baseCitySync("22","22","22",result);
									baseCitySync("33","33","33",result);
									baseCitySync("44","44","44",result);
									baseCitySync("55","55","55",result);
									baseCitySync("66","66","66",result);
								}else{
									setCookie("jms-area-id",result);
	
									baseAreaSync("","","",result);
									baseAreaSync("11","11","11",result);
									baseAreaSync("22","22","22",result);
									baseAreaSync("33","33","33",result);
									baseAreaSync("44","44","44",result);
									baseAreaSync("55","55","55",result);
									baseAreaSync("66","66","66",result);
								}
							}
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
						    $("#formCityMock6_1").text($("#province66 option:selected").text());
						    $("#formCityMock6_2").text($("#city66 option:selected").text());
						    $("#formCityMock6_3").text($("#area66 option:selected").text());
							}
						});
		        },
		        error: function (e) {
		           // alert("error");
		        }
		    });
	 }else{
//		 $("#jmsIN").attr("href","/dailijizh/"+cityJC[''+city+'']+".html");
//		 $("#jmsIN").text("查看"+city+"服务商");
			$("#formCityMock").text(city);
			$("#formCityMock1").text(city);
			$("#citySpan").text(city); 
			$("#export-city-mock").text(city);
			$("#formCityMock4").text(city);
		 $.ajax({
				url:"/getCityByIP.jspx?"+pageURL,
				type:"post",
				data:{cityName:city},
				success:function(result){
					$("#cityID").html('<option value="'+result+'">'+city+'</option>');
					$("#cityID1").text(city).attr("value",result);
					if(result.substring(2,6)=="0000"){
						setCookie("jms-province-id",result);

						baseProvinceSync("","","",result)
						baseProvinceSync("11","11","11",result)
						baseProvinceSync("22","22","22",result)
						baseProvinceSync("33","33","33",result)
						baseProvinceSync("44","44","44",result)
						baseProvinceSync("55","55","55",result)
						baseProvinceSync("66","66","66",result)
					}else{
						if(result.substring(4,6)=="00"){
							setCookie("jms-city-id",result);

							baseCitySync("","","",result);
							baseCitySync("11","11","11",result);
							baseCitySync("22","22","22",result);
							baseCitySync("33","33","33",result);
							baseCitySync("44","44","44",result);
							baseCitySync("55","55","55",result);
							baseCitySync("66","66","66",result);
						}else{
							setCookie("jms-area-id",result);

							baseAreaSync("","","",result);
							baseAreaSync("11","11","11",result);
							baseAreaSync("22","22","22",result);
							baseAreaSync("33","33","33",result);
							baseAreaSync("44","44","44",result);
							baseAreaSync("55","55","55",result);
							baseAreaSync("66","66","66",result);
						}
					}
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
				    $("#formCityMock6_1").text($("#province66 option:selected").text());
				    $("#formCityMock6_2").text($("#city66 option:selected").text());
				    $("#formCityMock6_3").text($("#area66 option:selected").text());
				}
			});
	 	}
	 for(var p in cityJC){
		 if(p.indexOf(city)>=0){
				 $("#jmsIN,#index_banner3").attr("href","https://www.huisuanzhang.com/dailijizh/"+cityJC[''+p+'']+".html");
				 $("#jmsIN").text("查看"+p+"服务商");
//				 $("#citySpan").text(p);
//				 $("#formCityMock4").text(p);
				 break;
			}
		 }
});

/*
 * cookie操作开始
 */
function getCookie(c_name){
	 if (document.cookie.length>0)	
	   {
	   c_start=document.cookie.indexOf(c_name + "=")
	   if (c_start!=-1)
	     { 
	     c_start=c_start + c_name.length+1 
	     c_end=document.cookie.indexOf(";",c_start)
	     if (c_end==-1) c_end=document.cookie.length
	     return unescape(document.cookie.substring(c_start,c_end))
	     } 
	   }
	 return ""
}

function setCookie(c_name,value,expiredays){
	 var exdate=new Date()
	 exdate.setDate(exdate.getDate()+expiredays)
	 document.cookie=c_name+ "=" +escape(value)+
	 ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
/*
 * cookie操作结束
 */


/* changeCity切换城市 */
function changeCity(){
    //城市校验
    // var cityID = document.getElementById('cityID').value;
    //if(cityID==null||cityID=="undefined"||cityID==""){
    var cid="";
    var city="";
    var cityPicker = new IIInsomniaCityPicker({
        data: cityData,
        target: '#changeCity',
        valType: 'k-v',
        hideCityInput: '#qiehuancity',
        hideProvinceInput: '#qiehuanprovince',
        callback: function(cname){
        	/*if(cname == "重庆市") {
        		window.open ( "https://cq.huisuanzhang.com/" , "_self" ) ;
        	}
        	if(cname == "天津市") {
        		window.open ( "https://tj.huisuanzhang.com/" , "_self" ) ;
        	}*/
        	city = cname;
            setCookie("city",city);
            $("#jmsIN").attr("href","https://www.huisuanzhang.com/dailijizh/"+cityJC[''+city+'']+".html");
            $("#jmsIN").text("查看"+city+"服务商");
            $("#formCityMock").text(city);
            $("#formCityMock1").text(city);
            $("#citySpan").text(city);
            $("#export-city-mock").text(city);
            //弹出选择的城市名称
            //alert(cname);
            //发送ajax模糊查询数据库中的市，返回市的对应的ID值，将此ID值赋值给下拉框
            $.ajax({
                url:"/getCityByIP.jspx",
                type:"post",
                data:{cityName:cname},
                success:function(result){
                    cid=result;
                    //city=getCookie("city");
                    $("#cityID").html('<option value="'+result+'">'+city+'</option>');
                    $("#cityID1").text(city).attr("value",result);
					if(result.substring(2,6)=="0000"){
						setCookie("jms-province-id",result);

						baseProvinceSync("","","",result)
						baseProvinceSync("11","11","11",result)
						baseProvinceSync("22","22","22",result)
						baseProvinceSync("33","33","33",result)
						baseProvinceSync("44","44","44",result)
						baseProvinceSync("55","55","55",result)
						baseProvinceSync("66","66","66",result)
					}else{
						if(result.substring(4,6)=="00"){
							setCookie("jms-city-id",result);

							baseCitySync("","","",result);
							baseCitySync("11","11","11",result);
							baseCitySync("22","22","22",result);
							baseCitySync("33","33","33",result);
							baseCitySync("44","44","44",result);
							baseCitySync("55","55","55",result);
							baseCitySync("66","66","66",result);
						}else{
							setCookie("jms-area-id",result);

							baseAreaSync("","","",result);
							baseAreaSync("11","11","11",result);
							baseAreaSync("22","22","22",result);
							baseAreaSync("33","33","33",result);
							baseAreaSync("44","44","44",result);
							baseAreaSync("55","55","55",result);
							baseAreaSync("66","66","66",result);
						}
					}
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
				    $("#formCityMock6_1").text($("#province66 option:selected").text());
				    $("#formCityMock6_2").text($("#city66 option:selected").text());
				    $("#formCityMock6_3").text($("#area66 option:selected").text());
                }
            });
        }
    });
    cityPicker.init();
}
/*////////////////////////////////////////////////////////////////////////////*/
/*select框mock点击切换城市*/
function formCityMock(){
    //城市校验
    // var cityID = document.getElementById('cityID').value;
    //if(cityID==null||cityID=="undefined"||cityID==""){
    var cid="";
    var city="";
    var cityPicker = new IIInsomniaCityPickerForm({
        data: cityData,
        target: '#formCityMock',
        valType: 'k-v',
        hideCityInput: '#formcity',
        hideProvinceInput: '#formprovince',
        callback: function(cname){
        	city = cname;
            setCookie("city",city);
            $("#jmsIN").attr("href","/dailijizh/"+cityJC[''+city+'']+".html");
            $("#jmsIN").text("查看"+city+"服务商");
            $("#formCityMock").text(city);
            $("#formCityMock1").text(city);
            $("#citySpan").text(city);
            $("#export-city-mock").text(city);
            //弹出选择的城市名称
            //alert(cname);
            //发送ajax模糊查询数据库中的市，返回市的对应的ID值，将此ID值赋值给下拉框
            $.ajax({
                url:"/getCityByIP.jspx",
                type:"post",
                data:{cityName:cname},
                success:function(result){
                    cid=result;
                    city=getCookie("city");
                    $("#cityID").html('<option value="'+result+'">'+city+'</option>');
                    $("#cityID1").text(city).attr("value",result);
					if(result.substring(2,6)=="0000"){
						setCookie("jms-province-id",result);

						baseProvinceSync("","","",result)
						baseProvinceSync("11","11","11",result)
						baseProvinceSync("22","22","22",result)
						baseProvinceSync("33","33","33",result)
						baseProvinceSync("44","44","44",result)
						baseProvinceSync("55","55","55",result)
						baseProvinceSync("66","66","66",result)
					}else{
						if(result.substring(4,6)=="00"){
							setCookie("jms-city-id",result);

							baseCitySync("","","",result);
							baseCitySync("11","11","11",result);
							baseCitySync("22","22","22",result);
							baseCitySync("33","33","33",result);
							baseCitySync("44","44","44",result);
							baseCitySync("55","55","55",result);
							baseCitySync("66","66","66",result);
						}else{
							setCookie("jms-area-id",result);

							baseAreaSync("","","",result);
							baseAreaSync("11","11","11",result);
							baseAreaSync("22","22","22",result);
							baseAreaSync("33","33","33",result);
							baseAreaSync("44","44","44",result);
							baseAreaSync("55","55","55",result);
							baseAreaSync("66","66","66",result);
						}
					}
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
				    $("#formCityMock6_1").text($("#province66 option:selected").text());
				    $("#formCityMock6_2").text($("#city66 option:selected").text());
				    $("#formCityMock6_3").text($("#area66 option:selected").text());
                }
            });
        }
    });
    cityPicker.init();
}

/*/////////////////////////////////////////////////*/
function formCityMock2(){
    //城市校验
    // var cityID = document.getElementById('cityID').value;
    //if(cityID==null||cityID=="undefined"||cityID==""){
    var cid="";
    var city="";
    var cityPicker = new IIInsomniaCityPickerForm2({
        data: cityData,
        target: '#cityID1',
        valType: 'k-v',
        hideCityInput: '#formcity',
        hideProvinceInput: '#formprovince',
        callback: function(cname){
        	city = cname;
            setCookie("city",city);
            $("#jmsIN").attr("href","/dailijizh/"+cityJC[''+city+'']+".html");
            $("#jmsIN").text("查看"+city+"服务商");
            $("#formCityMock").text(city);
            $("#formCityMock1").text(city);
            $("#citySpan").text(city);
            $("#export-city-mock").text(city);
            //弹出选择的城市名称
            //alert(cname);
            //发送ajax模糊查询数据库中的市，返回市的对应的ID值，将此ID值赋值给下拉框
            $.ajax({
                url:"/getCityByIP.jspx",
                type:"post",
                data:{cityName:cname},
                success:function(result){
                    cid=result;
                    city=getCookie("city");
                    $("#cityID").html('<option value="'+result+'">'+city+'</option>');
                    $("#cityID1").text(city).attr("value",result);
					if(result.substring(2,6)=="0000"){
						setCookie("jms-province-id",result);

						baseProvinceSync("","","",result)
						baseProvinceSync("11","11","11",result)
						baseProvinceSync("22","22","22",result)
						baseProvinceSync("33","33","33",result)
						baseProvinceSync("44","44","44",result)
						baseProvinceSync("55","55","55",result)
						baseProvinceSync("66","66","66",result)
						$("#orderCity").attr("name","province.provinceID");
						$("#orderCity").val(result);
					}else{
						if(result.substring(4,6)=="00"){
							setCookie("jms-city-id",result);

							baseCitySync("","","",result);
							baseCitySync("11","11","11",result);
							baseCitySync("22","22","22",result);
							baseCitySync("33","33","33",result);
							baseCitySync("44","44","44",result);
							baseCitySync("55","55","55",result);
							baseCitySync("66","66","66",result);
							$("#orderCity").attr("name","city.cityID");
							$("#orderCity").val(result);
						}else{
							setCookie("jms-area-id",result);

							baseAreaSync("","","",result);
							baseAreaSync("11","11","11",result);
							baseAreaSync("22","22","22",result);
							baseAreaSync("33","33","33",result);
							baseAreaSync("44","44","44",result);
							baseAreaSync("55","55","55",result);
							baseAreaSync("66","66","66",result);
						}
					}
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
				    $("#formCityMock6_1").text($("#province66 option:selected").text());
				    $("#formCityMock6_2").text($("#city66 option:selected").text());
				    $("#formCityMock6_3").text($("#area66 option:selected").text());
                }
            });
        }
    });
    cityPicker.init();
}

/*/////////////////////////////////////////////////*/
function formCityMock3(){
    //城市校验
    // var cityID = document.getElementById('cityID').value;
    //if(cityID==null||cityID=="undefined"||cityID==""){
    var cid="";
    var city="";
    var cityPicker = new IIInsomniaCityPickerForm2({
        data: cityData,
        target: '#export-city-mock',
        valType: 'k-v',
        hideCityInput: '#formcity',
        hideProvinceInput: '#formprovince',
        callback: function(cname){
        	city = cname;
            setCookie("city",city);
            $("#jmsIN").attr("href","/dailijizh/"+cityJC[''+city+'']+".html");
            $("#jmsIN").text("查看"+city+"服务商");
            $("#formCityMock").text(city);
            $("#formCityMock1").text(city);
            $("#citySpan").text(city);
            $("#export-city-mock").text(city);
            //弹出选择的城市名称
            //alert(cname);
            //发送ajax模糊查询数据库中的市，返回市的对应的ID值，将此ID值赋值给下拉框
            $.ajax({
                url:"/getCityByIP.jspx",
                type:"post",
                data:{cityName:cname},
                success:function(result){
                    cid=result;
                    city=getCookie("city");
                    $("#cityID").html('<option value="'+result+'">'+city+'</option>');
                    $("#cityID1").text(city).attr("value",result);
					if(result.substring(2,6)=="0000"){
						setCookie("jms-province-id",result);

						baseProvinceSync("","","",result)
						baseProvinceSync("11","11","11",result)
						baseProvinceSync("22","22","22",result)
						baseProvinceSync("33","33","33",result)
						baseProvinceSync("44","44","44",result)
						baseProvinceSync("55","55","55",result)
						baseProvinceSync("66","66","66",result)
						$("#orderCity").attr("name","province.provinceID");
						$("#orderCity").val(result);
					}else{
						if(result.substring(4,6)=="00"){
							setCookie("jms-city-id",result);

							baseCitySync("","","",result);
							baseCitySync("11","11","11",result);
							baseCitySync("22","22","22",result);
							baseCitySync("33","33","33",result);
							baseCitySync("44","44","44",result);
							baseCitySync("55","55","55",result);
							baseCitySync("66","66","66",result);
							$("#orderCity").attr("name","city.cityID");
							$("#orderCity").val(result);
						}else{
							setCookie("jms-area-id",result);

							baseAreaSync("","","",result);
							baseAreaSync("11","11","11",result);
							baseAreaSync("22","22","22",result);
							baseAreaSync("33","33","33",result);
							baseAreaSync("44","44","44",result);
							baseAreaSync("55","55","55",result);
							baseAreaSync("66","66","66",result);
						}
					}
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
				    $("#formCityMock6_1").text($("#province66 option:selected").text());
				    $("#formCityMock6_2").text($("#city66 option:selected").text());
				    $("#formCityMock6_3").text($("#area66 option:selected").text());
                }
            });
        }
    });
    cityPicker.init();
}

/*获取验证码*/
function getCode(){
    var tel = $("#enjoyTel").val();//获取手机号码输入框值
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
        	get_code_time();  //发送成功则出发get_code_time（）函数
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
function get_code_time() {
	var count = 60;
	var timer = null;
	clearInterval(timer);
	$("#account form ul .get-code").attr("disabled", true);
	$("#account form ul .get-code").css({"background":"#d8dfe5","color":"#333"});
	timer = setInterval(sendMessage, 1000);
	function sendMessage() {
		count--;
		if(count >= 0) {
			$("#account form ul .get-code").html(count + "(s)");
		}else {
			count = 60;
			$("#account form ul .get-code").html("获取验证码");
			$("#account form ul .get-code").css({"background":"#26a6ff","color":"#fff"});
			$("#account form ul .get-code").attr("disabled", false);
			clearInterval(timer);
		}
	}
}/*获取验证码倒计时 结束*/
$(function() {
	$("#account form ul .get-code").click(function() {
		getCode();
	});
});
//尊享无忧表单提交点击事件
function formSubmitEnjoyWithout(){
	_czc.push(["_trackEvent", "PC_全部服务", "表单", "申请"]);
	//自动获取的城市ID
	var ID=returnCitySN.cid;
	//手机号校验
	var tel = document.getElementById('enjoyTel').value;
	if(!(/^1[3|4|5|7|8]\d{9}$/.test(tel))){
		swal({
			title : '操作失败',
			text : '手机号码有误，请重填',
			type : 'warning',
			animation : 'none'
		}); 
		return false;
		}
	var params = $("#enjoyWithout").serialize();
	$.ajax({
		url : "/storeConsultInfo.jspx",
		type : "post",
		data : params,
		success : function(result) {
			if (result == "success") {
				 $(".quickMark_wrap").css({display:"block"});
			     $("#account").css({display:"none"});
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
}

//加盟我们表单提交事件
function joinUsForm(){
	//公司名称非空判断
	var companyName=$("#companyName1").val();
	if(companyName==null || typeof(companyName)=="undefined" || companyName==''){
//			alert("区域不能为空!"); 
		swal({
			title : '操作失败',
			text : '公司名称不能为空!',
			type : 'warning',
			animation : 'none'
		}); 
		return false;
	}
	
	//联系方式非空判断
	var phone=$("#phone1").val();
	if(phone==null || typeof(phone)=="undefined" || phone==''){
//			alert("区域不能为空!"); 
		swal({
			title : '操作失败',
			text : '联系方式不能为空!',
			type : 'warning',
			animation : 'none'
		}); 
		return false;
	}
	
	//ajax提交表单更新申请信息
	var params = $("#joinUsForm").serialize();
	$.ajax({
		url:"/joinInfoUpdate.jspx",
		type:"post",
		data:params,
		success:function(result){
			if (result == "success") {
				//成功弹出加盟我们表单
				$(".quickMark_wrap,#cover").css({display:"block"});
		        $("#join").css({display:"none"});
				
			} else {
				swal({
					title : '操作失败',
					text : '您的信息提交失败，请重新提交。',
					type : 'error',
					animation : 'none'
				});
			}
		},
		error:function(){
		//	alert("error");
		}
	});
}

//根据插件中选择的省同步各表单
function baseProvinceSync(provinceNum,cityNum,areaNum,result){
	$("#province"+provinceNum+" option[value='"+result+"']").siblings().removeAttr("selected");
	$("#province"+provinceNum+" option[value='"+result+"']").attr("selected","selected");
	getCity(provinceNum,cityNum,areaNum);
}
//根据插件中选择的市同步各表单
function baseCitySync(provinceNum,cityNum,areaNum,result){
	$("#province"+provinceNum+" option").each(function(){
		if($(this).val().substring(0,2)==result.substring(0,2)){
			$(this).siblings().removeAttr("selected");
			$(this).attr("selected","selected");
			var areaNo = $(this).val();
			$.ajax({
				url : '/showCity.jspx?areaNo='+areaNo,
				type : 'POST',
				async: false,
				//dataType : 'json',
				data : {},
				success : function(data) {
					if (data != "" && data != null) {
						var obj = eval("(" + data + ")"); 
						$("#city"+cityNum).html('<option value="">市</option>');
						$.each(obj.returnMsg, function(i) {
							$("#city"+cityNum).append('<option value="'+ i+'">' + obj.returnMsg[i] + '</option>');
						});
					}
					$("#city"+cityNum+" option[value='"+result+"']").siblings().removeAttr("selected");
					$("#city"+cityNum+" option[value='"+result+"']").attr("selected","selected");
					getArea(cityNum,areaNum);
				},
				error : function(){
					//alert("error");
				}
			});
		}
	});
}
//根据插件中选择的区同步各表单
function baseAreaSync(provinceNum,cityNum,areaNum,result){
	$("#province"+provinceNum+" option").each(function(){
		if($(this).val().substring(0,2)==result.substring(0,2)){
			$(this).siblings().removeAttr("selected");
			$(this).attr("selected","selected");
			var areaNo = $(this).val();
			$.ajax({
				url : '/showCity.jspx?areaNo='+areaNo,
				type : 'POST',
				async: false,
				//dataType : 'json',
				data : {},
				success : function(data) {
					if (data != "" && data != null) {
						var obj = eval("(" + data + ")"); 
						$("#city"+cityNum).html('<option value="">市</option>');
						$.each(obj.returnMsg, function(i) {
							$("#city"+cityNum).append('<option value="'+ i+'">' + obj.returnMsg[i] + '</option>');
						});
					}
					$("#province"+cityNum+" option").each(function(){
						if($(this).val().substring(0,4)==result.substring(0,4)){
							$("#city"+cityNum+" option[value='"+result+"']").siblings().removeAttr("selected");
							$("#city"+cityNum+" option[value='"+result+"']").attr("selected","selected");
							getArea(cityNum,areaNum);
							$("#area"+areaNum+" option").each(function(){
								if($(this).val()==result){
									$(this).siblings().removeAttr("selected");
									$(this).attr("selected","selected");
								}
							})
						}
					});
				},
				error : function(){
				//	alert("error");
				}
			});
		}
	});
}
function getCity (provinceNum,cityNum,areaNum){
	$('#city'+cityNum).html('<option value="">市</option>');
	$('#area'+areaNum).html('<option value="">区</option>');
	var areaNo = $('#province'+provinceNum+' option:selected').val();
	$.ajax({
		url : '/showCity.jspx?areaNo='+areaNo,
		type : 'POST',
//			dataType : 'json',
		data : {},
		success : function(data) {
			if (data != "" && data != null) {
				var obj = eval("(" + data + ")"); 
				$.each(obj.returnMsg, function(i) {
				    $('#city'+cityNum).append('<option value="'+ i+'">' + obj.returnMsg[i] + '</option>');
				});
			}
		},
		error : function(){
			//alert("error");
		}
	});
}
function getArea (cityNum,areaNum){
	$('#area'+areaNum).html('<option value="">区</option>');
	var areaNo = $('#city'+cityNum+' option:selected').val();
	$.ajax({
		url : '/showArea.jspx?areaNo='+areaNo,
		type : 'POST',
		async: false,
		data : {},
		success : function(data) {
			if (data != "" && data != null) {
				var obj = eval("(" + data + ")"); 
				$.each(obj.returnMsg, function(i) {
					$('#area'+areaNum).append('<option value="'+ i +'">' + obj.returnMsg[i] + '</option>');
				});
			}
		},
		error : function(){
			//alert("error");
		}
	});
}
/*formCityMock框移入指针变手JS开始*/
$("#formCityMock,#formCityMock1").mouseenter(function () {
	$(this).css({"cursor":"pointer"});
});

/*formCityMock框移入指针变手JS结束*/
/*
 * 2.17/12/27 18:58 by Cloud 
 * head顶部添加网络学院
 * */
$(function() {
	$('.header_networking').click(function() {
		_czc.push(["_trackEvent", "PC_网络学院"]);
	})
})
/*
 * 隐藏社保公积金的字样，和更多服务那个页面的入口
 * 2018/5/28 by Cloud
 * */
$(function() {
	// 隐藏更多服务入口
	/*$(".inner-links-contains li:nth-child(2) .inner-links-lists li:last-child,#pc_header .nav_wrap .nav .nav_right .navs.nav4").hide();*/
	/*$("#pc_header .banner1_wrap .banner1 .banner1_left .second_menu3 .second_menu_right .second_menu_right_p:contains('社保代缴'),#pc_header .banner1_wrap .banner1 .banner1_left .second_menu3 .second_menu_right .second_menu_right_p:contains('取公积金'),.second_menu3_1 .second_menu_lists li:nth-child(1),.second_menu3_1 .second_menu_lists li:nth-child(2),.second_menu3_1 .second_menu_lists li:nth-child(4),.second_menu3_1 .second_menu_lists li:nth-child(3)").hide();*/
	/*$("#pc_footer .siteinfo_wrap .web_links .col_2 ul li:last-child").hide();*/
	
	/*$(".nav_wrap .nav .nav_right .nav10").html('<a href="https://www.huisuanzhang.com/heming.html"  target="_blank"> 企业核名</a>');
	$(".nav_wrap .nav .nav_right .nav5").after('<li class="navs nav11"><a href="/zt/fufeinew.html"  target="_blank"> 付费资讯</a></li>');*/
	
	//去除侧边栏增值服务链接
	/*$(".second_menu3 .second_menu_right a").attr("href","javascript:void(0);");*/
	
	//改为：进出口经营权代办
	/*$(".s_m_2 .second_menu_list_name").html("进出口经营权代办");*/
	//网站地图添加链接
	/*$(".footer .inner-links-list2 a:contains('网站地图')").attr("href","https://www.huisuanzhang.com/sitemap.xml");*/
	//将“增值服务”中的“商标专利”改为“避税天堂”
	/*$(".second_menu3 .second_menu_right_p:contains('商标专利')").html('避税天堂');*/
	//增加 “商务合作”
	/*$(".footer .inner-links-contains li:last-child .inner-links-lists li:last-child").after('<li class="inner-links-list2"><a href="/brand/business.html"  target="_blank">商务合作</a></li>')*/
});
