$(document).ready(function(){


 $('#visual li').mouseenter(function(){
    let imgSrc = $(this).find('img').attr('src');
    $(this).find('img').attr('src',imgSrc.replace('.png', '2.png'))
 })
 $('#visual li').mouseleave(function(){
    let imgSrc = $(this).find('img').attr('src');
    $(this).find('img').attr('src',imgSrc.replace('2.png', '.png'))
 })

 $('header nav li').mouseenter(function(){
    let imgSrc = $(this).find('img').attr('src');
    $(this).find('img').attr('src',imgSrc.replace('.png', '2.png'))
 })
 $('header nav li').mouseleave(function(){
    let imgSrc = $(this).find('img').attr('src');
    $(this).find('img').attr('src',imgSrc.replace('2.png', '.png'))
 })

 $('#visual .pink_rbox').click(function(){
   startHyo()
 })

function startHyo(){
   $('.yellow_circle').addClass('on')
   $('#visual .intro').addClass('on')
   $('#visual .textbox_bg').addClass('on')
   $('header .catebox').addClass('on')
   $('#visual .pink_rbox').hide()
}
 let hyoeun = 1;

 $(window).scroll(function(){
    let scrT = $(window).scrollTop()
    let winH = $(window).height()
    let sec1Top = $('#section1').offset().top
    let sec2Top = $('#section2').offset().top
    let sec3Top = $('#section3').offset().top
    let sec4Top = $('#section4').offset().top


    console.log(scrT, sec1Top)
    if(scrT > sec1Top/4){
      $('header').addClass('on');
      $('#section1').addClass('on'); 
      startHyo();
    } else {
      $('header').removeClass('on');
      $('#section1').removeClass('on');   
    }



    if (scrT > sec2Top - winH/1.5){
      $('#section2').addClass('on'); 
    } else {
      $('#section2').removeClass('on');   
    }


    if (scrT > sec3Top - winH/1.5){
      $('#section3').addClass('on'); 
    } else {
      $('#section3').removeClass('on');   
    }


    if (scrT > sec4Top - winH/1.5){
      $('#section4').addClass('on'); 
    } else {
      $('#section4').removeClass('on');   
    }


         
   if(scrT > sec1Top){
      if(hyoeun == 1){
         hyoeun = 2;
         skill()
      }
   } 
 })



 
 

function skill(){
   


      $('.skill .titarea span').each(function(i){
         let skillVal = parseInt($(this).text());

         $({ val : 0 }).animate({ val : skillVal}, {
            duration: 2000,	
            step: function() {
               $('.skill li').eq(i).find('.colorgraph').width(this.val+'%');
               $('.skill li').eq(i).find('span').text(Math.round(this.val)+'%')
            }
      });
      })
}








 $('.puzzle').mouseenter(function(){
   $(this).children('figure').css({left:'0', transform:'translateX(0)'})
   $(this).children('figure').find('img').eq(0).animate({left:'0', top:'0'})
   $(this).children('figure').find('img').eq(1).animate({right:'0', top:'0'})
   $(this).children('figure').find('img').eq(2).animate({left:'0', bottom:'0'})
   $(this).children('figure').find('img').eq(3).animate({right:'0', bottom:'0'})
   $(this).children('strong').css({left:'110px', transform:'translateX(0)'})

   $('.mbti .textbox').animate({opacity:'1'},2000)

   $('.mbti .textbox span').eq(0).delay(1000).animate({top:'-5px'})
   $('.mbti .textbox span').eq(1).delay(1500).animate({top:'-5px'})
   $('.mbti .textbox span').eq(0).delay(500).animate({top:'0px'})
   $('.mbti .textbox span').eq(1).delay(500).animate({top:'0px'})
 })


 /* 섹션3 필터효과 */
 $('nav li a').click(function(){
     let attrVal = $(this).attr('href');

     $('.content li').hide();
     $('.content li.'+attrVal).fadeIn(200);

     $(this).parent().addClass('on').siblings().removeClass('on')

     return false
 })




})
