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

  // Initialize Flickity slider
  // const flickitySlider4 = new Flickity('#cart-sample-product .sample-product-row', {
  //     cellAlign: 'left',
  //     contain: true,
  //     prevNextButtons: true,
  //     pageDots: true,
  //     freeScroll: false,
  //     avoidReflow: true,
  //     wrapAround: true,
  // });

  // // Attach click event handler to button
  // document.querySelector('.sample-product-btn').addEventListener('click', function() {
  //     // Use setTimeout to delay the resize by 2 seconds (2000 milliseconds)
  //     setTimeout(function() {
  //         flickitySlider4.resize(); // Resize Flickity slider
  //     }, 500);
  // });

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

// $('.custom-announcement-slider').slick({
//     speed: 10000,
//     autoplay: true,
//     autoplaySpeed: 0,
//     centerMode: true,
//     cssEase: 'linear',
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     variableWidth: true,
//     infinite: true,
//     initialSlide: 1,
//     arrows: false,
//     buttons: false
// });


  // $('.custom-announcement-slider').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     fade: true,
  //     cssEase: 'linear',
  //     autoplay: false, // Optional: for automatic slide transition
  //     autoplaySpeed: 3000, // Optional: adjust the speed as needed
  //     arrows: true, // Optional: to show next/prev arrows
  //     dots: false
  // });


  
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
