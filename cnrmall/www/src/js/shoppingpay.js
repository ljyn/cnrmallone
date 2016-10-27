$(function(){
	$.cookie.raw = true;
	$.cookie.json = true;
	$obj = $.cookie("car");
	//console.log($obj);
	function change(obj){
		var price = 0;
		for(var i = 0;i<obj.length;i++){
			price += $obj[i].the_price * $obj[i].the_count;
			$(".money span").html("￥"+price);
		}
	}
	var price = 0;
	for(var i=0;i<$obj.length;i++){
		//console.log($obj[i]);

		$("tbody").append("<tr class='buylist'>"+
			"<td class='one'><a href='detail.html'><img src='../img/117443_4.jpg' /></a></td>"+
			"<td><a href='detail.html'>"+$obj[i].the_dsc+" </a></td>"+
			"<td>"+
			"<img src='../img/t_45.gif' style='display: inline-block;cursor: pointer;' class='down' />"+
			"<span style='display: inline-block;width: 30px;height: 20px;border: 1px solid #666;' class='totalnum'/></span>"+
			"<img src='../img/t_46.gif' style='display: inline-block;cursor: pointer;' class='up'/>"+
			"</td>"+
			"<td>"+$obj[i].the_price+"</td>"+
			"<td>￥0.00</td>"+
			"<td><a href='javascript:;' class='delete'>删除</a></td>"+
			"</tr>"
		);
		$(".totalnum").eq(i).html($obj[i].the_count);
		price += $obj[i].the_price * $obj[i].the_count;
		$(".money span").html("￥"+price);
	}

	$(".delete").on("click",function(){
		var i = $(".delete").index(this);
		//console.log(i);
		$(this).parent().parent().remove();
		var arr = $obj.splice(i,1);
		$.cookie("car", $obj, { expires: 7, path: "/" });
		//change($obj);
		window.location.reload();
	});


	$(".down").on("click",function(){
		var ind=$(this).parent().parent().index();
		//console.log(ind);
		var count = $(".totalnum").eq(ind-1).html();
		//console.log(count);
		count--;
		if(count<=0){
			alert("不能再减了");
			count = 1;
		}
		$(".totalnum").eq(ind-1).html(count);
		$obj[ind-1].the_count = count;
		//console.log($obj[ind-1].the_count);
		$.cookie("car", $obj, { expires: 7, path: "/" });
		//price += $obj[i].the_price * $obj[i].the_count;
		//$(".money span").html("￥"+price);
		change($obj);
		//window.location.reload();
	});


	$(".up").bind("click",function(){
		var ind=$(this).parent().parent().index();
		var count = $(".totalnum").eq(ind-1).html();
		count++;
		if(count>10){
			alert("最多十件");
			count = 10;
		}
		$(".totalnum").eq(ind-1).html(count);
		$obj[ind-1].the_count = count;
		//console.log($obj[ind-1].the_count);
		$.cookie("car", $obj, { expires: 7, path: "/" });
		change($obj);
		//window.location.reload();
	});

	$(".del").on("click",function(){
		$("tr:not(:first)").remove();
		var num = $obj.length;
		//console.log(num);
		$obj.splice(0,num);
		$.cookie("car", $obj, { expires: 7, path: "/" });
		window.location.reload();
	});

})
