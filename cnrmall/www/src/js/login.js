$(function(){
	$(".method li").click(function(){
		var methindex = $(".method li").index(this);
		$(this).removeClass("bgcolor").siblings().addClass("bgcolor");
		$("form").eq(methindex).css("display","block").siblings().css("display","none");
	});
})