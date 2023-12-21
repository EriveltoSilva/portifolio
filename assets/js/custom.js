$(document).ready(function () {
	"use strict";

	// 1. Scroll To Top 
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 600) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});



	// 2. Smooth Scroll spy

	$('.header-area').sticky({
		topSpacing: 0
	});

	//=============

	$('li.smooth-menu a').bind("click", function (event) {
		event.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 0
		}, 1200, 'easeInOutExpo');
	});

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 0
	});

	// 3. Progress-bar

	var dataToggleTooTip = $('[data-toggle="tooltip"]');
	var progressBar = $(".progress-bar");
	if (progressBar.length) {
		progressBar.appear(function () {
			dataToggleTooTip.tooltip({
				trigger: 'manual'
			}).tooltip('show');
			progressBar.each(function () {
				var each_bar_width = $(this).attr('aria-valuenow');
				$(this).width(each_bar_width + '%');
			});
		});
	}

	// 4. owl carousel

	// i. client (carousel)

	$('#client').owlCarousel({
		items: 7,
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		dots: false,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 2
			},
			415: {
				items: 2
			},
			600: {
				items: 4

			},
			1199: {
				items: 4
			},
			1200: {
				items: 7
			}
		}
	});


	$('.play').on('click', function () {
		owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function () {
		owl.trigger('stop.owl.autoplay')
	})


	// 5. welcome animation support

	$(window).load(function () {
		$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({ 'opacity': '0' });
		$(".header-text a").removeClass("animated fadeInDown").css({ 'opacity': '0' });
	});

	$(window).load(function () {
		$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({ 'opacity': '0' });
		$(".header-text a").addClass("animated fadeInDown").css({ 'opacity': '0' });
	});

});


/**
* Init isotope layout and filters
*/
function initIsotopeLayout() {
	document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
		let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
		let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
		let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

		let initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
			itemSelector: '.isotope-item',
			layoutMode: layout,
			filter: filter,
			sortBy: sort
		});

		isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
			filters.addEventListener('click', function () {
				isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
				this.classList.add('filter-active');
				initIsotope.arrange({
					filter: this.getAttribute('data-filter')
				});
				if (typeof aosInit === 'function') {
					aosInit();
				}
			}, false);
		});

	});
}
window.addEventListener('load', initIsotopeLayout);


function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);