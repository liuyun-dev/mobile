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