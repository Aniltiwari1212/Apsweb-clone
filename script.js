$(document).ready(function() {
    var owl = $('.owl-carousel');
    $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      margin:15,
      nav:false,
      dots:true,
      responsive:{
        0:{
          items:2
        },
        575:{
          items:3,
          margin:15
        },
        768:{
          items:3,
          margin:15
        },
        1000:{
          items:3,
          margin:30
        }
      }
    });
    
  });

  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
