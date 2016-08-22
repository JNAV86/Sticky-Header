$(document).ready(function() {


    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 130) {
            $('.navbar').show();
        } else {
            $('.navbar').hide();
        }
    });



/* Every time the window is scrolled ... */
    // $(window).scroll( function(){
    //     console.log($(window).scrollTop());
    //     /* Check the location of each desired element */
    //     $('.hidden-text').each( function(i){
            
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window > bottom_of_object ){

    //             $(this).fadeIn( "slow" );                
    //         }
            
    //     }); 

    //     $('.hidden-text').each( function(i){
    //         if($(window).scrollTop()>=400){
    //             $(this).fadeIn( "slow" );    
    //         }
    //     });
    // });


  
        
        var aboutEl = $('div.about'),
            aboutElOffset = aboutEl.offset().top/2,
            documentEl = $(document);
        
        documentEl.on('scroll', function() {
            if ( documentEl.scrollTop() > aboutElOffset 
                && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
        });
        
  


    
});

// checkPosition()

// var checkPosition = function(){
//    var elem = $('.hidden-text'), top = elem.offset().top;

//                 if (top - view.limit < 300) {
//                     elem.css('display','none'); 
//                 }
//             };

//        $(window).bind('scroll', function() {

//             view.top = $(window).scrollTop();
//             view.limit = view.top + $(window).height();

//             checkPosition();
//         }); 

// });

//         /* Check the location of each desired element */
//         $('.hidden-text').each( function(i){
            
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){

//                 $(this).fadeIn( "slow" );                
//             }else if($(window).scrollTop()>300){
//                 alert("hello");
//             }
            
//         }); 
    
//     });
