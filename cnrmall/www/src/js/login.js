$(function(){
	$(".method li").click(function(){
		var methindex = $(".method li").index(this);
		$(this).removeClass("bgcolor").siblings().addClass("bgcolor");
		$("form").eq(methindex).css("display","block").siblings().css("display","none");
	});
	
	
//	$.cookie("userNew", {
//		"zhangsan":{name:15707974438,pwd:123456}
//  });
    $.cookie.raw = true;
	$.cookie.json = true;
	$obj = $.cookie('user');

	$(".loginbtn:eq(0)").bind("click",function(){
		var phoneNumber = false;
		var passWord = false;
		var count = 0;
		for(var i = 0;i<$obj.length;i++){		
			if($obj[i].the_phoneNum == $(".one:eq(0)").val()){
				count = i;
				rightPhone = $obj[count].the_phoneNum;
				phoneNumber = true;
			}
			if($obj[count].the_paw == $(".one:eq(1)").val()){
				rightPasswd = $obj[count].the_paw;
				passWord = true;
			}
		}
		if(phoneNumber == true && passWord == true){
			var jsonText = {"phone": rightPhone,"password": rightPasswd};

			$.cookie('userNew', jsonText, { expires: 7, path: '/' });
			window.location.href = "../index.html";
		}else{
			alert("用户名或密码错误");
		}
	})











})