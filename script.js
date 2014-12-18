$(document).ready(function() {
	// Loading Animation
	$("#loading_bar").animate({'width':'100%'}, 1500, "easeInExpo");
	$("#loading_bar").animate({'height':'100%', 'top':'0%'});
	$("#loading_bar").fadeOut();
	$("aside").fadeIn();
	$("aside").delay(1500).animate({'left':'0%'});
	$("main").delay(2000).animate({'right':'0%'});

});