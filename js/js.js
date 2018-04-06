$(function () {
	$('.vase').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.vase').not($(this)).removeClass('active');
		
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.sidebar-cards').addClass('show');
		}
		else{
			$(this).removeClass('active');
			$('.sidebar-cards').removeClass('show');
		}
		
	});
	$(".sidebar-friends__box").mCustomScrollbar();
	$('.videoWrap iframe').click();
	$('.sidebar-cards__item a').hover(function() {
		/* Stuff to do when the mouse enters the element */
		var data = $(this).data('video');
		// alert(data);
		$('.videoWrap iframe').attr({
			'src': data
		});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
	$('.sliderWrap').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1
	});
	$('.accordion-title').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).closest('.accordion-wrap').find('.accordion-box').slideToggle(200);
	});
	$('.open-chat').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).parent('.content').toggleClass('open-chat-box');
		$(this).parent('.content').find('.content-rgt').toggle();
		$(this).parents('body').toggleClass('chat-open');
	});
	$('.hide-sidebar').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).parents('body').toggleClass('sidebar-close');
		$(this).parents('body').find('.sidebar').toggleClass('hide');
	});
});
