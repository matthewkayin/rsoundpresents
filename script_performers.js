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
	if($(window).width() >= 1308){
		
		$('.content-wrapper').css('width', '88%');
		$('.content-wrapper').css('left', '6%');
	
		$('.p-text').css('font-size', '16px');
		$('.p-text').css('line-height', '24px');
		$('.p-title').css('font-size', '24px');
		
		$('.p-img').css('height', '100%');
		$('.p-img').css('position', 'static');
		$('.p-img').css('top', '0%');
		$('.sm-button').css('left', '180px');
		$('.sm-button').css('top', '-85%');
		$('.p-text').css('left', '185px');
		$('.p-text').css('top', '-95%');
		$('.p-title').css('left', '185px');
		$('.p-title').css('top', '-95%');
	
		$('.p-row').css('height', '200px');
		$('.p-block').css('height', '100%');
		$('.p-block').css('width', '49%');
		$('.p-block-right').css('top', '0px');
		$('.p-block-content').css('width', '92%');
		$('.p-block-content').css('left', '4%');
	
	}else if($(window).width() >= 1284){
	
		$('.content-wrapper').css('width', '90%');
		$('.content-wrapper').css('left', '5%');
		
		$('.p-text').css('font-size', '16px');
		$('.p-text').css('line-height', '24px');
		$('.p-title').css('font-size', '24px');
		
		$('.p-img').css('height', '100%');
		$('.p-img').css('position', 'static');
		$('.p-img').css('top', '0%');
		$('.sm-button').css('left', '180px');
		$('.sm-button').css('top', '-85%');
		$('.p-text').css('left', '185px');
		$('.p-text').css('top', '-95%');
		$('.p-title').css('left', '185px');
		$('.p-title').css('top', '-95%');
	
		$('.p-row').css('height', '200px');
		$('.p-block').css('height', '100%');
		$('.p-block').css('width', '49%');
		$('.p-block-right').css('top', '0px');
		$('.p-block-content').css('width', '92%');
		$('.p-block-content').css('left', '4%');
	
	}else if($(window).width() >= 1254){
	
		$('.content-wrapper').css('width', '92%');
		$('.content-wrapper').css('left', '4%');
		
		$('.p-text').css('font-size', '16px');
		$('.p-text').css('line-height', '24px');
		$('.p-title').css('font-size', '24px');
		
		$('.p-img').css('height', '100%');
		$('.p-img').css('position', 'static');
		$('.p-img').css('top', '0%');
		$('.sm-button').css('left', '180px');
		$('.sm-button').css('top', '-85%');
		$('.p-text').css('left', '185px');
		$('.p-text').css('top', '-95%');
		$('.p-title').css('left', '185px');
		$('.p-title').css('top', '-95%');
	
		$('.p-row').css('height', '200px');
		$('.p-block').css('height', '100%');
		$('.p-block').css('width', '49%');
		$('.p-block-right').css('top', '0px');
		$('.p-block-content').css('width', '92%');
		$('.p-block-content').css('left', '4%');
	
	}else if($(window).width() >= 1200){
	
		$('.content-wrapper').css('width', '96%');
		$('.content-wrapper').css('left', '2%');
		
		$('.p-text').css('font-size', '16px');
		$('.p-text').css('line-height', '24px');
		$('.p-title').css('font-size', '24px');
		
		$('.p-img').css('height', '100%');
		$('.p-img').css('position', 'static');
		$('.p-img').css('top', '0%');
		$('.sm-button').css('left', '180px');
		$('.sm-button').css('top', '-85%');
		$('.p-text').css('left', '185px');
		$('.p-text').css('top', '-95%');
		$('.p-title').css('left', '185px');
		$('.p-title').css('top', '-95%');
	
		$('.p-row').css('height', '200px');
		$('.p-block').css('height', '100%');
		$('.p-block').css('width', '49%');
		$('.p-block-right').css('top', '0px');
		$('.p-block-content').css('width', '92%');
		$('.p-block-content').css('left', '4%');
	
	}else if($(window).width() >= 1156){
	
		$('.content-wrapper').css('width', '96%');
		$('.content-wrapper').css('left', '2%');
		
		$('.p-text').css('font-size', '14px');
		$('.p-text').css('line-height', '20px');
		$('.p-title').css('font-size', '20px');
		
		$('.p-img').css('height', '100%');
		$('.p-img').css('position', 'static');
		$('.p-img').css('top', '0%');
		$('.sm-button').css('left', '180px');
		$('.sm-button').css('top', '-75%');
		$('.p-text').css('left', '185px');
		$('.p-text').css('top', '-95%');
		$('.p-title').css('left', '185px');
		$('.p-title').css('top', '-95%');
		
		$('.p-row').css('height', '200px');
		$('.p-block').css('height', '100%');
		$('.p-block').css('width', '49%');
		$('.p-block-right').css('top', '0px');
		$('.p-block-content').css('width', '92%');
		$('.p-block-content').css('left', '4%');
	
	}else if($(window).width() >= 1044){
	
		$('.content-wrapper').css('width', '96%');
		$('.content-wrapper').css('left', '2%');
		
		$('.p-text').css('font-size', '14px');
		$('.p-text').css('line-height', '20px');
		$('.p-title').css('font-size', '20px');
		
		$('.p-img').css('height', '80%');
		$('.p-img').css('position', 'relative');
		$('.p-img').css('top', '10%');
		$('.sm-button').css('left', '160px');
		$('.sm-button').css('top', '-65%');
		$('.p-text').css('left', '160px');
		$('.p-text').css('top', '-73%');
		$('.p-title').css('left', '160px');
		$('.p-title').css('top', '-73%');
		
		$('.p-row').css('height', '200px');
		$('.p-block').css('height', '100%');
		$('.p-block').css('width', '49%');
		$('.p-block-right').css('top', '0px');
		$('.p-block-content').css('width', '92%');
		$('.p-block-content').css('left', '4%');
	
	}else if($(window).width() >= 978){
	
		$('.content-wrapper').css('width', '96%');
		$('.content-wrapper').css('left', '2%');
		
		$('.p-text').css('font-size', '14px');
		$('.p-text').css('line-height', '20px');
		$('.p-title').css('font-size', '20px');
		
		$('.p-img').css('height', '80%');
		$('.p-img').css('position', 'relative');
		$('.p-img').css('top', '10%');
		$('.sm-button').css('left', '143px');
		$('.sm-button').css('top', '-65%');
		$('.p-text').css('left', '143px');
		$('.p-text').css('top', '-73%');
		$('.p-title').css('left', '143px');
		$('.p-title').css('top', '-73%');
		
		$('.p-row').css('height', '200px');
		$('.p-block').css('height', '100%');
		$('.p-block').css('width', '49.5%');
		$('.p-block-right').css('top', '0px');
		$('.p-block-content').css('width', '98%');
		$('.p-block-content').css('left', '2%');
	
	}else if($(window).width() >= 841){
	
		$('.content-wrapper').css('width', '96%');
		$('.content-wrapper').css('left', '2%');
		
		$('.p-text').css('font-size', '14px');
		$('.p-text').css('line-height', '20px');
		$('.p-title').css('font-size', '20px');
		
		$('.p-img').css('height', '80%');
		$('.p-img').css('position', 'relative');
		$('.p-img').css('top', '10%');
		$('.sm-button').css('left', '160px');
		$('.sm-button').css('top', '-40%');
		$('.p-text').css('left', '160px');
		$('.p-text').css('top', '-73%');
		$('.p-title').css('left', '160px');
		$('.p-title').css('top', '-73%');
		
		$('.p-row').css('height', '420px');
		$('.p-block').css('height', '200px');
		$('.p-block').css('width', '100%');
		$('.p-block-right').css('top', '20px');
		$('.p-block-content').css('width', '98%');
		$('.p-block-content').css('left', '2%');
	
	}else if($(window).width() >= 600){
	
		$('.content-wrapper').css('width', '96%');
		$('.content-wrapper').css('left', '2%');
		
		$('.p-text').css('font-size', '14px');
		$('.p-text').css('line-height', '20px');
		$('.p-title').css('font-size', '20px');
		
		$('.p-img').css('height', '80%');
		$('.p-img').css('position', 'relative');
		$('.p-img').css('top', '10%');
		$('.sm-button').css('left', '160px');
		$('.sm-button').css('top', '-55%');
		$('.p-text').css('left', '160px');
		$('.p-text').css('top', '-73%');
		$('.p-title').css('left', '160px');
		$('.p-title').css('top', '-73%');
		
		$('.p-row').css('height', '420px');
		$('.p-block').css('height', '200px');
		$('.p-block').css('width', '100%');
		$('.p-block-right').css('top', '20px');
		$('.p-block-content').css('width', '98%');
		$('.p-block-content').css('left', '2%');
	
	//SMALLEST STATE
	}else{
		
		
	}
}