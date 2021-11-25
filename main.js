(function($) {

	"use strict";
   $(window).load(function() {

    	$("#loader").fadeOut("slow", function(){
			
        $("#preloader").delay(300).fadeOut("slow");

      });       
	  

  	})

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });


  	});

(jQuery);