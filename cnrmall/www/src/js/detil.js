$(function(){
    var tv={

        eveBind:function(){
            //放大镜
            $(".jqzoom").imagezoom({xzoom:300,yzoom:200});

            // 获取页面的主要元素
            var $focus = $('#focus');
            var $midPic = $('#midpic');
            var $smallPic = $('#smallpic');
            var $spSrc = $('#smallpic').find('img').attr('src');

            var $li = $smallPic.children('li');
            var index = 0; // 显示图片的初始化索引

            // 左箭头的点击事件
            $focus.on('click', 'a.prev', function () {
                index--;

                slider($(this));
            })

            // 右箭头的点击事件
            $focus.on('click', 'a.next', function () {
                index++;

                slider($(this));
            })

            function slider (_this) {

                if (index == 0){
                    _this.attr('class','prev-unable').next().attr('class','next');
                } else if (index > $li.length - 6){
                    _this.attr('class','next-unable').prev().attr('class','prev');
                }

                $smallPic.animate({marginLeft: '-'+$li.width()*index});
            }

            // 通过小图带动大图的切换
            $smallPic.on('mouseenter', 'li', function () {
                $(this).addClass('select').siblings().removeClass('select');
                $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
                $(".jqzoom").attr('rel',$(this).find("img").attr("big"));

            })



            //数量
            var $reduce=$(".sp1");
            var $add=$(".sp3");
            var $num=$(".sp2");
            var num=$num.html();

            $reduce.on("click",function(){
                if(num==1){
                    alert('不能再减少了！');
                    return;
                }
                num--;
                $num.html(num);
            })

            $add.on("click",function(){
                num++;
                $num.html(num);
            })



            //选择省份
            var s_p=$('#s_p');
            var s_sel=$('.s_sel');
            var s_city=$('.s_city');
            var s_1=$('#s_1');
            var ShengMenu=$(".ShengMenu");
            var temp=false,temp1=false;
            s_sel.on('click',function(){
                if(temp==false){
                    s_city.css({'display':'block'});
                    temp=true;
                }else{
                    s_city.css({'display':'none'});
                    temp=false;
                }
            });
            s_1.on('click',function(){
                if(temp1==false){
                    ShengMenu.css({'display':'block'});
                    temp1=true;
                }else{
                    ShengMenu.css({'display':'none'});
                    temp1=false;
                }
            })


            //share
            var add=$('.add');
            var share=$('.share');
            add.on('mouseover',function(){
                share.css({'display':'block'});
            }).on('mouseout',function(){
                share.css({'display':'none'});
            })

            //切换
            var list3_top=$('.list3_top');
            var $ul3=$('.list3_top ul');
            var $lous=$('.lou');
            $ul3.on("click", "li", function () {
                $(this).addClass("native").siblings("li").removeClass("native");
                var dg=$lous.eq($(this).index()).offset().top;
                $("html,body").animate({scrollTop:dg});
            })

            //totop
           var totop=$('.totop');
            $(window).on("scroll", function (){
                var scr = $(window).scrollTop();
                //console.log(scr);
                //console.log($(".bottomone").offset().top);
                totop.animate({top:scr+200},10);
                if(scr >= 200 && scr < $(".bottomone").offset().top-200){
                    totop.show();
                } else {
                    totop.hide();
                }

            })
            totop.on("click", function () {
               $("html,body").animate({scrollTop:0});
            })
        },
        init:function(){
            this.eveBind();
        }
    }
    tv.init();
    
    
    
    
	var arr= [];
    $(".btn2").bind("click",function(){
		var oLength = $(".sp2").html();
		for(var i=0;i<oLength;i++){
			$(".btn2").append("<img class='flyto' src='../img/117443_4.jpg' />");  
		}
		$(this).find(".flyto").animate({"left":"170px","top":"-330px","width":0,"height":0},1000);
    	$(".listnum").html($(".flyto").length);
    	
   	
    	
    	$descript = $(".goodsname").html();
    	$price = $(".goodsprice").html();
    	$goodsnum = $(".sp2").html();
		$.cookie.raw = true;
    	$.cookie.json = true;
    	
    	var jsonText = {"the_dsc": $descript,"the_count": $goodsnum,"the_price": $price};
        arr.push(jsonText);
    	$.cookie("car", arr, { expires: 7, path: "/" });
   	
    });

})