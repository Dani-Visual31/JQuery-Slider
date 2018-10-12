/**
 * Created by Danish on 10/10/2018.
*/
 $(document).ready(function jQuery(){
   var imgs = $("#image").find("img");
   var current_img = 1;
   var i;
   var dots = 0;
   var stopPlay = false;
   function show_img(){
     for (i = 1; i < imgs.length+1; i++) {
       if(i === current_img){
         $(imgs[i-1]).show();
       }else{
         $(imgs[i-1]).hide()
       }
     }
   }
   var autoPlay = setInterval (function(){
    if(!stopPlay){
        next();
    }
}, 2000);
   function show_dots(){
     $('#navList li').each(function(){
      let index = $(this).index();
      if(index == dots){
        $(this).addClass("current");
      }
      else{
        $(this).removeClass("current");
      }
      });
   }
   function next(){
    if(current_img === imgs.length){
        current_img = 1;
      }else{
        current_img = current_img + 1;

      }
      dots = current_img - 1;
      show_dots();
      show_img();
   }
   function prev(){
    if(current_img === 1){
        current_img = imgs.length;
      }else{
        current_img = current_img - 1
      }
      dots = current_img - 1;
      show_dots();
      show_img();
   }
   $("#prev").click(function(){
       prev();
   });
   $("#next").click(function(){
    next();
   });
   $("#navList li").click(function(){
     console.log('this li is clicked ',$(this).index());
     dots = $(this).index();
     current_img = dots + 1;
      show_dots();
      show_img();

   });

  $('.button').click(function(){
    $(".button").toggleClass('active');
    if($(".button").hasClass('active')){
      $(".button").text('Pause');
      stopPlay = false;
    } else {
      $(".button").text('Play');
      stopPlay = true;
    }
    console.log("clicked !!!!!!!!!!");
});
});
