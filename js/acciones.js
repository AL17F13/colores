// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	if ($('#divjuego'))
	{
		$('#colorverde').on('click', function(){
			$('#resul').append('1')
		});
		$('#colorblanco').on('click', function(){
			$('#resul').append('2')
		});
		$('#colorrojo').on('click', function(){
			$('#resul').append('3')
		});
		$('#colorazul').on('click', function(){
			$('#resul').append('4')
		});
	}
	
//}); 
});

