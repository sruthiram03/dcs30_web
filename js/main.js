var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});

$(document).ready(function(){
    $(".timeline-panel").mouseenter(function(){
        $(this).siblings(".timeline-badge").css("background-color","#D0ACAF");
    });
    $(".timeline-panel").mouseleave(function(){
        $(this).siblings(".timeline-badge").css("background-color","white");
    });
});
        
$(document).ready(function(){
  $(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if (scroll > 100) {
     $(".navbar-fixed-top").css("background" , "black");
        
   }

   else{
    $(".navbar-fixed-top").css("background" , "transparent");   
   }
  })
})  
     
var owl = $('.carousel-item');
owl.carouselitem({
    items:1,
    loop:false,
    margin:10,
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    autoHeight:false
});


$('.cm-overlay').cmOverlay();

