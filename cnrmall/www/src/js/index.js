$(function(){
	$(".willhid").mouseover(function(){
		$(this).css("display","none").next(".willshow").css("display","block");
		$(this).siblings().css("display","block").next(".willshow").css("display","none");
	})
	
	
	
	var len = $(".actban-small > li").length;
    var index = 0;  //图片序号
    var adTimer=null;
    $(".actban-small li").mouseover(function() {
        index = $(".actban-small li").index(this);  //获取鼠标悬浮 li 的index
        showImg(index);
    });
    //滑入停止动画，滑出开始动画.
    $(".catban").hover(function() {
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            showImg(index)
            index++;
            if (index == len) {       //最后一张图片之后，转到第一张
                index = 0;
            }
        }, 1500);
    }).trigger("mouseleave");
    
    
    
    
    function showImg(index) {
        var adHeight = $(".actban-big").height();
        $(".actban-big").stop(true, false).animate({
            "top": -adHeight * index + "px"    //改变 marginTop 属性的值达到轮播的效果
        }, 100);
        $(".actban-small li div").css("background-color","#C0C0C0")
            .eq(index).css("background-color","#ED4552")
    }
	
	
	
	$(".memtabone li").click(function(){
		var count = $(".memtabone li").index(this);
		$(this).css("border","2px solid #ED4552").siblings().css("border","2px solid #f8f4f2");
		$(".memtabtwo li").eq(count).css("display","block").siblings().css("display","none");
	})
	
	
	
	
	$(".stonahid").mouseover(function(){
		var stoindex = $(".stonahid").index(this);
		$(".storedetail li").eq(stoindex).css("display","block").siblings().css("display","none");
		$(this).css("display","none").next(".stonashow").css("display","block");
		$(this).siblings().css("display","block").next(".stonashow").css("display","none");
	})
	
	

	$(".ulshadow li").mouseover(function(){
		var shaindex = $(".ulshadow li").index(this);
		$(this).find(".lishadow").css("display","none").parent().siblings().find(".lishadow").css("display","block");
	})
	$(".ulshadow").mouseout(function(){
		$(this).find(".lishadow").css("display","none");	
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})







	
    


