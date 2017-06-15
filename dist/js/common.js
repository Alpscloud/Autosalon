var ProjectApp = function (){
	'use strict';
	// ============================ All vars ================================
	var copyrightYear = document.getElementById('year'),
		callBackBtn = document.getElementById('callbackBtn'),
		closeBtn = document.querySelectorAll('.js-close'),
		overlay = document.getElementById('overlay'),
		popup = document.getElementById('popup'),
		popupService = document.getElementById('popupService');

	// ============================================================
	// ============================Helper functions ================================
	function addClass(elem, clas) {
		elem.classList.add(clas);
	}
	function removeClass(elem, clas) {
		elem.classList.remove(clas)
	}	

	// ============================================================

	// ============================copyright year================================
	var year = new Date(),
		now = year.getFullYear();
	copyrightYear.innerHTML = now
	// ============================================================
};

window.addEventListener('DOMContentLoaded', function() {
	new ProjectApp();
}) 
// ============================================================

// ========= ========= ========= JQUERY =========== ========= =========
$(document).ready(function() {

	// Loader
	setTimeout(function(){
        $('.body-main').addClass('loaded');
    }, 3000);


	// ========= Smooth scroll to the anchor ===========
	// ========= =========== =========== ===========

	// ========= Mobile menu ===========
	var top_show = 150,
		delay = 1000; 

	$(window).scroll(function () {
		if ($(this).scrollTop() > top_show) $('.btn__up').fadeIn();
		else $('.btn__up').fadeOut();
	});

	$('.btn__up').click(function () { 
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});

	// ========= =========== =========== ===========

	// ========= Mobile menu ===========
	$('#hamburger').on('click',function() {
		var w = $('body').width();
		if(w < 900) {
			$('#navMenu').slideToggle(300);
		}
		
	});

	// ========= =========== =========== ===========

	// =========Disabled map ===========
	var onMapMouseleaveHandler = function (event) {
		var that = $(this);

		that.on('click', onMapClickHandler);
		that.off('mouseleave', onMapMouseleaveHandler);
		that.find('iframe').css("pointer-events", "none");
	}

	var onMapClickHandler = function (event) {
		var that = $(this);

		that.off('click', onMapClickHandler);
		that.find('iframe').css("pointer-events", "auto");
		that.on('mouseleave', onMapMouseleaveHandler);
	}
	// Enable map zooming with mouse scroll when the user clicks the map
	$('.google__map').on('click', onMapClickHandler);
	// ========= =========== =========== ===========

	// ========= Google map ===========, 
		// Coordinates
	var latitude = 56.625860,
		longitude = 47.934437,
		map_zoom = 16,
		marker_url = 'img/map-ic.png';
		// Styles
	var style =  [
						{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
						{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
						{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
						{
							featureType: 'administrative.locality',
							elementType: 'labels.text.fill',
							stylers: [{color: '#d59563'}]
						},
						{
							featureType: 'poi',
							elementType: 'labels.text.fill',
							stylers: [{color: '#d59563'}]
						},
						{
							featureType: 'poi.park',
							elementType: 'geometry',
							stylers: [{color: '#263c3f'}]
						},
						{
							featureType: 'poi.park',
							elementType: 'labels.text.fill',
							stylers: [{color: '#6b9a76'}]
						},
						{
							featureType: 'road',
							elementType: 'geometry',
							stylers: [{color: '#a0951c'}]
						},
						{
							featureType: 'road',
							elementType: 'geometry.stroke',
							stylers: [{color: '#ddcd20'}]
						},
						{
							featureType: 'road',
							elementType: 'labels.text.fill',
							stylers: [{color: '#ddcd20'}]
						},
						{
							featureType: 'road.highway',
							elementType: 'geometry',
							stylers: [{color: '#a0951c'}]
						},
						{
							featureType: 'road.highway',
							elementType: 'geometry.stroke',
							stylers: [{color: '#1f2835'}]
						},
						{
							featureType: 'road.highway',
							elementType: 'labels.text.fill',
							stylers: [{color: '#f3d19c'}]
						},
						{
							featureType: 'transit',
							elementType: 'geometry',
							stylers: [{color: '#2f3948'}]
						},
						{
							featureType: 'transit.station',
							elementType: 'labels.text.fill',
							stylers: [{color: '#d59563'}]
						},
						{
							featureType: 'water',
							elementType: 'geometry',
							stylers: [{color: '#17263c'}]
						},
						{
							featureType: 'water',
							elementType: 'labels.text.fill',
							stylers: [{color: '#515c6d'}]
						},
						{
							featureType: 'water',
							elementType: 'labels.text.stroke',
							stylers: [{color: '#17263c'}]
						}
					];
			// Create the point
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style
		};
			// Init
		var map = new google.maps.Map(document.getElementById('map'), map_options),
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				map: map,
				visible: true,
				icon: marker_url
			});

	// ========= =========== =========== ===========
	// ========= Equal height ===========
	var html = $('body').width();
	var maxheight = 0;
	var maxheight2 = 0;

	if(html > 769) {
		$(".feedback__item--info p").each(function() {
		  		if($(this).height() > maxheight) { maxheight = $(this).height(); }
			});

		$(".feedback__item--info p").height(maxheight);

		$(".adv__block p").each(function() {
	  		if($(this).height() > maxheight2) { maxheight2 = $(this).height(); }
		});

		$(".adv__block p").height(maxheight2);

	}
	
	// ========= =========== =========== ===========
	// ========= Toggle advanced sidebar form ===========
	$('.js-form-more-btn').on('click', function() {
		$('.more__filter').slideToggle('slow');
	});
	// ========= =========== =========== ===========
	
	// ========= Remove validate classes ===========
	$('.form__input--validate').on('focus',function() {
		if($(this).hasClass('validate')) {
			$(this).removeClass('validate');
			$(this).next().addClass('hidden');
		}

	});
	// ========= =========== =========== ===========

	$('#carBrand').on('click', function() {
		var carModel = $('#carModel');
		if($(this).val() !== '') {
			if(carModel.hasClass('inactive')) {
				carModel.removeClass('inactive');
				carModel.removeAttr('disabled');
			} else {
				carModel.addClass('inactive');
				carModel.attr('disabled');
			}

		}
		
		
	});

	// ========= Ajax form ===========
	$(".form__contact").submit(function(e) {
		e.preventDefault();
	 //Change
		var th = $(this),
			inputs = th.find('.form__input--validate'),
			flag = true;

		$(inputs).each(function() {
			if(!$(this).val() || $(this).val() == "") {
				$(this).addClass('validate');
				$(this).next().removeClass('hidden');
				flag = false;
			}
		});

		if(!flag) {return false;}

		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			
			$('#overlay').addClass('active');
			$('#thanks').addClass('active');

			
			setTimeout(function() {
				$('#overlay').removeClass('active');
				$('#thanks').removeClass('active');
				th.trigger("reset");
			}, 2000);
			return false;
		});
	});	
	// ========= =========== =========== ===========
});
// ========= =========== =========== ===========  ========= =========== =========== ===========