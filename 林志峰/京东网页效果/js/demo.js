$(function() {

	$(".navRight_size").mouseenter(function() {
		$(".navRight_img").show();
	});
	$(".navRight_size").mouseleave(function() {
		$(".navRight_img").hide();
	});

	$(".topbox10 li").mouseenter(function() {
		$(this).stop().animate({
			"width": "900px"
		}, 500).siblings("li").stop().animate({
			"width": '100px',
		}, 500);

	})

	$(".topbox10 li").mouseleave(function() {

	})

	/*--选项卡--*/
	$("#banner-top h2").mouseenter(function() {

		$(".banner-left").show();
	})
	$("#banner-top h2").mouseleave(function() {

		$(".banner-left").hide();
		$("#bann_bann div").hide();

	})

	$(".banner-left").mouseenter(function() {

		$(".banner-left").show();
	})
	$(".banner-left").mouseleave(function() {

		$(".banner-left").hide();
	});

	$(".banner-left li").mouseenter(function() {

		var i = $(this).index();
		$("#bann_bann div").eq(i).show().sibling().hide();
	});

	$(".banner-left li").mouseleave(function() {

		var i = $(this).index();
		$("#bann_bann div").eq(i).show().sibling().hide();

	});

	$("#bann_bann div").mouseenter(function() {
		$(".banner-left").show();

	});
	$("#bann_bann div").mouseleave(function() {
		$(".banner-left").hide();
		$("#bann_bann div").hide();

	});

	/* ----  轮播图----*/

	var n = 0;
	var timer = null;
	$(".circle span").mouseenter(function() {
		$(this).addClass("red").siblings().removeClass("red");

		var i = $(this).index();
		n = i;
		$("#nav li").eq(i).show().siblings().hide();

		$("#baner li").eq(i).show().siblings().hide();
		$("#banere li").eq(i).show().siblings().hide();

	});

	timer = setInterval(move, 10000);

	function move() {
		n++;
		if(n == 3) {
			n = 0;
		}
		console.log(n);
		$(".circle span").eq(n).addClass("red").siblings().removeClass("red");
		$("#nav li").eq(n).show().siblings().hide();

		$("#baner li").eq(i).show().siblings().hide();

	}

	$(".banner").hover(function() {
		clearInterval(timer);
		$(".tou a").show();
	}, function() {
		timer = setInterval(move, 10000);

	});

	$("#next").click(function() {
		n++;
		if(n == 3) {
			n = 0;
		}
		console.log(n);
		$(".circle span").eq(n).addClass("red").siblings().removeClass("red");
		$("#nav li").eq(n).show().siblings().hide();

		$("#baner li").eq(i).show().siblings().hide();

	})

	$("#prev").click(function() {
		n--;
		if(n == -1) {
			n = 2;
		}
		console.log(n);
		$(".circle span").eq(n).addClass("red").siblings().removeClass("red");
		$("#nav li").eq(n).show().siblings().hide();

		$("#baner li").eq(i).show().siblings().hide();

	})

})