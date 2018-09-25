<<<<<<< HEAD
// window.onload = function() {
// 	//开启loading....
// 	// img为当前页面需要等待加载的 大图片。。。
// 	bufan.initLoading({
// 		dir:'/img/jia_jby',
// 		imgs:[
			
// 		]
// 	});
// }
=======
window.onload = function(){
resetHtmlFont();
window.onresize = function(){
		resetHtmlFont();
	}
}
function resetHtmlFont(){
  var dw = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = dw/10+'px';
  // console.log(dw);
}
>>>>>>> b5b251229311c59843adaf1511f0c040aa21309e
