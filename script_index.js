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
	if($(window).width() >= 1426){
		
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '44%');
		$('.landing-button').css('width', '12%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '825px');
		
		$('.hosts-panel').css('width', '70%');
		$('.hosts-panel').css('left', '15%');
		$('.about-text').css('width', '50%');
		$('.about-text').css('left', '25%');
		
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '24px');
		$('.host-img').css('width', '200px');
		$('.host-img').css('height', '200px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '0px');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '7%');
		
	/*
		STATE 1
		kelsey text inch right
	*/
	}else if($(window).width() >= 1367){
		
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '44%');
		$('.landing-button').css('width', '12%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '825px');
		
		$('.hosts-panel').css('width', '70%');
		$('.hosts-panel').css('left', '15%');
		$('.about-text').css('width', '50%');
		$('.about-text').css('left', '25%');
		
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '24px');
		$('.host-img').css('width', '200px');
		$('.host-img').css('height', '200px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '0px');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '6%');
		
	/*
		STATE 2
		kelsey text inch right
	*/
	}else if($(window).width() >= 1305){
		
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '44%');
		$('.landing-button').css('width', '12%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '825px');
		
		$('.hosts-panel').css('width', '70%');
		$('.hosts-panel').css('left', '15%');
		$('.about-text').css('width', '50%');
		$('.about-text').css('left', '25%');
		
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '24px');
		$('.host-img').css('width', '200px');
		$('.host-img').css('height', '200px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '0px');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '5%');
		
	/*
		STATE 3
		kelsey text inch right
	*/
	}else if($(window).width() >= 1320){	
		
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '44%');
		$('.landing-button').css('width', '12%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '825px');
		
		$('.hosts-panel').css('width', '70%');
		$('.hosts-panel').css('left', '15%');
		$('.about-text').css('width', '50%');
		$('.about-text').css('left', '25%');
		
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '24px');
		$('.host-img').css('width', '200px');
		$('.host-img').css('height', '200px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '0px');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '4%');
		
	/*
		STATE 4
		kelsey text inch right
	*/
	}else if($(window).width() >= 1222){
		
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '44%');
		$('.landing-button').css('width', '12%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '825px');
		
		$('.hosts-panel').css('width', '70%');
		$('.hosts-panel').css('left', '15%');
		$('.about-text').css('width', '50%');
		$('.about-text').css('left', '25%');
		
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '24px');
		$('.host-img').css('width', '200px');
		$('.host-img').css('height', '200px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '0px');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '3%');
		
	/*
		STATE 5
		kelsey text inch right
		hosts font size down
	*/
	}else if($(window).width() >= 1170){	
	
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '44%');
		$('.landing-button').css('width', '12%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '825px');
	
		$('.hosts-panel').css('width', '70%');
		$('.hosts-panel').css('left', '15%');
		$('.about-text').css('width', '50%');
		$('.about-text').css('left', '25%');
	
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '22px');
		$('.host-img').css('width', '200px');
		$('.host-img').css('height', '200px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '0px');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '2%');
	
	/*
		STATE 6
		kelsey text inch right
		shrink host image
		bring xan and kenon text closer to shrinked image
	*/
	}else if($(window).width() >= 1104){	
	
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '44%');
		$('.landing-button').css('width', '12%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '825px');
	
		$('.hosts-panel').css('width', '70%');
		$('.hosts-panel').css('left', '15%');
		$('.about-text').css('width', '50%');
		$('.about-text').css('left', '25%');
	
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '22px');
		$('.host-img').css('width', '170px');
		$('.host-img').css('height', '170px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '20px');
		$('.hosts-textholder').css('left', '-15px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '0%');
	
	/*
		STATE 7
		expand content container widths
	*/
	}else if($(window).width() >= 966){
	
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '44%');
		$('.landing-button').css('width', '12%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '825px');
	
		$('.hosts-panel').css('width', '80%');
		$('.hosts-panel').css('left', '10%');
		$('.about-text').css('width', '70%');
		$('.about-text').css('left', '15%');
	
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '22px');
		$('.host-img').css('width', '170px');
		$('.host-img').css('height', '170px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '20px');
		$('.hosts-textholder').css('left', '-15px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '0%');
	
	/*
		STATE 8
		expand content container widths
	*/
	}else if($(window).width() >= 899){
		
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '43%');
		$('.landing-button').css('width', '14%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '800px');
		
		$('.hosts-panel').css('width', '86%');
		$('.hosts-panel').css('left', '7%');
		$('.about-text').css('width', '70%');
		$('.about-text').css('left', '15%');
	
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '22px');
		$('.host-img').css('width', '170px');
		$('.host-img').css('height', '170px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '20px');
		$('.hosts-textholder').css('left', '-15px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '0%');
	
	/*
		STATE 9
		expand content container widths
	*/
	}else if($(window).width() >= 859){
	
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '42%');
		$('.landing-button').css('width', '16%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '800px');
	
		$('.hosts-panel').css('width', '90%');
		$('.hosts-panel').css('left', '5%');
		$('.about-text').css('width', '80%');
		$('.about-text').css('left', '10%');
	
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '22px');
		$('.host-img').css('width', '170px');
		$('.host-img').css('height', '170px');
		$('.himg-container').css('width', '200px');
		$('.himg-container').css('height', '200px');
		$('.host-img').css('padding-top', '20px');
		$('.hosts-textholder').css('left', '-15px');
		$('.hosts-textholder').css('top', '15%');
		$('#kelsey-textholder').css('left', '0%');
	
	/*
		STATE 10
		decrease image size and image container size
		adjust textboxes accordingly
	*/
	}else if($(window).width() >= 800){
	
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '42%');
		$('.landing-button').css('width', '16%');
	
		$('.content-wrapper').css('width', '88%');
		$('.content-wrapper').css('left', '6%');
		$('#hosts-wrapper').css('height', '800px');
	
		$('.hosts-panel').css('width', '90%');
		$('.hosts-panel').css('left', '5%');
		$('.about-text').css('width', '80%');
		$('.about-text').css('left', '10%');
	
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '22px');
		$('.host-img').css('width', '150px');
		$('.host-img').css('height', '150px');
		$('.himg-container').css('width', '150px');
		$('.himg-container').css('height', '150px');
		$('.host-img').css('padding-top', '20px');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '10%');
		$('#kelsey-textholder').css('left', '6%');
	
	/*
		STATE 11
		decrease text sizes
	*/
	}else if($(window).width() >= 765){
	
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '42%');
		$('.landing-button').css('width', '16%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '800px');
	
		$('.hosts-panel').css('width', '90%');
		$('.hosts-panel').css('left', '5%');
		$('.about-text').css('width', '80%');
		$('.about-text').css('left', '10%');
	
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '20px');
		$('.host-img').css('width', '150px');
		$('.host-img').css('height', '150px');
		$('.himg-container').css('width', '150px');
		$('.himg-container').css('height', '150px');
		$('.host-img').css('padding-top', '20px');
		$('.hosts-textholder').css('width', '70%');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '10%');
		$('#kelsey-textholder').css('left', '6%');
	
	/*
		STATE 12
		decrease text sizes
	*/
	}else if($(window).width() >= 744){
	
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '42%');
		$('.landing-button').css('width', '16%');
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		$('#hosts-wrapper').css('height', '780px');
	
		$('.hosts-panel').css('width', '90%');
		$('.hosts-panel').css('left', '5%');
		$('.about-text').css('width', '80%');
		$('.about-text').css('left', '10%');
	
		$('.hosts-desc').css('font-size', '16px');
		$('.hosts-desc').css('line-height', '20px');
		$('.host-img').css('width', '150px');
		$('.host-img').css('height', '150px');
		$('.himg-container').css('width', '150px');
		$('.himg-container').css('height', '150px');
		$('.host-img').css('padding-top', '20px');
		$('.hosts-textholder').css('width', '75%');
		$('.hosts-textholder').css('left', '5px');
		$('.hosts-textholder').css('top', '10%');
		$('#kelsey-textholder').css('left', '0%');
	
	/*
		STATE 13
		decrease text sizes
	*/
	}else if($(window).width() >= 669){
	
		$('#landing-tag1').css('font-size', '56px');
		$('#landing-tag1').css('transform', 'scaleY(1.6)');
		$('.landing-button').css('left', '41%');
		$('.landing-button').css('width', '18%');
	
		$('.content-wrapper').css('width', '96%');
		$('.content-wrapper').css('left', '2%');
		$('#hosts-wrapper').css('height', '770px');
	
		$('.hosts-panel').css('