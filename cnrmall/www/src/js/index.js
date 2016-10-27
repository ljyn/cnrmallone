$(function(){
	$(".willhid").mouseover(function(){
		$(this).css("display","none").next(".willshow").css("display","block");
		$(this).siblings().css("display","block").next(".willshow").css("display","none");
	})
	

    //首页轮播图
    var lis1= $('.ul_one li');

    var m=0;
    var timer=null;
    timer=setInterval(function(){
        shh(m);
        m++;
    },3000)


    $('.ul_two').on('mouseover','li',function(){
        lis1.eq(m%5).show().siblings('li').hide();
        var ind=$(this).index();
         clearInterval(timer);
        $(this).css({'background':'red'}).siblings('li').css({'background':'gray'});
        $('.ul_one li').eq(ind).show().siblings('li').hide();
        $('.ul_one a').eq(ind).animate({width:1400,height:382},3000).siblings('a').css({width:1500,height:420});
        m=ind;

    }).on('mouseout','li',function(){
         timer=setInterval(function(){
             m++;
             shh(m);
        },3000)
    })

    function shh(m){
        $('.ul_one a').css({width:1500,height:420});
        lis1.eq(m%5).show().siblings('li').hide();
        $(".ul_two li").eq(m%5).css({'background':'red'}).siblings('li').css({'background':'gray'});

        $('.ul_one a').eq(m%5).animate({width:1400,height:382},3000).siblings('a').css({width:1500,height:420});

    }

    //轮播切换
    var j=0;
    setInterval(function(){
        $('.banleft-bottom img').eq(j).show().siblings('img').hide();
        j++;
        if(j>=2){
            j=0;
        }
    },3000)


    //正在热卖
    //console.log($('.tvtab-bottom').width());
    $('.tvtab_top').on('mouseover','span',function(){
        $(this).addClass('active1').siblings("span").removeClass('active1');
        $('.tvtab_bottom>div').eq($(this).index()).addClass('active2').siblings('div').removeClass('active2');
    })
    $('.to_left').on('click',function(){
        $('.tvtab_bottom .active2 ul').animate({left:2});
    })
    $('.to_right').on('click',function(){
        $('.tvtab_bottom .active2 ul').animate({left:-385});
    })



    //小轮播图
	var len = $(".actban-small > li").length;
    var index = 0;  //图片序号
    var adTimer=null;
    $(".actban-small li").mouseover(function() {
        index = $(".actban-small li").index(this);  //获取鼠标悬浮 li 的index
        showImg(index);
    });
    //滑入停止动画，滑出开始动画.
    $(".actban").hover(function() {
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            showImg(index);
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

    //灰色地带
	$('.hotshop-bottom dd').on('mouseover',function(){
        $(this).css({'background':'gray'});
        $('.hotshop-bottom dd a').css({color:'white'});
    }).on('mouseout',function(){
        $('.hotshop-bottom dd').css({'background':'white',color:'black'});
    })
	
	$(".memtabone li").click(function(){
		var count = $(".memtabone li").index(this);
		$(this).css("border","2px solid #ED4552").siblings().css("border","2px solid #f8f4f2");
		$(".memtabtwo li").eq(count).css("display","block").siblings().css("display","none");
	})





    $(".updown li").mouseover(function(){
        $(this).stop().animate({height:"50px"},500).siblings().stop().animate({height:"20px"},500);
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

    $.cookie.raw = true;
    $.cookie.json = true;
    if($.cookie("userNew") != undefined){
        $obj =$.cookie("userNew");
        // $obj =JSON.stringfy($.cookie("userNew"));
        $(".maintop-righttwo").html("");
        $span = $("<span></span>");
        $span.html("您好 "+$obj.phone);
        $(".maintop-righttwo").append($span);

        $span = $("<span class='quit'></span>");
        $(".maintop-righttwo").append($span);
        $a = $("<a href='#'></a>");
        $a.html("退出");
        $(".quit").append($a);
    }

    $(".maintop-righttwo span:eq(1)").click(function(){
        $(".maintop-righttwo span").remove();
        $(".maintop-righttwo").html("欢迎来到央广购物！["+
            "<a href='html/login.html'>"+"登录"+"</a>"+
            "丨"+
            "<a href='html/register.html'>"+"免费注册"+"</a>"+
            "]")
        return false;
    })
	
	

	
	
	
	
	
})







	
    


