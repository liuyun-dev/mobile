var dw = 750;
function resize(){
    var w = document.documentElement.clientWidth;
    document.documentElement.style.fontSize= w/dw*100+"px";
}
resize();
window.onresize=resize;