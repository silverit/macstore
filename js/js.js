$(document).ready(function(){
  	$('.menu-opener').click(function(){
  		$('.menu-mobile').slideToggle();
  	})
  	var slider = $('.bxslider').bxSlider({
	  pagerCustom: '#bx-pager'
	});
  	$('#bx-pager a').on('hover', function() {
		silder.goToSlide($(this).attr('data-slide-index'));
	});
	$("#bx-pager a").hover(function(){
     var newSlideNo = $(this).attr('data-slide-index')
     if(newSlideNo != slider.getCurrentSlide()){
        slider.goToSlide(newSlideNo);
     }
  });
  	// $('.bxslider').bxSlider();


  	var quantity = $('#quantity')
    // This button will increment the value
    $('.quantity-plus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        var currentVal = parseInt(quantity.val());
        if (!isNaN(currentVal)) {
            quantity.val(currentVal + 1);
        } else {            
           quantity.val(1);
        }
    });
    // This button will decrement the value till 0
    $(".quantity-minus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt(quantity.val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 1) {
            quantity.val(currentVal - 1);
        } else {
            quantity.val(1);
            
        }
    });

});