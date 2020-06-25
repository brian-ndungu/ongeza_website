/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE		
--------------------------------------*/
"use strict";
jQuery(document).on('ready', function() {
	/*--------------------------------------
			MOBILE MENU						
	--------------------------------------*/
	function collapseMenu(){
		jQuery('.at-navigation ul li.menu-item-has-children, .at-navigation ul li.menu-item-has-mega-menu').prepend('<span class="at-dropdowarrow"><i class="fa fa-angle-down"></i></span>');
		jQuery('.at-navigation ul li.menu-item-has-children span, .at-navigation ul li.menu-item-has-mega-menu span').on('click', function() {
			jQuery(this).parent('li').toggleClass('at-open');
			jQuery(this).next().next().slideToggle(300);
		});
	}
	collapseMenu();
	/*--------------------------------------
			MEGA MENU						
	--------------------------------------*/
	jQuery(function ($) {
		function hoverIn() {
			var a = jQuery(this);
			var nav = a.closest('.at-navigation');
			var mega = a.find('.mega-menu');
			var offset = rightSide(nav) - leftSide(a);
			mega.width(Math.min(rightSide(nav), columns(mega)*230));
			mega.css('left', Math.min(0, offset - mega.width()));
		}
		function hoverOut() {}
		function columns(mega) {
			var columns = 0;
			mega.children('.mega-menu-row').each(function () {
				columns = Math.max(columns, jQuery(this).children('.mega-menu-col').length);
			});
			return columns;
		}
		function leftSide(elem) {
			return elem.offset().left;
		}
		function rightSide(elem) {
			return elem.offset().left + elem.width();
		}
		jQuery('.menu-item-has-mega-menu').hover(hoverIn, hoverOut);
	});
	/*--------------------------------------
			THEME ACCORDION 				
	--------------------------------------*/
	if(jQuery('.at-panelheading').length > 0){
		var _tg_panelheading = jQuery('.at-panelheading');
		_tg_panelheading.on('click',function () {
			jQuery('.panel-heading').removeClass('at-active');
			jQuery(this).parents('.panel-heading').addClass('at-active');
			jQuery('.panel').removeClass('at-active');
			jQuery(this).parent().addClass('at-active');
		});
	}
	jQuery('.panel-collapse').on('show.bs.collapse', function () {
		jQuery(this).siblings('.panel-heading').addClass('at-active');
	});
	jQuery('.panel-collapse').on('hide.bs.collapse', function () {
		jQuery(this).siblings('.panel-heading').removeClass('at-active');
	});
	/* -------------------------------------
			HOME SLIDER V ONE
	-------------------------------------- */
	if(jQuery('#at-homeslidervone').length > 0){
		var totalItems = jQuery('.pogoSlider-slide').length;
		var mySlider = jQuery('#at-homeslidervone').pogoSlider({
			autoplay: true,
			responsive: true,
			targetHeight: 445,
			generateNav: false,
			pauseOnHover: false,
			displayProgess: true,
			autoplayTimeout: 5000,
			onSlideStart: function(){
				var currentIndex = jQuery('div[style*="opacity: 1"].pogoSlider-slide').index() + 1;
				jQuery('#at-homeslidervone + .at-counter').html('<span>'+currentIndex+'</span><span>'+totalItems+'</span>');
			}
		}).data('plugin_pogoSlider');
	}
	if(jQuery('#at-homeslidervthree').length > 0){
		var mySlider = jQuery('#at-homeslidervthree').pogoSlider({
			autoplay: false,
			responsive: true,
			targetHeight: 445,
			generateNav: false,
			pauseOnHover: false,
			displayProgess: false,
			autoplayTimeout: 6000,
		}).data('plugin_pogoSlider');
	}
	if(jQuery('#at-homeslidervfour').length > 0){
		var mySlider = jQuery('#at-homeslidervfour').pogoSlider({
			autoplay: false,
			responsive: true,
			targetHeight: 445,
			generateNav: false,
			pauseOnHover: false,
			displayProgess: false,
			autoplayTimeout: 6000,
		}).data('plugin_pogoSlider');
	}
	if(jQuery('#at-homeslidervfive').length > 0){
		var menu = ['<span>01</span><h2>Friendly Assistance</h2><div class="at-description"><p>Export Financial Advice</p></div>', '<span>02</span><h2>Money Care</h2><div class="at-description"><p>Finding your Next Advisor</p></div>', '<span>03</span><h2>Our Experience</h2><div class="at-description"><p>We have 15 years Experience</p></div>', '<span>04</span><h2>Clients Investment</h2><div class="at-description"><p>Doing the right thing</p></div>']
		var mySwiper = new Swiper ('#at-homeslidervfive', {
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<div class="' + className + '">' + (menu[index]) + '</div>';
				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
	}
	if(jQuery('#at-homeslidervsix').length > 0){
		var mySlider = jQuery('#at-homeslidervsix').pogoSlider({
			autoplay: true,
			responsive: true,
			targetHeight: 445,
			generateNav: false,
			pauseOnHover: false,
			displayProgess: false,
			autoplayTimeout: 6000,
		}).data('plugin_pogoSlider');
	}
	if(jQuery('#at-homeslidervseven').length > 0){
		jQuery('#at-homeslidervseven').owlCarousel({
			items: 1,
			nav: false,
			loop: true,
			dots: true,
			center: true,
			autoplay: false,
			dotsClass: 'at-sliderdots',
		});
	}
	/* -------------------------------------
			FEATURES SLIDER V ONE
	-------------------------------------- */
	if(jQuery('#at-featuresslider').length > 0){
		jQuery('#at-featuresslider').owlCarousel({
			items: 3,
			nav: true,
			margin: 30,
			loop: true,
			dots: false,
			center: true,
			autoplay: true,
			onTranslated : counter,
			onInitialized  : counter,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: {items: 1,},
				640: {items: 2,},
				1441: {items: 3,},
			}
		});
		function counter(event) {
			var totalItems = jQuery('#at-featuresslider .owl-item:not(.cloned)').length;
			var currentIndex = jQuery('#at-featuresslider .owl-item.center').index() - 2;
			jQuery('.at-titleandbtn .at-counter').html('<span>0'+currentIndex+'</span><span>0'+totalItems+'</span>');
		}
	}
	/* -------------------------------------
			SPECIAL SERVICES SLIDER
	-------------------------------------- */
	if(jQuery('#at-servicesslider').length > 0){
		jQuery('#at-servicesslider').owlCarousel({
			items: 3,
			nav: true,
			margin: 30,
			loop: true,
			dots: true,
			center: true,
			autoplay: true,
			onTranslated : counter,
			onInitialized  : counter,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: {items: 1, },
				768: { items: 2, },
				992: { items: 3, },
			}
		});
		function counter(event) {
			var totalItems = jQuery('#at-servicesslider .owl-item:not(.cloned)').length;
			var currentIndex = jQuery('#at-servicesslider .owl-item.center').index() - 2;
			jQuery('.at-servicesslidercounter').html('<span>0'+currentIndex+'</span><span>0'+totalItems+'</span>');
		}
	}
	/* -------------------------------------
			WHAT WE DO SLIDER
	-------------------------------------- */
	if(jQuery('#at-whatwedoslider').length > 0){
		jQuery('#at-whatwedoslider').owlCarousel({
			items: 2,
			nav: true,
			margin: 30,
			loop: true,
			dots: true,
			autoplay: true,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 2, },
			}
		});
	}
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	if(jQuery('#at-testimonialslider').length > 0){
		jQuery('#at-testimonialslider').owlCarousel({
			items: 2,
			nav: true,
			margin: 30,
			loop: true,
			dots: true,
			autoplay: true,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 2, },
			}
		});
	}
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	if(jQuery('.at-testimonial3gridslider').length > 0){
		jQuery('.at-testimonial3gridslider').owlCarousel({
			items: 3,
			nav: true,
			margin: 30,
			loop: true,
			dots: true,
			center: true,
			autoplay: true,
			onTranslated : counter,
			onInitialized  : counter,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 3, },
			}
		});
		function counter(event) {
			var totalItems = jQuery('.at-testimonial3gridslider .owl-item:not(.cloned)').length;
			var currentIndex = jQuery('.at-testimonial3gridslider .owl-item.center').index() - 2;
			jQuery('.at-textimonialscounter').html('<span>0'+currentIndex+'</span><span>0'+totalItems+'</span>');
		}
	}
	/* -------------------------------------
			ADDRESS SLIDER
	-------------------------------------- */
	if (jQuery('#at-addressslider').length > 0) {
		jQuery('#at-addressslider').owlCarousel({
			items: 1,
			nav: true,
			loop: true,
			dots: true,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
		});
	}
	/*--------------------------------------
			COUNTER							
	--------------------------------------*/
	if(jQuery('#at-counters').length > 0){
		var _tg_counters = jQuery('#at-counters');
		_tg_counters.appear(function () {
			jQuery('.at-scounter > h3').countTo()
		});
	}
	if(jQuery('#at-happycustomers').length > 0){
		var _at_happycustomers = jQuery('#at-happycustomers');
		_at_happycustomers.appear(function () {
			jQuery('.at-happycustomercounter > h3').countTo()
		});
	}
	/*--------------------------------------
			PROGRESS BAR
	--------------------------------------*/
	if(jQuery('#at-ourskill').length > 0){
		var _tg_ourskill = jQuery('#at-ourskill');
		_tg_ourskill.appear(function () {
			jQuery('.skill-holder').each(function () {
				jQuery(this).find('.skill-bar').animate({
					width: jQuery(this).attr('data-percent')
				}, 2500);
			});
		});
	}
	/*--------------------------------------
			Google Map
	--------------------------------------*/
	if(jQuery('#at-locationmap').length > 0){
		var gmapStyles = [
			{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]},
			{"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]},
			{"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]},
			{"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]},
			{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
			{"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
			{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},
			{"featureType": "water","elementType": "all","stylers": [{"color": "#46bcec"},{"visibility": "on"}]},
			{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#47bcec"}]}
		];
		var _tg_locationmap = jQuery('#at-locationmap');
		_tg_locationmap.gmap3({
			marker: {
				address: 'New York, USA',
				options: {
					title: 'Robert Frost Elementary School',
					icon: "images/pin.png",
					animation: google.maps.Animation.BOUNCE,
				}
			},
			map: {
				options: {
					zoom: 12,
					styles: gmapStyles,
					scaleControl: true,
					scrollwheel: false,
					mapTypeControl: false,
					disableDefaultUI: true,
					navigationControl: false,
					streetViewControl: false,
					disableDoubleClickZoom: true,
				}
			}
		});
	}
	/*--------------------------------------
			PRETTY PHOTO GALLERY			
	--------------------------------------*/
	if(jQuery('#at-gallery').length > 0){
		jQuery('a[data-rel]').each(function () {
			jQuery(this).attr('rel', jQuery(this).data('rel'));
		});
		jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto({
			animation_speed: 'normal',
			theme: 'dark_square',
			slideshow: 3000,
			autoplay_slideshow: false,
			social_tools: false
		});
	}
	/*--------------------------------------
			MASONRY GALLERY					
	--------------------------------------*/
	jQuery('#at-gallery').isotope({
		itemSelector: '.at-griditem',
		percentPosition: true,
		masonry: {
			columnWidth: '.at-griditem'
		}
	});
	/*---------------------------------------
			SKILLS PROGRESS BAR				
	---------------------------------------*/
	jQuery('#at-ourskill').appear(function () {
		jQuery('.at-skillholder').each(function () {
			jQuery(this).find('.at-skillbar').animate({
				width: jQuery(this).attr('data-percent')
			}, 2500);
		});
	});
	/*---------------------------------------
			LINE CHART						
	---------------------------------------*/
	if (jQuery('#at-linechart').length > 0) {
		var chartId = document.getElementById("at-linechart");
		var at_linechart = new Chart(chartId, {
			type: 'line',
			data: {
				labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
				datasets: [{
					label: 'One',
					data: [10, 15, 20, 25, 28, 25, 23, 25, 23, 25, 28, 25, 20, 15, 10],
					backgroundColor: [
						'rgba(254, 96, 169, 0.2)',
					],
					borderColor: [
						'#fe60a9',
					],
					borderWidth: 2
				},{
					label: 'Two',
					data: [25, 20, 15, 20, 30, 40, 30, 25, 20, 15, 20, 25],
					backgroundColor: [
						'rgba(84, 181, 211, 0.2)',
					],
					borderColor: [
						'#54b5d3',
					],
					borderWidth: 2
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				},
				legend: {
					position: 'bottom',
					fullWidth: 'true'
				}
			}
		});
	}
	/*---------------------------------------
			DOUGHNUT CHART  				
	---------------------------------------*/
	if (jQuery('#at-doughnutchartone').length > 0) {
		var doughnutchartone = document.getElementById("at-doughnutchartone").getContext('2d');
		var at_doughnutchartone = new Chart(doughnutchartone, {
			type: 'doughnut',
			data: {
				labels: ["Red", "Green", "Yellow"],
				datasets: [{
					backgroundColor: [
						"#ffbf66",
						"#53b4d1",
						"#fe60a8"
					],
					data: [33, 33, 34]
				}]
			},
			options:{
				responsive: true,
				cutoutPercentage: 65,
				legend: {
					position: 'bottom',
					fullWidth: 'true'
				}
			}
		});
	}
	/*---------------------------------------
			DOUGHNUT CHART					
	---------------------------------------*/
	if (jQuery('#at-doughnutchartwo').length > 0) {
		var doughnutcharttwo = document.getElementById("at-doughnutchartwo").getContext('2d');
		var at_doughnutcharttwo = new Chart(doughnutcharttwo, {
			type: 'doughnut',
			data: {
				labels: ["Red", "Green"],
				datasets: [{
					backgroundColor: [
						"#ffbf66",
						"#53b4d1",
					],
					data: [50, 50]
				}]
			},
			options:{
				responsive: true,
				cutoutPercentage: 65,
				legend: {
					position: 'bottom',
					fullWidth: 'true'
				}
			}
		});
	}
	/* -------------------------------------
			SPECIAL SERVICES SLIDER
	-------------------------------------- */
	if(jQuery('#at-postslider').length > 0){
		jQuery('#at-postslider').owlCarousel({
			items: 3,
			nav: true,
			margin: 30,
			loop: true,
			dots: false,
			autoplay: false,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: {items: 1,},
				768: { items: 2, },
				901: { items: 3, },
			}
		});
	}
	/* -------------------------------------
			ADDRESS SLIDER
	-------------------------------------- */
	if (jQuery('#at-testimonialsingleslide').length > 0) {
		jQuery('#at-testimonialsingleslide').owlCarousel({
			items: 1,
			nav: false,
			loop: true,
			dots: true,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
		});
	}
	/* -------------------------------------
			TEAM MEMBERS SLIDER
	-------------------------------------- */
	if(jQuery('#at-teamslider').length > 0){
		jQuery('#at-teamslider').owlCarousel({
			items: 3,
			nav: true,
			margin: 30,
			loop: true,
			dots: false,
			center: true,
			autoplay: true,
			onTranslated : counter,
			onInitialized  : counter,
			dotsClass: 'at-sliderdots',
			navClass: ['at-prev', 'at-next'],
			navContainerClass: 'at-slidernav',
			responsive: {
				0: { items: 1, },
				768: { items: 3, },
			}
		});
		function counter(event) {
			var totalItems = jQuery('#at-teamslider .owl-item:not(.cloned)').length;
			var currentIndex = jQuery('#at-teamslider .owl-item.center').index() - 2;
			jQuery('.at-teamslidercounter').html('<span>0'+currentIndex+'</span><span>0'+totalItems+'</span>');
		}
	}
	/* -------------------------------------
			STICK IN PARENT
	-------------------------------------- */
	if(jQuery('#at-sidebar').length > 0){
		var _at_sidebar = jQuery("#at-sidebar");
		_at_sidebar.stick_in_parent();
	}
	jQuery('.at-sidebar .at-widgetlinking ul li a').on('click', function() {
		jQuery('.at-sidebar .at-widgetlinking ul li').removeClass('at-active');
		jQuery(this).parent('li').addClass('at-active');
	});
	/* -------------------------------------
			HEADER FIXED
	-------------------------------------- */
	// var prevScrollpos = window.pageYOffset;
	// window.onscroll = function() {
	// 	var currentScrollPos = window.pageYOffset;
	// 	if (prevScrollpos > currentScrollPos) {
	// 		document.getElementById("at-header").style.top = "0";
	// 		document.getElementById("at-header").classList.remove("nav-up")
	// 	} else {
	// 		// document.getElementById("at-header").style.top = "-100px";
	// 		document.getElementById("at-header").classList.add("nav-up")
	// 	}
	// 	prevScrollpos = currentScrollPos;
	// }
});
/* -------------------------------------
		HEADER FIXED
-------------------------------------- */
jQuery(window).scroll(function(){
	var sticky = jQuery('header#at-header'),
	scroll = jQuery(window).scrollTop();
	if (scroll >= 50) sticky.addClass('at-headerbgwhite');
	else sticky.removeClass('at-headerbgwhite');
});
/* -------------------------------------
			LOADER
-------------------------------------- */
(function () {
	var $triangles = document.querySelectorAll('.triangle');
	var template = '<svg class="triangle-svg" viewBox="0 0 140 141">\n <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n <polygon class="triangle-polygon"  points="70 6 136 138 4 138"></polygon>\n </g>\n </svg>';
	Array.prototype.forEach.call($triangles, function ($triangle, index) {
		$triangle.innerHTML = template;
	});
})();
jQuery(window).on('load', function() {
	jQuery('.lds-roller').fadeOut(800);
});

/* -------------------------------------
			CONTACT FORM
-------------------------------------- */
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
	document.getElementById("prevBtn").style.display = "none";
	document.getElementsByClassName("at-colcontact")[0].style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == 2) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  if (n == 3){
	sendForm();
	// console.log("here");
	document.getElementById("steps").style.display = "none";
	document.getElementById("prevBtn").style.display = "none";
	document.getElementById("nextBtn").style.display = "none";
	return false;
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  
  if (n == 1 && !validateForm(n)) return false;
  
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab == 4) {
	//...the form gets submitted:
	// console.log("Here");
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function validateForm(n) {
  // This function deals with validation of the form fields
  
	// console.log("This is "+ n);
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  if(currentTab==0){
	  if(!validateAge())
	  	valid = false;
  }else if(currentTab==1){
	  if(!validatePremium() || !validateCover())
	  	valid = false;
  }else if(currentTab==2){
	  if(!validateEmail() || !validateNumber())
		valid = false;
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid && currentTab!=3) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}
function validateAge(){
	var dob = document.getElementsByName("dob")[0];
	var age = getAge(dob.value);
	if(age<=18 ||age>=66){
		dob.className += " invalid";
		document.getElementById("dob-error").style.display = "inline";
		return false;
	}else{
		document.getElementById("dob-error").style.display = "none";
		dob.classList.remove("invalid");
		return true;		
	}
}

function validatePremium(){
	var premium = document.getElementById("premiumInput").value;
	if(premium<500){
		document.getElementById("premiumInput").className += " invalid";
		document.getElementById("prem-error").style.display = "inline";
		document.getElementById("prem-error").innerText = "Sorry, minimum premium is R500";
		// alert("Sorry, minimum premium is R500");  
		return false;
	}else if(premium>150000){
		document.getElementById("premiumInput").className += " invalid";
		document.getElementById("prem-error").style.display = "inline";
		document.getElementById("prem-error").innerText = "Please enter a valid premium";
		// alert("Please enter a valid premium");  
		return false;
	}
	document.getElementById("prem-error").style.display = "none";
	document.getElementById("premiumInput").classList.remove("invalid");
	return true;
}

function validateCover(){
	var cover = document.getElementById("coverInput").value;
	if(cover<500){
		document.getElementById("premiumInput").className += " invalid";
		document.getElementById("prem-error").style.display = "inline";
		document.getElementById("prem-error").innerText = "Sorry, minimum cover is R500";
		// alert("Sorry, minimum premium is R500");  
		return false;
	}else if(cover>150000){
		document.getElementById("premiumInput").className += " invalid";
		document.getElementById("prem-error").style.display = "inline";
		document.getElementById("prem-error").innerText = "Sorry, maximum cover is R150,000 p.a.";
		// alert("Sorry, maximum cover is R150,000 p.a.");  
		return false;
	}
	document.getElementById("prem-error").style.display = "none";
	document.getElementById("premiumInput").classList.remove("invalid");
	return true;
}

function validateEmail(){
	var email=document.getElementsByName("email")[0].value;
	var atposition=email.indexOf("@");  
	var dotposition=email.lastIndexOf(".");  
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
		document.getElementsByName("email")[0].className += " invalid";
		document.getElementById("email-error").style.display = "inline";
		document.getElementById("email-error").innerText = "Please enter a valid e-mail address";
	//   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
	  	return false;
	}
	document.getElementById("email-error").style.display = "none";
	document.getElementsByName("email")[0].classList.remove("invalid");
	return true;
}

function validateNumber(){
	var phoneno = /^\d{10}$/;
	if(!document.getElementsByName("number")[0].value.match(phoneno))
	{
		document.getElementsByName("number")[0].className += " invalid";
		document.getElementById("number-error").style.display = "inline";
		document.getElementById("number-error").innerText = "Not a valid Phone Number";
		// alert("Not a valid Phone Number");
		return false;
	}
	document.getElementById("number-error").style.display = "none";
	document.getElementsByName("email")[0].classList.remove("invalid");
	return true;
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function selectPremium(){
	document.getElementById("coverInput").style.display = "none";
	document.getElementById("premiumInput").style.display = "inline";
	document.getElementById("prem-error").style.display = "none";
}

function selectCover(){
	document.getElementById("premiumInput").style.display = "none";
	document.getElementById("coverInput").style.display = "inline";
	document.getElementById("prem-error").style.display = "none";
}

function getAge(Bdate){
	var Bday = +new Date(Bdate);
    return Math.ceil(((Date.now() - Bday) / (31557600000)));
}

function getCover(){
	if(validatePremium()){
		const premiumData = {
			ccProduct: "OLP",
			Cover: "OLP WL",
			RateKey1: "18",
			RateKey2: document.forms["regForm"]["income"].value,
			RateKey3: document.forms["regForm"]["gender"].value,
			RateKey4: " ",
			TopUp: "0",
			Premium: document.getElementById("premiumInput").value
		};
		var insVal = premiumData.Premium;
		if(insVal>=500 && insVal<=150000){
			const request = new XMLHttpRequest();
			request.onload = () => {
				var res = JSON.parse(request.responseText);
				document.getElementsByClassName("at-colcontact")[0].style.display = "block";
				document.getElementById("recCoverVal").innerHTML= "R"+numberWithCommas(res.response.SumInsured);
				document.getElementById("recPremVal").innerHTML= "R"+numberWithCommas(insVal);
				document.getElementById("coverInput").value = res.response.SumInsured;
				// console.log(request.responseText);
			}
			const requestData = JSON.stringify(premiumData);
			request.open('post','https://ongeza.cloudcover.insure/CloudCoverServices/ApiCalcSumInsured');
			request.setRequestHeader('Content-type', 'application/json');
			request.send(requestData);
		}
	}else{
		document.getElementsByClassName("at-colcontact")[0].style.display ="none";
		document.getElementById("coverInput").value = "";
	}
}
function getPremium(){
	if(validateCover()){
		const coverData = {
			ccProduct: "OLP",
			Cover: "OLP WL",
			RateKey1: "18",
			RateKey2: document.forms["regForm"]["income"].value,
			RateKey3: document.forms["regForm"]["gender"].value,
			RateKey4: " ",
			TopUp: "0",
			SumInsured: document.getElementById("coverInput").value
		}
		var insVal = coverData.SumInsured;
		if(insVal>=500 && insVal<=150000){
			const request = new XMLHttpRequest();
			request.onload = () => {
				var res = JSON.parse(request.responseText);
				document.getElementsByClassName("at-colcontact")[0].style.display = "block";
				document.getElementById("recCoverVal").innerHTML= "R"+numberWithCommas(insVal);
				document.getElementById("recPremVal").innerHTML= "R"+numberWithCommas(res.response.Premium);
				document.getElementById("premiumInput").value = res.response.Premium;
				// console.log(request.responseText);
			}
			const requestData = JSON.stringify(coverData);
			request.open('post','https://ongeza.cloudcover.insure/CloudCoverServices/ApiCalcPremium');
			request.setRequestHeader('Content-type', 'application/json');
			request.send(requestData);
		}
	}else{
		document.getElementsByClassName("at-colcontact")[0].style.display ="none";
		document.getElementById("premiumInput").value = "";
	}
}


// window.addEventListener( "load", function () {
	function sendForm(){
		const age = getAge(document.forms["regForm"]["dob"].value);
		const income = ["R0 - R5 000","R5 000 - R10 000","R10 001 - R15 000","R15 001 - R20 000","R20 001 - R25 000","R25 001 - R50 000","R50 001 - R100 000","R100 001 +"]
		const formData = {
			Action: "Quote Request",
			Channel: "Ongeza Website",
			ContactName: document.forms["regForm"]["name"].value,
			Message: "Please contact me for an Ongeza Life Quote. My contact details are as follow:"+"\n"+"Name: "+
				document.forms["regForm"]["name"].value+"\n"+"Email address: temp@test.com"+"\n\n"+"Cellular number: "+
				document.forms["regForm"]["number"].value+"\n\n"+
				"Gender: "+document.forms["regForm"]["gender"].value+"\n"+
				"Date of Birth: "+document.forms["regForm"]["dob"].value+"\n"+
				"Age next birthday: "+age+"\n"+
				"Income level: "+document.forms["regForm"]["income"].value+"\n"+
				"Income level group: "+income[document.forms["regForm"]["income"].value-1]+"\n"+
				"Premium: "+document.forms["regForm"]["premiumInput"].value+"\n"+
				"Sum insured / Cover: "+document.forms["regForm"]["coverInput"].value,
			Product: "OLP",
			Source: "Get A Quote",
			Telephone: document.forms["regForm"]["number"].value,
			eMail: document.forms["regForm"]["email"].value
		}
		// console.log(formData);
		if(validateForm()){
			const request = new XMLHttpRequest();
			request.onload = () => {
				console.log(request.responseText);
			};
			request.onerror = () => {
				console.log(request.responseText);
			};
			const requestData = JSON.stringify(formData);
			request.open('post','https://ongeza.cloudcover.insure/CloudCoverServices/ApiCreateLead');
			request.setRequestHeader('Content-type', 'application/json');
			request.send(requestData);
		}
	}
	// document.getElementById("regForm").addEventListener("submit", function(event){
	// 	event.preventDefault();
	// 	alert("Sent");
	// });
// });