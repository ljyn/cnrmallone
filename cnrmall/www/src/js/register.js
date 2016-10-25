

$(function(){
	
	
	
	
	
//	$(".total").on('mouseover',function(){
//		
//		$(this).addClass("totalborder").find(".thelist").css("display","block");
//	});
//	$(".total").on('mouseout',function(){
//		$(this).removeClass("totalborder").find(".thelist").css("display","none");
//	})

	
	
	
  	$(".one:eq(0)").focus(function(){
  		if($(this).val()!=""){
  			$(".phonenum").html("");
  		}else{
  			$(".phonenum").html("请输入手机号码");
  		}
  	});
  	$(".one:eq(0)").blur(function(){
  		if($(this).val()==""){
  			$(".phonenum").html("手机号码不能为空");
  			$("span:eq(0)").css("display","none");
  		}else if($(this).val().match(/^1[3|4|5|8][0-9]{9}$/)){
  			$(".phonenum").html("");
  			$("span:eq(0)").css("display","block");
  			
  		}else{
  			$(".phonenum").html("请输入正确的手机号码");
  			$("span:eq(0)").css("display","none");
  		}
  	});
  	
  	
  	$(".checktxt").blur(function(){
  		if($(this).val()==""){
  			$(".checknum").html("验证码不能为空");
  		}else{
  			$(".checknum").html("");
  			
  		}
  	});
  	
  	$(".one:eq(1)").focus(function(){
  		if($(this).val()!=""){
  			$(".paswdone").html("");
  		}else{
  			$(".paswdone").html("请输入密码");
  		}
  	});
  	$(".one:eq(1)").blur(function(){
  		if($(this).val()==""){
  			$(".paswdone").html("密码不能为空");
  			$("span:eq(1)").css("display","none");
  		}else if($(this).val().length>=6){
  			$(".paswdone").html("");
  			$("span:eq(1)").css("display","block");
  		}else{
  			$(".paswdone").html("至少输入六位以上密码");
  			$("span:eq(1)").css("display","none");
  		}
  	});
  
	
	$(".one:eq(2)").focus(function(){
  		if($(this).val()!=""){
  			$(".paswdtwo").html("");
  		}else{
  			$(".paswdtwo").html("请输入密码");
  		}
  	});
  	$(".one:eq(2)").blur(function(){
  		if($(this).val()==""){
  			$(".paswdtwo").html("不能为空");
  			$("span:eq(2)").css("display","none");
  		}else if($(this).val()==$(".one:eq(1)").val()){
  			$(".paswdtwo").html("");
  			$("span:eq(2)").css("display","block");
  			
  		}else{
  			$(".paswdtwo").html("两次密码不一致");
  			$("span:eq(2)").css("display","none");
  		}
  	});
	
	var arr=[];
	$(".subbtn").bind("click",function(){	
		
		if($("span").css("display")=="block" && $(":checked").prop("checked")==true){
			$phoneNum = $(".one:eq(0)").val();
			$pasWd = $(".one:eq(1)").val();
			$.cookie.raw = true;	
			$.cookie.json = true;
			
			var jsonText = {"the_phoneNum": $phoneNum,"the_paw": $pasWd};
			arr.push(jsonText);
			$.cookie('user', arr, { expires: 7, path: '/' });
			
			
			
			
			
			$(".regsuccess").css("display","block");
			var timer = null;
			var count = 5;
			timer = setInterval(function(){
				if(count>0){
					$(".jump").html(count--);
				}else{
					$(".regsuccess").css("display","none");
					window.location.href = "login.html";
				}				
			},1000);
			
		}else{
			$("this").prop("disabled",false);
		}
		
		
		
		
	})
	
	
	
	
	
	
})
