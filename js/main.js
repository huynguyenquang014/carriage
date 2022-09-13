$(document).ready(function(){
    //check device
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
        $('body').addClass('ios-device');
    }
    else if( userAgent.match( /Android/i ) ){
        $('body').addClass('android-device');
    }
    else{
        $('body').addClass('other-device');
    }

    //toggle drawer
    $(".js-toggle-drawer").click(function(e){
        e.preventDefault();
        $(this).toggleClass("open");
        $(".drawer").toggleClass("open");
    })

    //top
    if($('#p-top .big-mv-slider').length){
        $('#p-top .big-mv-slider').slick({
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

    // customs upload file
    $(".uploadfile-custom").each(function(){
        $(this).click(function () {
            $(this).next().trigger('click');
        });
    })
    
    $(".uploadfile").each(function(){
        $(this).change(function() {
            
            if ($(this).val().length > 0) {
                $(this).next().empty();
                $(this).removeClass('vendor_logo_hide').addClass('vendor_logo');
                var fileName = $(this)[0].files[0].name;
                $(this).after(`<span class='file_placeholder'>${fileName}</span>`);
            } else {
                $(this).removeClass('vendor_logo').addClass('vendor_logo_hide');
                $(this).after("<span class='file_placeholder'>選択されていません。</span>");
            }
        });
    })

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








