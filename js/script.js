$('.dropdown-menu-closed').on('click',function(){
	$('.dropdown-menu__list--hidden').toggle();
});
	
$('.dropdown-menu__list__item').on('click',function(){
	$('.dropdown-menu__list--hidden').toggle();
	var chosenCategory = ($(this).text());
	$('.dropdown-menu__selected-category').text(chosenCategory);
});


$('.mobile-menu__icon').on('click',function() {
	
	/* Act on the event */
	$('.main-nav').toggleClass('main-nav--mobile');
});


$('.mobile-menu__close-icon').on('click',function() {
	
	/* Act on the event */
	$('.main-nav').toggleClass('main-nav--mobile');
});

