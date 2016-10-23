$.ajax({
	type:"get",
	url:"smallhead.html",
	success:function(data){
		$("body").prepend(data);
	}
})

$.ajax({
	type:"get",
	url:"smallfooter.html",
	success:function(data){
		$("body").append(data);
	}
})



$(function(){
	
	setTimeout(function(){
		$(".total").on('mouseover',function(){
			$(this).addClass("totalborder").find(".thelist").css("display","block");
		});
		$(".total").on('mouseout',function(){
			$(this).removeClass("totalborder").find(".thelist").css("display","none");
		})
	},0);
})