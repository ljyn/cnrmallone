$(function(){
	$(".activeself").mouseover(function(){
		$(this).find(".linkone").removeClass("link-one").addClass("link-two");
		$(this).siblings().find(".linkone").removeClass("link-two").addClass("link-one");
		$(this).css({backgroundColor:"#666"});
		$(this).siblings().css({backgroundColor:"#f5e1c6"});
		$(this).find(".hid").css("display","block");
		$(this).siblings().find(".hid").css("display","none");
	})
	
	$(".activeself").mouseout(function(){
		$(this).find(".linkone").removeClass("link-two").addClass("link-one");
		$(this).css({backgroundColor:"#f5e1c6"});
		$(this).find(".hid").css("display","none");
	})
})









