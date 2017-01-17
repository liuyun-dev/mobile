// news 轮播
    var news = $(".news-list");
    var next = 0;
    var now = 0;
    var z=2;
    setInterval(newMove,3500)
    function newMove(){
        next++;
        var h = news.height()
        if(next>=news.length){
            next=0;
        }
        news.eq(next).css({marginTop:h,zIndex:z++}).animate({marginTop:0}).end().eq(now).animate({marginTop:-h});
        now = next;
    }
// news end

// 倒计时
var hour = $("#hour");
var minute = $("#minute");
var second = $("#second");
var end = new Date();
end.setHours(18);
end.setMinutes(0);
end.setSeconds(0);
setInterval(moveT,1000);
function moveT(){
    var now = new Date();
    var time = end.getTime()-now.getTime();
    var hours = Math.floor(time/(1000*60*60));
    var mins = Math.floor(time/(1000*60))%60;
    var sces=Math.round(time/1000)%60;
    hour.html(hours<10?"0"+hours:hours)
    minute.html(mins<10?"0"+mins:mins)
    second[0].innerHTML=sces<10?"0"+sces:sces
}
moveT();


var dw = 750;
function resize(){
    var w = document.documentElement.clientWidth;
    console.log(w)
    document.documentElement.style.fontSize= w/dw*100+"px";
}
resize();
window.onresize=resize;