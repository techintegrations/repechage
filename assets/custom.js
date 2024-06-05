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

  const flickitySlider = new Flickity(".text-with-logos-slider", {
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    freeScroll: false,
    avoidReflow: true,
    wrapAround: true,
  });

  $(".image-slider-with-text .slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".image-slider-with-text .slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    asNavFor: ".image-slider-with-text .slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    verticalSwiping: true,
  });


  
});
