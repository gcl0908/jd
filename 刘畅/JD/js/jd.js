$(function(){
	
	
$(".top_navrg li").eq(2).hover(function(){
		$(this).toggleClass("ys");
		$(".erweima").fadeIn();
},function(){
	
	$(".erweima").fadeOut();
	
});
var n=0;

var timer=null;

//.鼠标放在原点上当前的变紫色，其他的都移除紫色

$(".mainbanner .dot li").hover(function(){
	
	$(this).css("background-color","#000000").siblings().css("background-color","")
	
	 var i=$(this).index();
	   n=i;
	
	$(".mainbanner .pic li").eq(i).show().siblings().hide();
});
//定时器

timer=setInterval(lunbo,2000)
//自动播放
     function lunbo(){
     	 n++;
     	 
     	 if(n==4){
     	 	
            n=0
     	 }
      
	$(".mainbanner .dot li").eq(n).addClass(".banner zise").siblings().removeClass(".banner zise");
    $(".mainbanner .pic li").eq(n).show().siblings().hide(); 	
     };

   //.当前的鼠标移开后，继续当前的位置，自动轮播
  //.当鼠标放在原点或者是图片的时候，定时器停止，离开定时器继续

$(".mainbanner").hover(function(){
	clearInterval(timer)
    $(".jt").fadeIn()
},function(){
	
	 timer=setInterval(lunbo,2000)
	
	  $(".jt").fadeOut()
	
});

			/*左右动画*/
			/*右边*/

$("#li01").click(function(){
	n--;
	if(n==-1){
		
		n==3;
	}
	
	$(".mainbanner .dot li").eq(n).addClass(".banner zise").siblings().removeClass(".banner zise");
    $(".mainbanner .pic li").eq(n).show().siblings().hide(); 	
	
});


$("#li02").click(function(){
	n++;
	if(n==4){
		
		n==0;
	}
	
	$(".mainbanner .dot li").eq(n).addClass(".banner zise").siblings().removeClass(".banner zise");
    $(".mainbanner .pic li").eq(n).show().siblings().hide(); 	
	
});




//list列表

$(".list li").hover(function(){
	
 $(this).css("background-color","#FFFFFF").siblings().css("background-color","");
 $(this).children().css("color","#000000");
  $(this).siblings().children().css("color","");

 	
 	var i=$(this).index();
 	
 	$("#list_menu").show();
 	
	$("#list_menu .list_menu01").eq(i).show().siblings().hide();
	
});


$("#Tie").mouseleave(function(){
	
$("#list_menu").hide();

$(".list li").css("background-color","");

	  $(".list li").siblings().children().css("color","");
	  
});







//右侧选项卡
$(".dian li").mouseenter(function(){
	
	$(this).css("background-color","#F5E41A").siblings().css("background-color","")
		 var a=$(this).index();

	$(".rightlb div").eq(a).show().siblings("div").hide();
	
});
//热卖选项卡
var s=null;
 $(".xuankyx li").click(function(){
 	s=$(this).index()
 	$(".box div").eq(s).show().siblings().hide();
 });
 
 
 
$(".right_bxo05_xk li").eq(0).click(function(){
	
	$(".right_bxo05_img div").eq(0).show().siblings().hide();
	
	
});
 
 $(".right_bxo05_xk li").eq(1).click(function(){
	
	$(".right_bxo05_img div").eq(1).show().siblings().hide();
	
	
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
$(".tabyx li").click(function(){

$(this).addClass(".tabyx .bg").siblings().removeClass(".tabyx .bg")	

var i=$(this).index();
$("#box030 div").eq(i).show().siblings().hide()
	
});

//返回顶部

$(window).scroll(function(){
				//$(document).scrollTop()文档
			//var docT=$("body").scrollTop();
			var docT=$(document).scrollTop();
				console.log(docT);
				//2.显示
				if(docT >= 300){
	           $("#bgTop").fadeIn();
		
				}
				else{
					$("#bgTop").fadeOut();
				}
				
			});
					//3.点击返回顶部
				$("#bgTop").click(function(){
					
					$("body").animate({
						scrollTop:0
					},1000);
				})




var scroll=document.getElementById("scroll");

   var ul=document.getElementById("uu");
    var num=0;
    var timer=null;
    timer=setInterval(auto,20);
    function auto(){
       num--;
        num<=-960 ? num =0:num;
        ul.style.left=num+'px';
    };
scroll.onmouseenter=function(){
 
    clearInterval(timer);
};

scroll.onmouseleave=function(){
        timer=setInterval(auto,20);
    };














});
