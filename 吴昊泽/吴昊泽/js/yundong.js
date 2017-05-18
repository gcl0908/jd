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

	var n = i = 0
	var jishi
	$(".diand li").mouseenter(function() {
		$(this).css("background-color", "red").siblings().css("background-color", "")
		var i = $(this).index()
		$(".lunbo li").eq(i).show().siblings().hide()
	})

	jishi = setInterval(www, 4000)

	function www() {
		n++
		if(n == 5) {
			n = 0
		}
		$(".diand li").eq(n).css("background-color", "red").siblings().css("background-color", "")
		$(".lunbo li").eq(n).show().siblings().hide()

	}
	$(".lunbo").hover(function() {
		clearInterval(jishi)

	}, function() {

		jishi = setInterval(www, 4000)
	})
	//轮播结束











var oPic=$('#slider_pic').find('ul');
             var oImg=oPic.find('li');
             var oLen=oImg.length;
             var oLi=oImg.width();
             var prev=$("#prev");
             var next=$("#next");

           oPic.width(oLen*150);//计算总长度
             var iNow=0;
             var iTimer=null;
             prev.click(function(){
                  if(iNow>0){  
                   iNow--;

                  }
                 ClickScroll();
             })
             next.click(function(){
                 if(iNow<oLen-3){ 
                     iNow++
                 }
                 ClickScroll();
             })

             function ClickScroll(){

                

                 oPic.animate({left:-iNow*130})
             }

    















})