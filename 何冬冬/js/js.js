$(function(){
	
	$("#topSee1 li").mouseenter(function(){
		
		var i=$(this).index();
		
		$("#bigBoss").show();
		$("#bigBoss div").eq(i).show().siblings().hide();
	})
	$("#topSee").mouseleave(function(){

		$("#bigBoss").hide();
	});
	
})

/* 轮播左*/

					var n=0;
$(function(){
		$(".circle span").mouseenter(function(){	
		$(this).addClass("red").siblings().removeClass("red");
					n=i=0			
		var i=$(this).index();
		$(".lunboRight li").eq(i).show().siblings().hide();
						});
	 var time=setInterval(move,2000)
			function move(){
					 n++;			
				if(n==4){
					n=0;
					   }
		$(".circle span").eq(n).addClass("red").siblings().removeClass("red");
			$(".lunboRight li").eq(n).show().siblings().hide();	
					}
			});
		
/* 轮播右*/	
var nn=0;
var i=null;
$(function(){
		$(".circle2 span").mouseenter(function(){	
		$(this).addClass("red").siblings().removeClass("red");
				/*	nn=i=0	;*/
			
		i=$(this).index();
		nn=i;
		$(".yuan li").eq(i).show().siblings().hide();
						});
	 var time=setInterval(move,3000)
			function move(){
					 nn++;			
				if(nn==3){
					nn=0;
					   }
		$(".circle2 span").eq(nn).addClass("red").siblings().removeClass("red");
			$(".yuan li").eq(nn).show().siblings().hide();	
					}
			});

/* 左边箭头*/
$("#next").click(function(){
				 nn++;			
			   if(nn==3){
			   	nn=0;
			   }
			 	
			 	
				$(".circle2 span").eq(nn).addClass("red").siblings().removeClass("red");
				$(".yuan li").eq(nn).show().siblings().hide();	
			
				
			})


/* 右边箭头*/
$("#prev").click(function(){
				 nn--;			
			   if(nn==-1){
			   	nn=3;
			   }
			 	
				$(".circle2 span").eq(nn).addClass("red").siblings().removeClass("red");
				$(".yuan li").eq(nn).show().siblings().hide();	

})
	
		/*动画效果*/
	$(function(){
		
		window.scrollReveal= new scrollReveal({
			reset:true
		});
	})
		
	/*特卖选项卡*/		

$(function(){
				$(".temaiL").click(function(){
				$(".zaoTm").show();
				$(".wanTm").hide();
	});
				$(".temaiR").click(function(){
				$(".zaoTm").hide();
				$(".wanTm").show();
	})
})







