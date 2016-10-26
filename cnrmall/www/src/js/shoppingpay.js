$(function(){
	$.cookie.raw = true;
	$.cookie.json = true;
	$obj = $.cookie("car");
	console.log($obj);

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
		console.log($obj[i].the_count);

		var count = $obj[i].the_count;
		var _i = i;
		$(".down").on("click",function(){
			var ind=$(this).parent().parent().index();
			console.log(ind);
		})
		//$(".down").eq(i).bind("click",function(){
		//	count--;
		//	if(count<=0){
		//		alert("不能再减了");
		//		count = 1;
		//	}
		//	$(".totalnum").eq(i).html(count);
        //
		//});
		$(".up").eq(i).bind("click",function(){
			count++;
			if(count>10){
				alert("最多十件");
				count = 10;
			}
			$(".totalnum").eq(_i).html(count);
		});


		/*
		$(".up").eq(i).bind("click",function(){
			$obj[i].the_count++;
			if($obj[i].the_count > 10){
				alert("最多十件");
				$obj[i].the_count = 10
			}
			$(".totalnum").eq(i).html($obj[i].the_count);
		});
		*/



		/*
		var price = $obj.the_price;
		$(".money span").html("￥"+price*$obj[i].the_count);

		$(".delete").eq(i).click(function(){
			$(this).parent().parent().remove();
		});
		*/
	}
	$(".del").click(function(){
		$("tr:not(:first)").remove();
	});
/*
	$(".totalnum").html($obj.the_count);
	$(".down").bind("click",function(){
		$obj.the_count--;
		if($obj.the_count<=0){
			alert("不能再减了");
			$obj[0].the_count = 1;
		}
		$(".totalnum").html($obj.the_count);
	});
	$(".up").bind("click",function(){
		$obj.the_count++;
		if($obj.the_count > 10){
			alert("最多十件");
			$obj.the_count = 10
		}
		$(".totalnum").html($obj.the_count);
	});
	var price = $obj.the_price;
	$(".money span").html("￥"+price*$obj.the_count);

	$(".delete").click(function(){
		$(this).parent().parent().remove();
	});
	$(".del").click(function(){
		$("tr:not(:first)").remove();
	});
	*/



})
