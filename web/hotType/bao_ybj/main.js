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
