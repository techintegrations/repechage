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

  
  $('.custom-announcement-slider').slick({
      vertical: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false,
      prevArrow: "<button type='button' class='slick-prev pull-left'><img src='https://cdn.shopify.com/s/files/1/0834/3901/files/right-arrow.png?v=1722628806'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><img src='https://cdn.shopify.com/s/files/1/0834/3901/files/right-arrow.png?v=1722628806'></button>",
      responsive: [
      {
          breakpoint: 992, // Adjust this value based on your mobile breakpoint
          settings: {
            slidesToShow: 1,
            vertical: false,
            arrows: true,
            dots: false,
            fade: false,
            fade: true
        }
    }
    ]
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
  
    const flickitySlider5 = new Flickity(".text-with-logos-mb-slider", {
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
