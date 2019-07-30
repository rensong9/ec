  $("#nav li span").mouseover(function(){
        alert("ddddd");
    })
    $("#nav li span").mouseout(function(){
        var index = $("#nav li span").index(this);
        $("#nav li:eq("+index+") span~p").hide();
    })
    
$(function(){
	 $("#nav li span").mouseover(function(){
       	$(this).next().show();
    })
    $("#nav li span").mouseout(function(){
       $(this).next().hide();
    })
})
