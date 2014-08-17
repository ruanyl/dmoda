(function($){
	"use strict";
	$(document).ready(function(){
		$("#burgerIcon").click(function(){
			$("#mobileMenu").toggleClass("active");
			$("#content").toggleClass("hidden");
		});
	});
})(jQuery);