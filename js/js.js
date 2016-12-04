
$(document).ready(function(){
	

	// TOC, shows how to scroll the whole window
	 $(".label_better").label_better({
	      easing: "bounce"
	    }); 

	$("nav").sticky({
		topSpacing: 0
	});

	$('nav ul li .link').click(function(){
		$.scrollTo( this.hash, 1000, { easing:'swing' });
		return false;
	});

	$(".principal .rotate").textrotator({
		animation: "fade",
		speed: 1450
	});

	$(".empresas").owlCarousel({
		 autoPlay: 3000,

		items : 4,
     	itemsDesktop : [1199,3],
      	itemsDesktopSmall : [979,3]
	});

	$("#openVia").click(function(){
		$(".oneOpenViaOneCss").plainModal('open', {
			duration:       200,
			effect: {open: $.fn.fadeIn, close: $.fn.fadeOut},
			overlay:{color: '#000', opacity: 0.3},
			closeClass:     'cerrarOpen'
			});
	});

	$(".openViaTwo").click(function(){
		$(".oneOpenViaTwooCss").plainModal('open', {
			duration:       200,
			effect: {open: $.fn.fadeIn, close: $.fn.fadeOut},
			overlay:{color: '#000', opacity: 0.3},
			closeClass:     'cerrarOpen'
			});
	});

	$(".openViaTree").click(function(){
		$(".oneOpenViaFourCss").plainModal('open', {
			duration:       200,
			effect: {open: $.fn.fadeIn, close: $.fn.fadeOut},
			overlay:{color: '#000', opacity: 0.3},
			closeClass:     'cerrarOpen'
			});
	});

	$(".openViaFive").click(function(){
		$(".oneOpenViaSeventCss").plainModal('open', {
			duration:       200,
			effect: {open: $.fn.fadeIn, close: $.fn.fadeOut},
			overlay:{color: '#000', opacity: 0.3},
			closeClass:     'cerrarOpen'
			});
	});

	$(".openViaSix").click(function(){
		$(".oneOpenViaEightCss").plainModal('open', {
			duration:       200,
			effect: {open: $.fn.fadeIn, close: $.fn.fadeOut},
			overlay:{color: '#000', opacity: 0.3},
			closeClass:     'cerrarOpen'
			});
	});

	$(".openViaSeven").click(function(){
		$(".oneOpenViaNineCss").plainModal('open', {
			duration:       200,
			effect: {open: $.fn.fadeIn, close: $.fn.fadeOut},
			overlay:{color: '#000', opacity: 0.3},
			closeClass:     'cerrarOpen'
			});
	});

	$(".openViaEight").click(function(){
		$(".oneOpenViaTeenCss").plainModal('open', {
			duration:       200,
			effect: {open: $.fn.fadeIn, close: $.fn.fadeOut},
			overlay:{color: '#000', opacity: 0.3},
			closeClass:     'cerrarOpen'
			});
	});

	//Ajax 
	$(".enviar").click(function(e){
	 $(this).val('Enviar Mensaje');
	 var email = $('#contactar input[name="email"]').val();
	 if (email != '') {

	  	var data = $('#contactar').serialize();
	  	
		 $.ajax({
		  type: "post",
		  url: "ajax/enviado.php",
		  data: data,
		  dataType: "html",
		  cache: false,
		  success: function(data){
		 	 $(".none").css("display","block");
		 	 $("#contactar input").val('');
		   	 $("#contactar textarea").val('');
		  }
		 }).fail(function() {
		  	
		 });
	 }
	  e.preventDefault();
	});
	
});

