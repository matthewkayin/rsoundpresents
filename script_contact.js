$(document).ready(function(){
  
	windowResize();
	
	$(window).on('resize', function(){
		
		windowResize();
	});
});

function windowResize(){
	
	console.log($(window).width());
	
	//NOTE TO SELF
	//DO ALL THE # ELEMENTS A F T E R THE . ELEMENTS
	
	//DEFAULT STATE
	if($(window).width() >= 900){
		
		$('.content-wrapper').css('width', '88%');
		$('.content-wrapper').css('left', '6%');
		
	}else if($(window).width() >= 800){
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
	
	}else if($(window).width() >= 700){
	
		$('.content-wrapper').css('width', '94%');
		$('.content-wrapper').css('left', '3%');
	
	//SMALLEST STATE
	}else{
		
		$('.content-wrapper').css('width', '98%');
		$('.content-wrapper').css('left', '1%');
	}
}