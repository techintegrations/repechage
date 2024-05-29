$(document).ready(function(){

  $('.featured-collection-tabs .tab').on('click', function(evt) {
    evt.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
    var sel = this.getAttribute('data-toggle-target');
    $('.featured-collection-tabs .tab-content').removeClass('active').filter(sel).addClass('active');
  });


  $('.product-tabs .tab').on('click', function(evt) {
    evt.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
    var sel = this.getAttribute('data-toggle-target');
    $('.product-tabs .tab-content').removeClass('active').filter(sel).addClass('active');
  });


  // $('.text-with-logos-slider').flickity({
  //   cellAlign: 'left',
  //   contain: true,
  //   prevNextButtons: true,
  //   pageDots: false,
  //   freeScroll: false,
  //   avoidReflow: true,
  //   wrapAround: true
  // });


  const flickitySlider = new Flickity('.text-with-logos-slider', {
      contain: true,
      prevNextButtons: true,
      pageDots: false,
      freeScroll: false,
      avoidReflow: true,
      wrapAround: true
  });



   
  
});
