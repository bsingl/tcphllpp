//Navigation//
$(document).ready(function() {
	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

// Hamburger button//
	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

// Sidebar navigation arrows//
	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});

});

//Navigation Small Device//
/*$(document).ready (function() {
    if (screen > 768) {
        .css('.menu-wrap');}
    else {
        .css('.menu-wrap-sd');}
        
    });*/
        
         