
var designWidth = 750;
function resize(){
    var clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (clientWidth/designWidth*100)+"px";
}
resize();
window.onresize = resize;