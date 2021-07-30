$(function(){

    // banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 2500,
        
    });

    // about vedio:
    $('.venobox').venobox(); 


    // team slider;

    $('.team-slider').slick({
        arrows: false, 
        slidesToScroll: 1, 
        slidesToShow: 4,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
              }
            },

            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                }
              },

              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                }
              },
           
        
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    });

    // feedback section;

   $('.feedback-slider').slick({
       arrows: false,
       slidesToScroll: 1, 
       slidesToShow: 2,
       dots: true,
       autoplay: true,
       autoplaySpeed: 3000,

       responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
       
    
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

   });

//    funfact js here;

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// brand slider;

$('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '-15px',
    prevArrow: '<i class="fas fa-chevron-left prevBtn "></i>',
    nextArrow: '<i class="fas fa-chevron-right nextBtn" ></i>',

    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },

        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows:false,
            }
          },
       
    
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

});


    

});