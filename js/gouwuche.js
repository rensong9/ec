$(document).ready(function(){
			$("#xiala").click(function(){
				$("#geren").toggle(1000);		
			})
		})
		
	function collection(){
	    var flag=confirm("是否加入收藏?");
	    if(flag==true){
	        alert("移入收藏成功!");
	    }
	}
	function minus(num){
	    var prices=document.getElementsByName("price")[num].value;
	    var count=parseInt(document.getElementsByName("amount")[num].value)-1;
	    if(count<1){
	        alert("不能再减了，再减就没有啦！");
	    }
	    else if(count=="NaN"){
	    	alert("为空，再减就没有啦！");
	    }
	    else{
	        document.getElementsByName("amount")[num].value=count;
	        var totals=parseFloat(prices*count);
	        document.getElementById("price"+num).innerHTML="¥" +totals;
	        total();
	    }
	}
	function plus(num){
	    var prices=document.getElementsByName("price")[num].value;
	    var count=parseInt(document.getElementsByName("amount")[num].value)+1;
	    document.getElementsByName("amount")[num].value=count;
	    var totals=parseFloat(prices*count);
	    document.getElementById("price"+num).innerHTML="¥" +totals;
	    total();
	}
	function total(){
	    var prices=document.getElementsByName("price");
	    var count=document.getElementsByName("amount");
	    var sum=0;
	    for(var i=0; i<prices.length;i++){
	       sum+=prices[i].value*count[i].value;
	    }
	    document.getElementById("totalPrice").getElementsByTagName("span")[0].innerHTML="¥" +sum;
	}
	
	function del1(){
	    var delNode  = document.getElementById("del1");
	    delNode.parentNode.removeChild(delNode);
	    total();
	}
	
	function del2(){
	    var delNode = document.getElementById("del2");
	    delNode.parentNode.removeChild(delNode);
	    total();
	}
	
	function del3(){
	    var delNode = document.getElementById("del3");
	    delNode.parentNode.removeChild(delNode);
	    total();
	}
	
	   function total(){
        var price = document.getElementsByName("price");
        var count = document.getElementsByName("amount");
        var sum = 0;
        for(var i = 0; i<price.length;i++){
            sum+=price[i].value*count[i].value;
        }
        document.getElementById("zongjia").innerHTML="¥"+sum.toFixed(2);
       total();
    }
	   function total1(){
	   	var name=document.getElementById("cartList");
        var name1 = name.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.innerHTML;
        var name2 = name.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerHTML;
        var name3 = name.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerHTML;
        var name4 = name.lastElementChild.firstElementChild.lastElementChild.innerHTML;
        alert("您本次购买的商品信息如下：\n\n"+"华为(HUAWEI)P308GB+128GB全网通版(极光色)："+name1+"\n\n华为(HUAWEI)P308GB+128GB全网通版(极光色)："+""+name2+"\n\苹果(APPLE)iPhoneXSMax深空灰色移动联通电信4G手机:  "+name3+"\n\n商店共计："+name4);
	   }
	total();
			