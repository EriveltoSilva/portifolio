// Navbar toggle
const icon = document.querySelector('i.navbar-toggler');

icon.addEventListener('click', function () {
	this.classList.contains('collapsed') ? this.classList.replace('bx-x', 'bx-menu') : this.classList.replace('bx-menu', 'bx-x');
});

// Active Menu
const allMenu = document.querySelectorAll('nav .navbar-nav a');
const sections = document.querySelectorAll('section:not(#contact)');

window.addEventListener('scroll', function () {
	let current = '';
	sections.forEach(function (sect) {
		if (this.pageYOffset + 50 > sect.offsetTop) {
			current = sect.getAttribute('id');
		}
	});

	allMenu.forEach(function (nav) {
		nav.classList.remove('active');
		if (nav.classList.contains(current)) {
			nav.classList.add('active');
		}
	});
});



// Loading
const loader = $('.loading');
$(window).on('load', function () {
	loader.fadeOut();
});


window.addEventListener("load", () => {
	document.querySelector(".remove-title").innerHTML = "";
});


// Typed js
let options = {
	strings: ['I am a Software Developer', 'And and Artificial Intelligence Enthusiastic'],
	typeSpeed: 70,
	backSpeed: 50,
	smartBackspace: false,
	backDelay: 2000,
	loop: true,
};

let typed = new Typed('.typed', options);


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

/**
   * Animation on scroll function and init
   */
function aosInit() {
	AOS.init({
		duration: 600,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	});
}
window.addEventListener('load', aosInit);

const glightbox = GLightbox({
	selector: '.glightbox'
});