window.onload=function(){
	function toggle(eles, active) {
		for(var i = eles.length; i--;) {
			eles[i].className = "item"; 
		}
		eles[active].className = "item active";
	}
	
	var aBtn = document.getElementsByClassName("btn");
	var aIem = document.getElementsByClassName("item");
	var nowPage = 0; 
	
	//var prev = document.querySelector(".prev");
	var prev = document.getElementsByClassName("prev");
	var next = document.getElementsByClassName("next");
	
	//console.log(typeof(aBtn));
	//console.log(typeof(prev));
	//console.log(typeof(next));
	console.log(aBtn, aBtn.length);
	console.log(prev, prev.length);
	console.log(next);
	
	
	for(var i = aBtn.length; i--;) {
		
		aBtn[i].tab = i;
		aBtn[i].onclick=function(){
			toggle(aIem,this.tab);
			nowPage=this.tab; 
		}
	}
	
	
	next.onclick=function(){	
		console.log(next);		
		nowPage++;					
		nowPage %= aBtn.length;
		toggle(aIem,nowPage);
	}
	
	prev.onclick=function(){
		nowPage--;
		if(nowPage ==-1){
			nowPage = aBtn.length-1;
		}
		toggle(aIem,nowPage);				
	}
}