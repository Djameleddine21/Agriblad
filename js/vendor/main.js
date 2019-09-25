(function($){ "use strict";
                          
/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top");
			} else {
				header.removeClass("navbar-fixed-top");
			}

		});
	});

/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });          

/*=========================================================================
    Product Carousel
=========================================================================*/
	$('#product-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 500,
        items: 1,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: true,
        responsive : {
			0 : {
				items: 1,
			},
			520 : {
				items: 2,
			},
			768 : {
				items: 2
			},
			992 : {
				items: 4
			}
		}
    });
    $('#product-carouse7').owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        smartSpeed: 250,
        items: 1,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: true,
        responsive : {
			0 : {
				items: 1,
			},
			520 : {
				items: 2,
			},
			768 : {
				items: 2
			},
			992 : {
				items: 4
			}
		}
    });
    $('#product-carouse2').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 500,
        items: 1,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: true,
        responsive : {
			0 : {
				items: 1,
			},
			520 : {
				items: 2,
			},
			768 : {
				items: 2
			},
			992 : {
				items: 4
			}
		}
    });
    $('#product-carouse3').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 500,
        items: 1,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: true,
        responsive : {
			0 : {
				items: 1,
			},
			520 : {
				items: 2,
			},
			768 : {
				items: 2
			},
			992 : {
				items: 4
			}
		}
    });
    $('#product-carouse4').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 500,
        items: 1,
        //nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: true,
        responsive : {
			0 : {
				items: 1,
			},
			520 : {
				items: 2,
			},
			768 : {
				items: 2
			},
			992 : {
				items: 4
			}
		}
    });
    $('#product-carouse5').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 500,
        items: 1,
        //nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        //dots: true,
        responsive : {
			0 : {
				items: 1,
			},
			520 : {
				items: 2,
			},
			768 : {
				items: 2
			},
			992 : {
				items: 3
			}
		}
    });
    $('#product-carouse6').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 500,
        items: 1,
        //nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        //dots: true,
        responsive : {
			0 : {
				items: 1,
			},
			520 : {
				items: 2,
			},
			768 : {
				items: 2
			},
			992 : {
				items: 3
			}
		}
    });


/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	});              
     
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
	 
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init();
             
})(jQuery);
