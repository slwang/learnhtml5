var mydiv=document.getElementById('test');
mydiv.onclick=function(){
	getm(function(data){
		alert(data);
	});

}
function getm(fn){
	$.ajax({
		url:'data.php',
		type:'get',
		success:function(data){
			console.log(data);
			fn(data);
		}
	})
}

