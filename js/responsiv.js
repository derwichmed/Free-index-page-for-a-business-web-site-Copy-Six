$(function (){
   $('.nav_item > div > strong').mouseover(function (){
      $('.sub_menu:visible').hide();
      $(this).find('+ img + .sub_menu').fadeIn(700); 
   });
   
   $('.nav_item > div > a').mouseover(function (){
      $('.sub_menu:visible').hide(); 
   });
    isSideBarHidden = true;
   $('.menu_icon').click(function (){
       if(isSideBarHidden){
           $('.nav_bar').css('width','0px');
           $('.nav_bar').show();
           $('.nav_bar').animate({
                width: "250px"
           }, 300);
       }
   });
   $('.mobile_nav_header img').click(function (){
            $('.nav_bar').animate({
                width: "0px"
            }, 300, function (){
                $('.nav_bar').hide();
            });
   });
});