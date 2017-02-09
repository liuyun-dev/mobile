var dw = 750;
function resize(){
	var w = document.documentElement.clientWidth;
	console.log(w)
    document.documentElement.style.fontSize= w/dw*100+"px";
}
resize();
window.addEventListener("resize",resize)
