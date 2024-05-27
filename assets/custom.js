$(document).ready(function(){
  $('.featured-collection-tabs .tab').on('click', function(evt) {
    evt.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
    var sel = this.getAttribute('data-toggle-target');
    $('.featured-collection-tabs .tab-content').removeClass('active').filter(sel).addClass('active');
  });
});