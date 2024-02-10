document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.querySelector('#header-social-icons');
	var searchButtonMobile = document.querySelector('#header-search-icon-mobile');
    var headerSearchForm = document.querySelector('#header-search-form');
  
    searchButton.addEventListener('click', function() {
      headerSearchForm.classList.toggle('active');
    });
    
	searchButtonMobile.addEventListener('click', function() {
      	headerSearchForm.classList.toggle('active');
		var menuOpen= document.querySelector('.jet-mobile-menu__container');
		if (menuOpen) {
		    // The div with the specified class does not exist, run your function
			 var myButton = document.querySelector('.jet-mobile-menu__toggle-icon');
			// Check if the element is found
			if (myButton) {
				// Trigger a click event on the button element
				myButton.click();
				headerSearchForm.classList.add('active');
			}
		}

    });
	
	
	
  });

document.addEventListener('DOMContentLoaded', function() {
    var countryBlock = document.querySelector('#CountryClickable');
    var headerSearchFormData = document.querySelector('#header-search-form');
  
    countryBlock.addEventListener('click', function() {
      headerSearchFormData.classList.remove('active');
    });
  });


jQuery(document).ready(function($) {
// 	console.log('here 2');
	$('.jet-mobile-menu__toggle-icon').click(function() {
// 		console.log('here');
		if ($('.jet-mobile-menu-cover').is(':visible')) {
			$('html').css('overflow', 'auto');
		} else {
			$('html').css('overflow', 'hidden');
		}
	});
});


jQuery(document).ready(function($) {
    // Add descriptions under navigation menu items
    $('.menu-item-has-description').each(function() {
        var description = $(this).find('.menu-item-description').html();
        if (description) {
            $(this).find('a').append('<span class="menu-item-description">' + description + '</span>');
        }
    });
});


// $(document).ready(function () {
//     if ($("#header-search-form").hasClass("active")) {
//         $("#header-search-form .jet-mobile-menu-cover, #header-search-form .jet-mobile-menu__container").css("display", "none!important");
//     }
// });

// ss - added in for skip to content
document.addEventListener("DOMContentLoaded", function() {
    document.body.id = 'top';
});
