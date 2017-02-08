
// banner

var swiper = new Swiper('.banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    effect: 'fade',
    autoplay:3000,
    loop:true
});


// 师资团队

var teacher = $(".teacher");
var teacherBox = $(".teacher-team .box")
teacher.hover(function(){
    $(this).find(".img-box").css({top:45,opacity:1,transition:"all 1s"})
    $(this).find(".introduce").css({display:"block"})
    $(this).find(".t-name").css("opacity",0);
    $(this).find(".t-job").css({opacity:0});
    $(this).find(".t-job-hidden").css({display:"block"})
},function(){
    $(this).find(".img-box").css({top:0,opacity:0,transition:"all 0s"})
    $(this).find(".introduce").css({display:"none"})
    $(this).find(".t-name").css({opacity:1});
    $(this).find(".t-job").css({opacity:1});
    $(this).find(".t-job-hidden").css({display:"none"})
})

// 鼠标滑过选项卡效果
var topBar1 = $(".top-bar1");
HoverSelector(teacherBox,topBar1);

// 鼠标点击选项卡
var curriculumRCon = $(".curriculum-r-con")
var lessItem = $(".less-item");
lessItem.click(function(){
    lessItem.removeClass("active").filter(this).addClass("active")
    curriculumRCon.css({top:-234,transition:"top 0s"}).eq($(this).index()).css({top:0,transition:"top 1.5s"})
})


// 课程体系

 var lis = $(".curriculum-right li:not(li:last-child)");
 var cHidden = $(".c-right-hidden")
lis.hover(function(){
    cHidden.css({display:"none"})
    $(this).find(".c-right-hidden").css({display:"block"}).end().find("img").css({opacity:0}).end().find("h6").css("color","#28B1FF").end().find("h6 span ").css({color:"#76E978"})
},function(){
    $(this).find(".c-right-hidden").css({display:"none"}).end().find("img").css({opacity:1}).end().find("h6").css("color","#999").end().find("h6 span ").css({color:"#999"})
})



// 就业展示
var topBar2 = $(".top-bar2");
var employmentBox = $(".employment .box");
HoverSelector(employmentBox,topBar2);




// 360度全方位实训制度保障
var  gLis = $(".guarantee-con li");

gLis.hover(function(){
    gLis.removeClass("hot").filter(this).addClass("hot")
},function(){})

// 学员作品
var studentBox = $(".student-works .box");
var topBar3 = $(".top-bar3");
HoverSelector(studentBox,topBar3)

//优逸视频

var videoBox = $(".video .box");
var topBar4 = $(".top-bar4");
HoverSelector(videoBox,topBar4)

//优逸新闻

var newsBox = $(".news .box");
var topBar5 = $(".top-bar5");
HoverSelector(newsBox,topBar5)


// 优逸新闻轮播图


var newsBox1 = $(".news .box:nth-child(1)");
var newsBox2 = $(".news .box:nth-child(2)");
var newsBox3 = $(".news .box:nth-child(3)");
var newsBox4 = $(".news .box:nth-child(4)");

var nLis1 = $(".number li",newsBox1);
var lunLis1 = $(".lunbo>ul>li",newsBox1);
LunBo(lunLis1,nLis1);
var nLis2 = $(".number li",newsBox2);
var lunLis2 = $(".lunbo>ul>li",newsBox2);
LunBo(lunLis2,nLis2);
var nLis3 = $(".number li",newsBox3);
var lunLis3 = $(".lunbo>ul>li",newsBox3);
LunBo(lunLis3,nLis3);
var nLis4 = $(".number li",newsBox4);
var lunLis4 = $(".lunbo>ul>li",newsBox4);
LunBo(lunLis4,nLis4);
function LunBo(lunLis,nLis){
    var t =setInterval(move,1000);
    var num = 0;
    function move(){
        num++;
        if(num == 3 ){
            num = 0;
        }
        lunLis.css({display:"none"}).eq(num).css({display:"block"})
        nLis.removeClass("active").eq(num).addClass("active")
    }
    nLis.hover(function(){
        clearInterval(t)
        var index = $(this).index();
        lunLis.css({display:"none"}).eq(index).css({display:"block"})
        nLis.removeClass("active").eq(index).addClass("active")
        num = index;
    },function(){
        t =setInterval(move,1000)
    })
}


//热门问题
var questionBox = $(".hot-question .box")
var topBar6 = $(".top-bar6")
HoverSelector(questionBox,topBar6)



// 热门问题拖拽效果

// var progressBtn = $(".progress-btn");
// var questionBox = $(".hot-question .box");



//荣誉证书
var certificateBox = $(".certificate .box")
var topBar7 = $(".top-bar7")
HoverSelector(certificateBox,topBar7)

//合作企业
var enterpriseBox = $(".enterprise .box")
var topBar8 = $(".top-bar8")
HoverSelector(enterpriseBox,topBar8)



// 选项卡封装
function HoverSelector(box,item){
    item.hover(function(){
        item.removeClass("active").filter(this).addClass("active");
        var index = $(this).index()/2;
        box.css({display:"none"});
        box.eq(index).css({display:"block"})
    },function(){})
}