$(document).ready(function(){
    
    $(".case_studies_carousel").owlCarousel({
        items       : 3,
        margin      : 30,
        loop        : true,
        dots        : true,
        nav         : false,
    });  
    
    $(".testimonial_carousel").owlCarousel({
        items       : 1,
        loop        : true,
        dots        : true,
        nav         : false,
    });
});