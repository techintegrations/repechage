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



  document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.text-with-logos-slider');
    var flkty = new Flickity(elem, {
      cellAlign: 'left',
      contain: true
    });
  });

   
  
});
