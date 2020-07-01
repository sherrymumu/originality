$(function(){

$('#detail').click(function(){
	$('#freh2').hide();
	$('#freh').show();
	$('#detail').css('border','1px solid #DDD');
	$('#review').css('border','1px solid #FFF');
});

$('#review').click(function(){
	$('#freh').hide();
	$('#freh2').show();
	$('#review').css('border','1px solid #DDD');
	$('#detail').css('border','1px solid #FFF');

});
    
	
	
});