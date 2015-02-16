'use strict';

/** @namespace */
var sgFlux = window.sgFlux || {};

sgFlux.framework = (function(sgFlux, window, document, $){

	$(function(){
		$('.checkbox input').iCheck({
		    checkboxClass: 'icheckbox_flat',
		    increaseArea: '20%'
		});

		$('.radio input').iCheck({
		    radioClass: 'iradio_flat',
		    increaseArea: '20%'
		});

		$('.selecter_1').selecter();

		$('.selecter_2').selecter();

		$('.selecter_3').selecter();

		$('.selecter_4').selecter();

		$('.selecter_5').selecter();

		$('.selecter_6').selecter();

		$('.tooltip-demo').tooltip({
		  selector: '[data-toggle=tooltip]',
		  container: 'body'
		});

		$('#accordion1').collapse();
		$('#accordion2').collapse();
	});

})(window.sgFlux, window, document, window.jQuery);