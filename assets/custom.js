$(document).ready(function () {
  $(".featured-collection-tabs .tab").on("click", function (evt) {
    evt.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
    var sel = this.getAttribute("data-toggle-target");
    $(".featured-collection-tabs .tab-content")
      .removeClass("active")
      .filter(sel)
      .addClass("active");
  });

  $(".product-tabs .tab").on("click", function (evt) {
    evt.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
    var sel = this.getAttribute("data-toggle-target");
    $(".product-tabs .tab-content")
      .removeClass("active")
      .filter(sel)
      .addClass("active");
  });

  const flickitySlider1 = new Flickity(".text-with-logos-slider", {
      cellAlign: "center",
      contain: true,
      prevNextButtons: true,
      pageDots: true,
      freeScroll: false,
      avoidReflow: true,
      wrapAround: true,
  });
  
  const flickitySlider2 = new Flickity(".product-ingredients-slider", {
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: true,
      freeScroll: false,
      avoidReflow: true,
      wrapAround: true,
  });

  const flickitySlider3 = new Flickity(".product-list-block_slider", {
      cellAlign: "left",
      contain: true,
      prevNextButtons: true,
      pageDots: true,
      freeScroll: false,
      avoidReflow: true,
      wrapAround: true,
  });





  $(document).ready(function() {
    $('.site-nav__item').hover(
      function() { // Mouse enter
        var itemClass = $(this).attr('class').split(' ')[0]; // Get the first class of the <li>
        $(this).find('.custom-grid.grid__item.' + itemClass).addClass('open');
      },
      function() { // Mouse leave
        var itemClass = $(this).attr('class').split(' ')[0];
        $(this).find('.custom-grid.grid__item.' + itemClass).removeClass('open');
      }
    );
  });

$(".image-slider-with-text .slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  fade: true,
  asNavFor: ".slider-nav",
  prevArrow: '.custom-arrows .left-arrow',
  nextArrow: '.custom-arrows .right-arrow'
});

$(".image-slider-with-text .slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: false,
  asNavFor: ".image-slider-with-text .slider-for",
  dots: false,
  arrows: false,
  focusOnSelect: true,
  verticalSwiping: false,
});



if (window.outerWidth < 769) {
  $('.text-with-icons__blocks-slider').slick({
    arrows: false, // Common setting for all breakpoints
    dots: true, // Common setting for all breakpoints
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });



  const flickitySlider4 = new Flickity(".text-with-logos-mb-slider", {
      cellAlign: "center",
      contain: true,
      prevNextButtons: false,
      pageDots: true,
      freeScroll: false,
      avoidReflow: true,
      wrapAround: true,
  });
  
}


  
});
