$('.important')
	.css('transition', 'all 2s')
	.css('left', '0px')
	.mouseover(function(){
		$(this)
			.css('left', '200px')
			
	})
	.mouseout(function(){
		$(this)
			.css('left', '0px')
	})

$('img')
	.mouseover(function(){
		$(this)
			.css('transform', 'rotateZ(180deg) rotateX(360deg) rotateY(360deg)')
	})

document.addEventListener('play', function(e){
$('body')
		.css('background', 'green');
}, true)