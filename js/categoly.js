$(document).ready(function(){




  /* sns */
  $(".head_top ul li:first-child").hover(function(){ //주메뉴영역전체에 오버시
    $(this).find("img").attr("src","image/sns11.png")
  },function(){
    $(this).find("img").attr("src","image/sns1.png");
  });
  $(".head_top ul li:nth-child(2)").hover(function(){ //주메뉴영역전체에 오버시
    $(this).find("img").attr("src","image/sns22.png");
  },function(){
    $(this).find("img").attr("src","image/sns2.png");
  });
  $(".head_top ul li:last-child").hover(function(){ //주메뉴영역전체에 오버시
    $(this).find("img").attr("src","image/sns33.png");
  },function(){
    $(this).find("img").attr("src","image/sns3.png");
  });


  /* 주메뉴 */
  $(".gnbMenu").hover(function(){ //주메뉴영역전체에 오버시
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });


  /* 메인비쥬얼 */
  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx=0; 
  let idx=0; 
  let img_n = $img.length; 


  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx){

  if(oldidx != idx){ 

    $btn.eq(oldidx).removeClass("active");
    $btn.eq(idx).addClass("active");
    $img.eq(oldidx).stop().fadeOut("300");
    $img.eq(idx).stop().fadeIn("300");

  }
  oldidx = idx;

  };

  //자동함수 생성
  function changeAuto(){

    idx++;
    if(idx>img_n-1){
      idx=0;
    };
    changeImg(idx);

  };

  timer=setInterval(changeAuto,4000);

//하단버튼 클릭시.....
$btn.click(function(){

  clearInterval(timer); 
  idx=$(this).index();
  changeImg(idx);
  timer=setInterval(changeAuto,4000);

});

//좌우버튼 클릭시.....
$rbtn.click(function(){

  clearInterval(timer);
  idx++;
  if(idx>img_n-1){
    idx=0;
  }
  changeImg(idx);
  timer=setInterval(changeAuto,4000);

});

$lbtn.click(function(){

  clearInterval(timer);
  idx--;
  if(idx<0){
    idx=img_n-1;
  }
  changeImg(idx);
  timer=setInterval(changeAuto,4000);

});


/* section1 브랜드 스토리*/
$(".tab li").click(function(){

  for(i=0;i<4;i++){  
    $(".tab li").eq(i).find("img").attr({"src":"image/brand-menu"+i+".png"}); 
  }

  $(this).find("img").css({"filter":"none"});
  $(this).siblings().find("img").css({"filter":"grayscale(0.8)"});

  $(".i1").removeClass("active").stop();

  let result = $(this).attr("data-alt");
  $(".tabContents>div").removeClass("active").find("img,div").stop().fadeOut("300");
  $("#" + result).addClass("active").find("img,div").stop().fadeIn("300"); 

});


/* section4 공지사항 */
  $(".title").click(function(){

    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle();

    let dataImage = $(this).attr("data-image");
    $(".image img").attr("src",dataImage).hide().fadeIn();

  });


  /* 큌메뉴 */
  $(".quick_menu li").hover(function () {
    qnum = $(this).index()+1;
    $(this).find("a>img").attr({"src":"image//quick_0"+qnum+".png"}).stop(true,true).fadeOut("500");
    $(this).find("a>img").attr({"src":"image/quick_over_0"+qnum+".png"}).stop(true,true).fadeIn("500");
  },function () {
    $(this).find("a>img").attr({"src":"image/quick_over_0"+qnum+".png"}).stop(true,true).fadeOut("500");
    $(this).find("a>img").attr({"src":"image//quick_0"+qnum+".png"}).stop(true,true).fadeIn("500");
  });

  $(window).scroll(function(){ 

    if ($(window).scrollTop() > 1180) {
      let curpos=$(window).scrollTop()+90;
    $(".quick_in").stop().animate({top:curpos});
  }

  });

  $(".topmove").click(function(){
    $("html,body").animate({scrollTop:"0"});
  });


/* 움직이는 이모티콘 */
  $(window).scroll(function(){ 

    if ($(window).scrollTop() > 1600) {
      $(".sct2>img").css({"transform":"rotate(-30deg)","transition":"1s","left":"0"})
  }

  });

  $(window).scroll(function(){ 

    if ($(window).scrollTop() > 3300) {
      $(".sct3>img").css({"top":"-5px","transition":"1s"/* ,"left":"0" */})
  }

  });

  $(window).scroll(function(){ 

    if ($(window).scrollTop() > 3500) {
      $(".sct4>img").css({"top":"53px","transition":"1s","right":"10px"})
  }

  });

  $(window).scroll(function(){ 

    if ($(window).scrollTop() > 4900) {
      $("footer>img").css({"animation":"move infinite 8s linear",})
  }

  });



/* section5 작은 배너 */
  let imgon_w=$(".slideon ul li").width(); 
  let imgon_n=$(".slideon ul li").length;
  let soldidxon=0; 
  let sindexon=0; 

  $(".slideon ul li:last").prependTo(".slideon ul");
  $(".slideon ul").css({left:-imgon_w});

  function slideonImg(sindexon,m){ 

    if(m==0){

      $(".slideon ul").stop(true,true).animate({
        left:"+="+imgon_w+"px"},600,"easeOutCubic",function(){ 
        $(".slideon ul li:last").prependTo(".slideon ul");
        $(".slideon ul").css({left:-imgon_w}); 
        });
      $(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");
      $(".slideon_btn ul li").eq(sindexon).addClass("activeon");

    }else{ 

    $(".slideon ul").stop(true,true).animate({
      left:"-="+imgon_w+"px"},600,"easeOutCubic",function(){ 
      $(".slideon ul li:first").appendTo(".slideon ul");
      $(".slideon ul").css({left:-imgon_w}); 
      });
    $(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");
    $(".slideon_btn ul li").eq(sindexon).addClass("activeon");
  
    }
    soldidxon=sindexon;

  }

  //슬라이드 자동함수 생성
  function slideonAuto(){
    sindexon++;
    if(sindexon==imgon_n){ 
      sindexon=0;
    }
    slideonImg(sindexon,1);
  };

  timeron=setInterval(slideonAuto,4000);

  //좌우버튼 클릭
  $(".nexon").click(function(){

    clearInterval(timeron);
    sindexon++;
    if(sindexon==imgon_n){ 
      sindexon=0;
    }
    slideonImg(sindexon,1);
    timeron=setInterval(slideonAuto,4000);

  });

  $(".preon").click(function(){

    clearInterval(timeron);
    sindexon--;
    if(sindexon<0){ 
      sindexon=imgon_n-1;
    }
    slideonImg(sindexon,0);
    timeron=setInterval(slideonAuto,4000);

  });

  //하단버튼 클릭
  $(".slideon_btn ul li").click(function(){

    clearInterval(timeron);
    sindexon = $(this).index();

    for(let i=1; i <= imgon_n; i++){
      $(".slideon ul li.i"+i).appendTo(".slideon ul");
    }
    $(".slideon ul li:last").prependTo(".slideon ul");
    $(".slideon ul li:last").prependTo(".slideon ul");

    for (let i=1; i<=sindexon+1;i++){
      slideonImg(sindexon,1);
    }

    timeron=setInterval(slideonAuto,4000);

  });



});