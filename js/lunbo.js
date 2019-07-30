$(function(){
	var t;
	var index=0;
	t=setInterval(play,3000)//计时器
	function play(){
		index++;
		if(index>3){
			index=0;
		}
		$("#lb img").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
})
