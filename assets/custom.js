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

  var $stickyAddToCart = $(".sticky-add-to-cart-section");
    var scrollThreshold = 1000; // Adjust this value to determine "two to three steps"

    $(window).on("scroll", function() {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition >= scrollThreshold) {
            $stickyAddToCart.addClass("show-sticky-bar");
        } else {
            $stickyAddToCart.removeClass("show-sticky-bar");
        }
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

// Frequently Boughts

document.addEventListener('DOMContentLoaded', function () {
  // Get discount value from the metafield
  const discountPercentage = parseFloat(document.querySelector('.discounts .value').textContent);

  // Function to calculate discounted price
  function calculateDiscountedPrice(originalPrice) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
  }

  // Function to update the main product price when the variant is changed
  function updateMainProductPrice() {
    const variantDropdown = document.querySelector('.main-product .variant-dropdown');
    const selectedVariant = variantDropdown.options[variantDropdown.selectedIndex];
    const originalPrice = parseFloat(selectedVariant.getAttribute('data-price').replace(/[^0-9.-]+/g,""));
    
    const discountedPrice = calculateDiscountedPrice(originalPrice);

    // Update price on the page
    const mainProductPriceElement = document.querySelector('#main-product-price');
    mainProductPriceElement.innerHTML = `Original Price: ${formatPrice(originalPrice)} <span>Discounted Price: ${formatPrice(discountedPrice)}</span>`;
    
    // Update total price
    updateTotalPrice();
  }

  // Function to update the suggested product price when the variant is changed
  function updateSuggestedProductPrice(element) {
    const selectedVariant = element.options[element.selectedIndex];
    const originalPrice = parseFloat(selectedVariant.getAttribute('data-price').replace(/[^0-9.-]+/g,""));
    
    const discountedPrice = calculateDiscountedPrice(originalPrice);

    // Update price on the page
    const suggestedProductPriceElement = element.closest('.suggested-product').querySelector('.suggested-price');
    suggestedProductPriceElement.innerHTML = `Original Price: ${formatPrice(originalPrice)} <span>Discounted Price: ${formatPrice(discountedPrice)}</span>`;
    
    // Update total price
    updateTotalPrice();
  }

  // Function to update the total price in the frequently bought together section
  function updateTotalPrice() {
    const mainProductPrice = parseFloat(document.querySelector('.main-product .variant-dropdown').options[document.querySelector('.main-product .variant-dropdown').selectedIndex].getAttribute('data-price').replace(/[^0-9.-]+/g,""));
    
    let totalPrice = calculateDiscountedPrice(mainProductPrice);

    // Loop through suggested products and add their discounted prices
    document.querySelectorAll('.suggested-product .variant-dropdown').forEach(function (dropdown) {
      const selectedVariantPrice = parseFloat(dropdown.options[dropdown.selectedIndex].getAttribute('data-price').replace(/[^0-9.-]+/g,""));
      totalPrice += calculateDiscountedPrice(selectedVariantPrice);
    });

    // Update total price in the DOM
    document.querySelector('#total-price').textContent = formatPrice(totalPrice);
  }

  // Utility function to format the price as currency
  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }

  // Attach event listeners to variant dropdowns
  document.querySelectorAll('.variant-dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('change', function () {
      if (this.closest('.main-product')) {
        updateMainProductPrice();
      } else {
        updateSuggestedProductPrice(this);
      }
    });
  });

  // Initial call to set up the prices on page load
  updateMainProductPrice();
  updateTotalPrice();
});
