$(document).ready(function(){
    //top
    if($('#p-top .big-mv-slider').length){
        $('#p-top .big-mv-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            loop: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if($('#p-top .b-brands .brands-list ul.mobile').length){
        $('#p-top .b-brands .brands-list ul.mobile').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            loop: false,
            // autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }


    //pre loader
    if($('.pre-loader').length){
        setTimeout(() => {
            $('.pre-loader').fadeOut(1000)
        }, 1000);
    }

    //anchor link
    anchorLink(".b-service .service-box")
});

$(window).resize(function(){
    
});


// anchor link in page
function anchorLink(element){
	$(element).click(function() {
		var idSection = $(this).attr("href");
        $('html, body').animate({
          	scrollTop: $(`${idSection}`).offset().top - 30
        }, 1000)
    });
}