(function( $ ){

	$.fn.search = function( options ) {  

		var settings = $.extend( {
			'speed'         : 600
		}, options);

		var textBoxVal = this.val();
		var textbox = this;
		var startColor = this.css('color');

		return this.each(function() {        

			$('.search').focus(function(){
				if($(this).val() == textBoxVal){
					$(this).animate({
						color: '#fff'
					}, options.speed, 'linear', 
					function(){
						$(this).val('').css('color','#000'); 
					});
				}
			}).blur(function(){
				if($(this).val() == ''){
					$(this).val(textBoxVal).css('color','#fff');
					$(this).animate({
						color: startColor
					}, options.speed, 'linear');
				}
			});
		});
	};
})( jQuery );
