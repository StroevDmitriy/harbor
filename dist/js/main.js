jQuery('.burger').click(function(){
	var width = jQuery(window).width();
	if (jQuery(this).hasClass('active')) {
		jQuery(this).removeClass('active');
		jQuery('.main-nav').removeClass('active');
		jQuery('.main-nav').addClass('overflow-hidden');
		jQuery("body").removeClass("overflow-hidden");
		jQuery("html").removeClass("overflow-hidden");		
	}
	else
	{
		jQuery(this).addClass('active');
		jQuery('.main-nav').addClass('active');
		jQuery('.main-nav').removeClass('overflow-hidden');
		if (width < 992) {
			jQuery("body").addClass("overflow-hidden");
			jQuery("html").addClass("overflow-hidden");
		};
	};
});

jQuery('.parent_item').click(function(){
	var width = jQuery(window).width();
	if (width > 992) {
		jQuery(this).toggleClass('open');
	}
});

jQuery(document).ready(function(){
// jQuery(window).load(function(){
	jQuery(".banks-list").owlCarousel({
		loop:true,
		nav: true,
		dots: true,
		navText : true,
		autoHeight: true,
		mouseDrag: true,
		responsive:{
			0 : {items:3},
			400: {items:4},
			576: {items:5},
			768 : {items:4},
			992 : {items:5},
		}
	});

	jQuery(".gallery-slider").owlCarousel({
		loop:true,
		nav: true,
		dots: true,
		navText : true,
		autoHeight: true,
		mouseDrag: true,
		items: 1,
		// URLhashListener:true,
	});

	jQuery(".video-slider").owlCarousel({
		loop:true,
		nav: true,
		dots: true,
		navText : true,
		autoHeight: true,
		mouseDrag: true,
		items: 1,
	});

	jQuery(".date-slider").owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		navText : true,
		autoHeight: true,
		mouseDrag: false,
		items: 1,
		// touchDrag: true,
	});

	jQuery(".const-progress-slider").owlCarousel({
		loop:true,
		nav: true,
		dots: true,
		navText : true,
		autoHeight: true,
		mouseDrag: true,
		items: 1,
	});

	jQuery(".project-info-block").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText : true,
		autoHeight: true,
		// mouseDrag: true,
		items: 5,
		center: true,
		mouseDrag: false,
		touchDrag: false,
		responsive:{
			0 : {items:1},
			400: {items:1.2},
			576: {items:2},
			768 : {items:3},
			992 : {items:4},
			1200 : {items:5}
		}
	})

	//Активация нужного слайдера по месяцу строительства
	jQuery(".const-progress-slider:first").addClass("d-block");
	jQuery(".constr-progress .owl-nav").click(function(){
		jQuery(".const-progress-slider").removeClass("d-block").addClass("d-none");
		var currentDate = jQuery(".date-slider .owl-item.active .date-item").attr("data-date");
		var dateClass = 'const-progress-slider_' + currentDate;
		var sliderToActivate = jQuery(".const-progress-slider" + "." + dateClass);
		jQuery(sliderToActivate).removeClass("d-none");
		jQuery(sliderToActivate).addClass("d-block");
	});

	jQuery(".bg-interiors_slider").owlCarousel({
		loop:true,
		nav: false,
		dots: true,
		navText : true,
		autoHeight: true,
		mouseDrag: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		dotsSpeed: 2000,
		items: 1,
	});

	jQuery(".material-slider").owlCarousel({
		loop:true,
		nav: true,
		dots: true,
		navText : true,
		autoHeight: true,
		mouseDrag: true,
		items: 1,
	});

	//Активация нужного слайдера по выбранному материалу
	jQuery(".material-list .img-container").click(function(){
		var currentMaterial = jQuery(this).parent(".item").attr("data-material");
		jQuery(".materials-gallery").removeClass("d-block").addClass("d-none");
		var materialGalleryClass = 'materials-gallery_' + currentMaterial;
		var sliderToActivate = jQuery(".materials-gallery" + "." + materialGalleryClass);
		jQuery(sliderToActivate).removeClass("d-none");
		jQuery(sliderToActivate).addClass("d-block");
	});

	jQuery(".documents-slider").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText : true,
		autoHeight: true,
		mouseDrag: true,
		items: 3,
		responsive:{
			0 : {items:1},
			// 400: {items:1},
			576: {items:1},
			768 : {items:2},
			992 : {items:3},
			1200 : {items:3}
		}
	});
});

//Autosize для textarea
jQuery('textarea').click(function(){
	var textarea = this;
	textarea.addEventListener('keydown', autosize);
	function autosize(){
		var el = this;
		setTimeout(function(){
			el.style.cssText = 'height:auto; padding:0';
			// for box-sizing other than "content-box" use:
			// el.style.cssText = '-moz-box-sizing:content-box';
			el.style.cssText = 'height:' + el.scrollHeight + 'px';
		},0);
	}
});

jQuery("a.scroll[href^='#']").click(function(){
  var _href = jQuery(this).attr("href");
  jQuery(_href).slideDown("1000");
  jQuery("html, body").animate({scrollTop: jQuery(_href).offset().top - 90}, 1000);
  return false;
});