$(document).ready(function(){
  
	windowResize();
	
	$(window).on('resize', function(){
		
		windowResize();
	});
});

function expandHeader(nbutton, nwrapper, ncontent, nrow){
	
	if($(nbutton).attr('src') == 'btn_plus.png'){
		
		var expandedHeight = 0;
		
		if(nwrapper == '#n47-wrapper'){
			
			if($(window).width() >= 1410){
			
				expandedHeight = '1000px';
			
			}else if($(window).width() >= 1247){
			
				expandedHeight = '1220px';
			
			}else if($(window).width() >= 845){
			
				expandedHeight = '1460px';
			
			}else{
			
				expandedHeight = '2180px';
			}
			
		}else if(nwrapper == '#n49-wrapper'){
			
			if($(window).width() >= 1410){
			
				expandedHeight = '770px';
			
			}else if($(window).width() >= 1247){
			
				expandedHeight = '770px';
			
			}else if($(window).width() >= 845){
			
				expandedHeight = '1000px';
			
			}else{
			
				expandedHeight = '1470px';
			}
		}
		
		$(nbutton).attr('src', 'btn_minus.png');
		$(nwrapper).css('height', expandedHeight);
		$(ncontent).css('height', expandedHeight);
		$(nrow).css('height', '200px');
		
	}else{
		
		$(nbutton).attr('src', 'btn_plus.png');
		$(nwrapper).css('height', '70px');
		$(ncontent).css('height', '0px');
		$(nrow).css('height', '0px');
	}
}

function hideForm(){
	
	window.alert("test");
}

function windowResize(){
	
	console.log($(window).width());
	
	//NOTE TO SELF
	//DO ALL THE # ELEMENTS A F T E R THE . ELEMENTS
	
	//DEFAULT STATE
	if($(window).width() >= 1410){
		
		$('.gallery-image-container').css('left', '4%');
		$('.gallery-image-container').css('right', '3%');
		$('.gallery-image-container').css('width', '16%');
		
		if($('#n47button').attr('src') == 'btn_minus.png'){
		
			$('#n47-wrapper').css('height', '1000px');
			$('#n47-content').css('height', '1000px');
		}
		
		if($('#n49button').attr('src') == 'btn_minus.png'){
		
			$('#n49-wrapper').css('height', '770px');
			$('#n49-content').css('height', '770px');
		}
	
	}else if($(window).width() >= 1247){
		
		$('.gallery-image-container').css('left', '4%');
		$('.gallery-image-container').css('right', '3%');
		$('.gallery-image-container').css('width', '21%');
		
		if($('#n47button').attr('src') == 'btn_minus.png'){
		
			$('#n47-wrapper').css('height', '1220px');
			$('#n47-content').css('height', '1220px');
		}
		
		if($('#n49button').attr('src') == 'btn_minus.png'){
		
			$('#n49-wrapper').css('height', '770px');
			$('#n49-content').css('height', '770px');
		}
	
	}else if($(window).width() >= 845){
		
		$('.gallery-image-container').css('left', '4%');
		$('.gallery-image-container').css('right', '3%');
		$('.gallery-image-container').css('width', '26%');
	
		if($('#n47button').attr('src') == 'btn_minus.png'){
		
			$('#n47-wrapper').css('height', '1460px');
			$('#n47-content').css('height', '1460px');
		}
	
		if($('#n49button').attr('src') == 'btn_minus.png'){
		
			$('#n49-wrapper').css('height', '1000px');
			$('#n49-content').css('height', '1000px');
		}
	
	}else if($(window).width() >= 600){
		
		$('.gallery-image-container').css('left', '4%');
		$('.gallery-image-container').css('right', '3%');
		$('.gallery-image-container').css('width', '40%');
	
		if($('#n47button').attr('src') == 'btn_minus.png'){
		
			$('#n47-wrapper').css('height', '2180px');
			$('#n47-content').css('height', '2180px');
		}
		
		if($('#n49button').attr('src') == 'btn_minus.png'){
		
			$('#n49-wrapper').css('height', '1470px');
			$('#n49-content').css('height', '1470px');
		}
	
	//SMALLEST STATE
	}else{
		
		$('.gallery-image-container').css('left', '50px');
		$('.gallery-image-container').css('right', '40px');
		$('.gallery-image-container').css('width', '200px');
	}
}