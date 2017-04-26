var ProjectApp = function (){
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
		elem.classList.remove(clas);
	}	

	// ============================================================

	// ============================copyright year================================

	function togglePopup(e) {
		var target = e && e.target ? e.target : e.srcElement;
		if(target.getAttribute('data-id') === 'show') {
			removeClass(popupService, 'active');
			addClass(overlay, 'active');
			addClass(popup, 'active');
			removeClass(popupService, 'active');
		} else if (target.getAttribute('data-id') === 'close') {
			removeClass(overlay, 'active');
			removeClass(popup, 'active');
			removeClass(popupService, 'active');
		}
	}

	if(callBackBtn) {
		callBackBtn.addEventListener('click', togglePopup);
	}

	if(overlay || closeBtn) {
		overlay.addEventListener('click', togglePopup);
		for(var i = 0; i < closeBtn.length; i++) {
			closeBtn[i].addEventListener('click', togglePopup);
		}
		
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

	$('.js-service').each(function() {
		$(this).on('click', function () {
			var title = $(this).parent().find('.service__item--title').text(),
				popup = $('#popupService'),
				formTitle = popup.find('.form__title'),
				theme = popup.find('.mail__theme'),
				message = popup.find('.form__input--textarea');

			message.attr('name', 'Проблема');
			message.attr('placeholder', 'Кратко опишите свою проблему');
			formTitle.text(title);
			theme.val(title);
			$('#overlay').addClass('active');
			popup.addClass('active');
			

		});
		
	});


	$('.js-feedback').each(function() {
		$(this).on('click', function () {
			var title = 'Оставить свой отзыв',
				popup = $('#popupService'),
				formTitle = popup.find('.form__title'),
				theme = popup.find('.mail__theme'),
				message = popup.find('.form__input--textarea');


			message.attr('name', 'Отзыв');
			message.attr('placeholder', 'Ваш отзыв');
			formTitle.text(title);
			theme.val(title);
			$('#overlay').addClass('active');
			popup.addClass('active');
			

		});
		
	});


	// ========= Smooth scroll to the anchor ===========
	$('.smooth__scroll').on('click', function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;

			$('html, body').animate({scrollTop: top}, 'slow');
		});
	});	
	

	$('a.smoothScroll-link[href^="#"]').on('click', function(){
		var html = $('body').width(),
			scroll_el = $(this).attr('href');

		if(html < 1000) {
			 $(".nav__header .nav__list").slideToggle();
		}
	 
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 70}, 500);
		}
			return false;
		}
	);
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
		$('.nav__header .nav__list').slideToggle(300);
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
	
	// ========= Remove validate classes ===========
	$('.form__input--validate').on('focus',function() {
		if($(this).hasClass('validate')) {
			$(this).removeClass('validate');
			$(this).next().addClass('hidden');
		}

	});
	// ========= =========== =========== ===========

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

			if($("#popup").hasClass('active')) {
				$('#popup').removeClass('active');
			}
			if($("#popupService").hasClass('active')) {
				$('#popupService').removeClass('active');
			}
			setTimeout(function() {
				$('#overlay').removeClass('active');
				$('#thanks').removeClass('active');
				th.trigger("reset");
			}, 2000);
			return false;
		});
		
	// ========= =========== =========== ===========
});
// ========= =========== =========== ===========  ========= =========== =========== ===========