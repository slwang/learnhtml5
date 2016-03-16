var mydiv=document.getElementById('test');
mydiv.onclick=function(){
	var result = getm(1);
	console.log("这是一个断点："+result);
	console.error("这是一个断点："+result);
	console.info("这是一个断点："+result);
	alert(result);
	localStorage.a="test";

}
function getm(a){
	return ++a;
}

$.ajax({
	
})