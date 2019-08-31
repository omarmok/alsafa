/*global $*/

jQuery(function ($) {
	'use strict';



	var scrollButton = $(".scroll-top");
	$(window).scroll(function () {
		$(this).scrollTop() >= 100 ? scrollButton.show() : scrollButton.hide(); // jshint ignore:line
	});

	scrollButton.click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 600);



	});
});


$(document).ready(function () {
	'use strict';
	$(".search").click(function () {
		$(".input-search").slideToggle();
	});
});



$(document).ready(function () {
	'use strict';
	$('.carousel2').carousel({
		interval: 6000
	});
});



$(document).ready(function () {
	'use strict';
	$('.carouselslider').carousel({
		interval: 6000
	});
});




$(document).ready(function () {
	'use strict';
	$('.carousel').carousel({
	interval: false
	});
});





$(document).ready(function () {
	'use strict';
	$("#my-tabs li").click(function () { //get the clicked li id//
		var myID = $(this).attr("id");
		//remove class in active from clicked link and add it to the other li in the same ul//
		$(this).removeClass("inactive").siblings().addClass("inactive");

		$(".my-container div").hide();

		$("#" + myID + "-content").fadeIn("1000");


	});
});




$(document).ready(function () {
	'use strict';
	$(".xxsmennu").click(function () {
		$(".respmen").slideToggle("slow");
	});
});





$(document).scroll(function () {
	"use strict";
	var y = $(this).scrollTop();
	if (y > 100) {
		$('.menuscrolling').fadeIn(1000);
	} else {
		$('.menuscrolling').fadeOut();
	}

});








$(document).ready(function() {
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});



