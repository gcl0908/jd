$(function() {
	$(".daoh li a").mouseenter(function() {
		$(this).css("color", "red")
	})
	$(".daoh li a").mouseleave(function() {
		$(this).css("color", "")
	})

	$(".daoh li").eq(3).mouseenter(function() {
		$(".wode").show()
		$(".daoh li").eq(3).css("background-color", 'white')
	})

	$(".daoh li").eq(3).mouseleave(function() {
		$(".wode").hide()
		$(".daoh li").eq(3).css("background-color", '')
	})

	$(".daoh li").eq(16).mouseenter(function() {
		$(".erwei").show()
		$(".daoh li").eq(16).css({
			"background-color": 'white',
			"background": 'url(img/17.png) no-repeat 0px -20px'
		})

	})

	$(".daoh li").eq(16).mouseleave(function() {
		$(".erwei").hide()
		$(".daoh li").eq(16).css({
			"background-color": '',
			"background": 'url(img/17.png) no-repeat 0px 5px'
		})
	})

	$(".daoh li").eq(17).mouseenter(function() {
		$(".erwei2").show()
		$(".daoh li").eq(17).css("background-color", 'white')
	})

	$(".daoh li").eq(17).mouseleave(function() {
		$(".erwei2").hide()
		$(".daoh li").eq(17).css("background-color", '')
	})
	$(".daoh li").eq(18).mouseenter(function() {
		$(".kefu1").show()
		$(".daoh li").eq(18).css("background-color", 'white')
	})

	$(".daoh li").eq(18).mouseleave(function() {
		$(".kefu1").hide()
		$(".daoh li").eq(18).css("background-color", '')
	})

	$(".daoh li").eq(33).mouseenter(function() {
		$(".daohang").show()
		$(".daoh li").eq(33).css("background-color", 'white')
	})

	$(".daoh li").eq(33).mouseleave(function() {
		$(".daohang").hide()
		$(".daoh li").eq(33).css("background-color", '')
	})

	$(".daohang").mouseenter(function() {
		$(".daohang").show()
		$(".daoh li").eq(33).css("background-color", 'white')
	})

	$(".daohang").mouseleave(function() {
		$(".daohang").hide()
		$(".daoh li").eq(33).css("background-color", '')
	})

	$(".dizi li").mouseenter(function() {
		$(".dizi2").show()
		$(".daoh li").eq(33).css("background-color", 'white')
	})

	$(".dizi li").mouseleave(function() {
		$(".dizi2").hide()
		$(".daoh li").eq(33).css("background-color", '')
	})

	$(".logo3 li").mouseenter(function() {
		$(".logo3a").show()

	})

	$(".logo3 li").mouseleave(function() {
		$(".logo3a").hide()

	})

	$(".gouwc1").mouseenter(function() {
		$(".gouwc2").show()

	})

	$(".gouwc1").mouseleave(function() {
		$(".gouwc2").hide()

	})

	$(".gouwc2").mouseenter(function() {
		$(".gouwc2").show()

	})

	$(".gouwc2").mouseleave(function() {
		$(".gouwc2").hide()

	})

	$(".lei3a").mouseenter(function() {
		$(".lei3b").show()

	})

	$(".lei3a").mouseleave(function() {
		$(".lei3b").hide()

	})

	//轮播

	


})



/*层级轮播*/
 		var n=0
		var zIndex=0;
		var dd=null
			$("ol li").mouseenter(function(){
				$(this).addClass("active").siblings().removeClass("active");
				zIndex++;
			var i=$(this).index();
			n=i
			/*对应的内容显示*/
			$(".aa li").eq(i).css({
				"z-index":zIndex,
				"left":'650px'
			}).stop().animate({
				"left":0,
			},800);
			
			})
		dd=setInterval(time,2000)
		function time(){
			n++
			if(n==8){n=0}
			$("ol li").eq(n).addClass("active").siblings().removeClass("active");
				zIndex++;
			/*让对应的内容显示*/
			$(".aa li").eq(n).css({
				"z-index":zIndex,
				"left":'650px'
			}).stop().animate({
				"left":0,
			},800);
		}
		$(".banner_Lb").hover(function(){
			clearInterval(ii)
		},function(){
			dd=	setInterval(time,2000)
		})
		


/*层级轮播结束*/







$(function() {

				$(".shou_fqyx li").mouseenter(function() {
					$(this).stop().animate({ "width": "480px" }, 500).siblings("li").stop().animate({ "width": '100px', }, 500);
                          
				})

				$(".shou_fqyx li").mouseleave(function() {
				

				})

			});
        
/*-------------------------------------------------------------------------------------------------------------------------*/
$(function(){
	
	$(".tab li").mouseenter(function(){
	$(this).addClass("ys").siblings().removeClass("ys");
	var i=$(this).index();
	$(".products div").eq(i).show().siblings().hide();
})
	
	
})

