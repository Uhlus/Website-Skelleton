$(function(){
	$('.menu-button').on('click', function(){
		$('.menu-button').toggleClass('active');
		$('nav').toggleClass('active');
	});
	$('.slider').slick();
});
