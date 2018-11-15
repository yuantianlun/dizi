
function threeLinkage(provinceNum,cityNum,areaNum,provinceMockNum,cityMockNum,areaMockNum){
	//获取省份
	$.ajax({
		url : '/showProvince.jspx',
		type : 'POST',
		async: false,
//		dataType : 'json',
		data : {},
		success : function(data) {
			if (data != "" && data != null) {
				var obj = eval("(" + data + ")"); 
				$('#province'+provinceNum).html('<option value="">省</option>');
				$.each(obj.returnMsg, function(i) {
				    $('#province'+provinceNum).append('<option value="'+ i +'">' + obj.returnMsg[i] + '</option>');
				});
			}
		},
		error : function(){
			//alert("error");
		}
	});

	$(document).on('change','#province'+provinceNum,function(){
		$('#formCityMock'+provinceMockNum).text($('#province'+provinceNum+' option:selected').text());
		$('#city'+cityNum).html('<option value="">市</option>');
		$('#formCityMock'+cityMockNum).text($('#city'+cityNum+' option:selected').text());
		$('#area'+areaNum).html('<option value="">区</option>');
		$('#formCityMock'+areaMockNum).text($('#area'+areaNum+' option:selected').text());
		var areaNo = $('#province'+provinceNum+' option:selected').val();
		$.ajax({
			url : '/showCity.jspx?areaNo='+areaNo,
			type : 'POST',
			//async: false,
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
	});
	$(document).on('change','#city'+cityNum,function(){
		$('#formCityMock'+cityMockNum).text($('#city'+cityNum+' option:selected').text());
		$('#area'+areaNum).html('<option value="">区</option>');
		$('#formCityMock'+areaMockNum).text($('#area'+areaNum+' option:selected').text());
		var areaNo = $('#city'+cityNum+' option:selected').val();
		$.ajax({
			url : '/showArea.jspx?areaNo='+areaNo,
			type : 'POST',
			//async: false,
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
	});

	$(document).on('change','#area'+areaNum,function(){
		$('#formCityMock'+areaMockNum).text($('#area'+areaNum+' option:selected').text());
	})
};
