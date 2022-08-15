$(document).ready(function(){
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


var pmfFileupload = {
    /* 
       Pretty mother fuckin File Upload input
    */
    init: function() {
       this.cacheDom();
       this.events();
    },
    cacheDom: function() {
       this.$filePlaceholder = $('.file-placeholder');
       this.$filelabel = this.$filePlaceholder.find('label');
       this.$fileUpload = this.$filePlaceholder.find('.fileUpload');
       this.$fileBrowseTxt = this.$filePlaceholder.find('.file-browse-txt');
    },
    events: function() {
       this.$fileUpload.on('change', this.getFileName.bind(this));
    },
    getFileName: function() {
       this.newVal = this.$fileUpload.val();
       if (this.newVal !== "") {
          this.$fileBrowseTxt.text(this.newVal).addClass('hasValue');
       } else {
          this.$fileBrowseTxt.text("Select a file...");
       }
    }
 };
 
 $(document).ready(function() {
    pmfFileupload.init();

    $(".uploadfile-custom").each(function(){
        $(this).click(function () {
            $(this).next().trigger('click');
        });
    })
    

    // set text to select company logo 
    $(".uploadfile").each(function(){
        // $(this).after("<span class='file_placeholder'>Select Company Logo</span>");
        // on change
        $(this).change(function() {
            //  show file name 
            if ($(this).val().length > 0) {
                // $(".file_placeholder").empty();
            $(this).next().empty();
            $(this).removeClass('vendor_logo_hide').addClass('vendor_logo');
            console.log($(this).val());
            } else {
            // show select company logo
            $(this).removeClass('vendor_logo').addClass('vendor_logo_hide');
            $(this).after("<span class='file_placeholder'>選択されていません。</span>");
            }
        });
    })
 });
 





