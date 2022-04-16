$(function() {

	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		sliderToScroll:1,
		dots: true,
		speed: 700,
		autoplay: true,
  		autoplaySpeed: 2000,
	})

	$('.slider_popular').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  sliderToScroll:2,
	  centerMode: true,
	  variableWidth: true,
	  	speed: 700,
		autoplay: true,
  		autoplaySpeed: 1000,
	});

	$('.slider_select').slick({
	  infinite: true,
	  speed: 300,
	  dots: true,
	  slidesToShow: 1,
	  sliderToScroll:4,
	  centerMode: true,
	  variableWidth: true,
	  	speed: 700,
		autoplay: true,
  		autoplaySpeed: 1000,
	});


})