jQuery (document ).ready(function($){


/**
 * ----------------------------------------------------------------------------
 *
 *  Mobile Menu Logic
 *
 * ----------------------------------------------------------------------------
 */
 

 var menuWidth = $(".site-navigation-container .menu").width();
 var totalWidth = 0;
 $(".site-navigation-container .menu > ul > li").each(function() {
		totalWidth = totalWidth  + $(this).width();
 });


 function mobileMenu() {
	  var windowWidth = $(window).width();
	  var menuWidth = $(".site-navigation-container .menu").width();
	   /*$(".menu > ul > li").each(function() {
			totalWidth = totalWidth  + $(this).width();
 		});*/
	 
	 //console.log(totalWidth + " " + menuWidth);

	 if(windowWidth < 600) {		
		$(".navcornerleft").css("visibility","hidden");
		$(".navcornerright").css("visibility","hidden");
		$(".collegeFeature, .collegeFeature2").css("width","100%").css("margin-top","5em");
		$("#main").css("margin-top", "4.58em");
		//$("#page").css("margin-top", "4.65em");
		$("footer .inner").css("width","100%");
		$(".mobileTrigger").show();
		$(".logoImage").addClass("mobileMenuOn");
		$("#access").css("visibility","hidden").css("position", "absolute");
		subMobileMenu();
	 } else {
	 
		 if(totalWidth > menuWidth) {
			 //console.log("switch to mobile");
			 $(".navcornerleft").css("visibility","hidden");
			 $(".navcornerright").css("visibility","hidden");
			 $(".collegeFeature, .collegeFeature2").css("width","100%").css("margin-top","5em");
			 $("#main").css("margin-top", "4.58em");
			 //$("#page").css("margin-top", "4.65em");
			 $("footer .inner").css("width","100%");
			 $(".mobileTrigger").show();
			 $(".logoImage").addClass("mobileMenuOn");
			 $("#access").css("visibility","hidden").css("position", "absolute");
			 subMobileMenu();
		 } else {
			 if(totalWidth == 0) {
				 //console.log("switch to mobile");
				 $(".navcornerleft").css("visibility","hidden");
				 $(".navcornerright").css("visibility","hidden");
				 $(".collegeFeature, .collegeFeature2").css("width","80%").css("margin-top","5em");
				 $("#page").css("margin-top", "4.65em");
				 $("footer .inner").css("width","100%");
				 $("#main").css("margin-top", "4.58em");
				 $(".mobileTrigger").show();
				 $(".logoImage").addClass("mobileMenuOn");
				 $("#access").css("visibility","hidden").css("position", "absolute");
				 subMobileMenu();
			 } else {
				 //console.log("switch to full");		
				 $(".navcornerleft").css("visibility","visible");
				 $(".navcornerright").css("visibility","visible");
				 $(".collegeFeature, .collegeFeature2").css("width","92.4%");
				 $("footer .inner").css("width","95%");
				 $(".blog .inner").css("width","97.6%");
				 //$("#page").css("margin-top", "0");
				 $(".collegeFeature2").css("margin-top","0");
				 $("#main").css("margin-top", "0");
				 $(".mobileTrigger").hide();
				 $(".logoImage").removeClass("mobileMenuOn");
				 $("#access").css("visibility","visible").css("position", "relative");	

			 }
		 }
	 
	 }
	
}

mobileMenu();

$(window).resize(function() {
	mobileMenu();
});

$(".mobileTrigger, .menuOverlay").click(function(e) {
	e.preventDefault();
	
	$(".mobileMenu").toggleClass("mobileMenuShown");
	$(".menuOverlay").toggleClass("mobileMenuShown");
	$("#page").toggleClass("blur");
}); 


/**
 * ----------------------------------------------------------------------------
 *
 *  Sub Menu Logic
 *
 * ----------------------------------------------------------------------------
 */
function subMobileMenu(){


	//SUB-LEVEL 1
	$('.mobileMenu a').click(function(event){
		
		//Create variable for current element
		var elem = $(this);

		//Check if the parent container of div has children links
		if ($(elem).parent().hasClass('page_item_has_children')){
		event.preventDefault();
		
		//Grab submenu content and links
		var subMenu = $(elem).next().html();
		var elemText = $(elem).text() + " Overview";
		var elemHref = $(elem).attr("href");

		//Creating a label for overview link and back link
		var overviewLink = "<li class=menu-item><a href='"+elemHref+"'>"+elemText+"</a></li>";
		var backLink = "<li class=menu-item><a href='#' class='backLevel1'>Back</a></li>";

		//Adding sub menu divs ontop of mobile menu div
		$(".mobileMenu").append("<div class='subLevel1'></div>");
		$(".subLevel1").append(subMenu).prepend(overviewLink).prepend(backLink);

		//Delays the adding in sublevel for css transitions
		setTimeout(function() {
			//adds visible class
			$(".subLevel1").addClass("visible");	
			},300);
		

		//implement back link
		$(".backLevel1").click(function(b) {
			b.preventDefault();

			$(".subLevel1").removeClass("visible");
			//Delays the removal for sublevel for css transitions
			setTimeout(function() {
				$(".subLevel1").remove();
			},300);

		});

			//SUB-LEVEL 2
			$('.subLevel1 a').click(function(event){
		
			//Create variable for current element
			var elem = $(this);

			//Check if the parent container of div has children links
			if ($(elem).parent().hasClass('page_item_has_children')){
			event.preventDefault();
		
			//Grab submenu content and links
			var subMenu = $(elem).next().html();
			var elemText = $(elem).text() + " Overview";
			var elemHref = $(elem).attr("href");

			//Creating a label for overview link and back link
			var overviewLink = "<li class=menu-item><a href='"+elemHref+"'>"+elemText+"</a></li>";
			var backLink = "<li class=menu-item><a href='#' class='backLevel1'>Back</a></li>";

			//Adding sub menu divs ontop of mobile menu div
			$(".subLevel1").append("<div class='subLevel2'></div>");
			$(".subLevel2").append(subMenu).prepend(overviewLink).prepend(backLink);

			//Delays the adding in sublevel for css transitions
			setTimeout(function() {
				//adds visible class
				$(".subLevel2").addClass("visible");	
				},300);
		

			//implement back link
			$(".backLevel1").click(function(b) {
				b.preventDefault();

				$(".subLevel2").removeClass("visible");
				//Delays the removal for sublevel for css transitions
				setTimeout(function() {
					$(".subLevel2").remove();
				},300);

			});
 			}


				//SUB-LEVEL 3
				$('.subLevel2 a').click(function(event){
		
				//Create variable for current element
				var elem = $(this);

				//Check if the parent container of div has children links
				if ($(elem).parent().hasClass('page_item_has_children')){
				event.preventDefault();
		
				//Grab submenu content and links
				var subMenu = $(elem).next().html();
				var elemText = $(elem).text() + " Overview";
				var elemHref = $(elem).attr("href");

				//Creating a label for overview link and back link
				var overviewLink = "<li class=menu-item><a href='"+elemHref+"'>"+elemText+"</a></li>";
				var backLink = "<li class=menu-item><a href='#' class='backLevel1'>Back</a></li>";

				//Adding sub menu divs ontop of mobile menu div
				$(".subLevel2").append("<div class='subLevel3'></div>");
				$(".subLevel3").append(subMenu).prepend(overviewLink).prepend(backLink);

				//Delays the adding in sublevel for css transitions
				setTimeout(function() {
					//adds visible class
					$(".subLevel3").addClass("visible");	
					},300);
		

				//implement back link
				$(".backLevel1").click(function(b) {
					b.preventDefault();

					$(".subLevel3").removeClass("visible");
					//Delays the removal for sublevel for css transitions
					setTimeout(function() {
						$(".subLevel3").remove();
					},300);

					});
 				}
				});

			});


 		}
	});

 }
//subMobileMenu();

});