$(function(){
	$(".activeself").mouseover(function(){
		$(this).find(".linkone").removeClass("link-one").addClass("link-two");
		$(this).siblings().find(".linkone").removeClass("link-two").addClass("link-one");
		$(this).css({backgroundColor:"#666"});
		$(this).siblings().css({backgroundColor:"#f5e1c6"});
		$(this).find(".hid").css("display","block");
		$(this).siblings().find(".hid").css("display","none");
	});
	
	$(".activeself").mouseout(function(){
		$(this).find(".linkone").removeClass("link-two").addClass("link-one");
		$(this).css({backgroundColor:"#f5e1c6"});
		$(this).find(".hid").css("display","none");
	});
	
	
	
	
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme",
		"品牌旗舰店",
		"韩束",
		"爱乐仕",
		"三光云彩钢化玻璃保鲜10件套"
	];
	$(".searchtxt").autocomplete({
		source: availableTags
	});


	
	
	
	
})









