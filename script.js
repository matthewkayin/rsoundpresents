$(document).ready(function(){
  
});

function toggleMobileNav(){
	
	if($('#mobile-pages').css('height') == '0px'){
		
		$('#mobile-pages').css('height', '280px');
		
	}else{
		
		$('#mobile-pages').css('height', '0px');
	}
}

function expandHeader(){
	
	if($('#n47button').attr('src') == 'btn_plus.png'){
		
		$('#n47button').attr('src', 'btn_minus.png');
		$('#n47-wrapper').css('height', '600px');
		$('.gallery-wrapper-content').css('height', '600px');
		$('.gallery-row').css('height', '200px');
		//$('.gallery-image').css('visibility', 'visible');
		
	}else{
		
		$('#n47button').attr('src', 'btn_plus.png');
		$('#n47-wrapper').css('height', '70px');
		$('.image-row').css('height', '0px');
		$('.gallery-wrapper-content').css('height', '0px');
		$('.gallery-row').css('height', '0px');
		//$('.gallery-image').css('visibility', 'hidden');
	}
}