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
let productVariantIds = [];
let totalPrice = 0;

function applyDiscount(price, discountPercent) {
    return price - (price * (discountPercent / 100));
}

function updateMainProductPrice() {
    const mainProductEl = document.querySelector('.main-product');
    const selectedVariant = mainProductEl.querySelector('.variant-dropdown').selectedOptions[0];
    const mainProductPriceEl = mainProductEl.querySelector('.product-info .price');
    const discountPercent = parseFloat(document.querySelector(".frequently_boughts-info .discounts .value").textContent);

    let originalPrice = parseFloat(selectedVariant.dataset.price.replace(/[^0-9.-]+/g, ""));
    let discountedPrice = applyDiscount(originalPrice, discountPercent);

    mainProductPriceEl.innerHTML = `
      Original Price: $${originalPrice.toFixed(2)}
      <span>Discounted Price: $${discountedPrice.toFixed(2)}</span>
    `;

    updateProductVariants();
}

function updateSuggestedProductPrice(dropdown) {
    const suggestedProductEl = dropdown.closest('.suggested-product');
    const selectedVariant = dropdown.selectedOptions[0];
    const suggestedProductPriceEl = suggestedProductEl.querySelector('.suggested-product-info .price');
    const discountPercent = parseFloat(document.querySelector(".frequently_boughts-info .discounts .value").textContent);

    let originalPrice = parseFloat(selectedVariant.dataset.price.replace(/[^0-9.-]+/g, ""));
    let discountedPrice = applyDiscount(originalPrice, discountPercent);

    suggestedProductPriceEl.innerHTML = `
      Original Price: $${originalPrice.toFixed(2)}
      <span>Discounted Price: $${discountedPrice.toFixed(2)}</span>
    `;

    updateProductVariants();
}

function updateProductVariants() {
    productVariantIds = [];
    totalPrice = 0;
    const discountPercent = parseFloat(document.querySelector(".frequently_boughts-info .discounts .value").textContent);

    const mainProductEl = document.querySelector('.main-product');
    const mainProductVariantId = mainProductEl.querySelector('.variant-dropdown')?.value || mainProductEl.getAttribute('data-product-variant-id');
    let mainProductPrice = parseFloat(mainProductEl.querySelector('.product-info .price').textContent.replace(/[^0-9.-]+/g, ""));
    
    // Apply discount to main product
    mainProductPrice = applyDiscount(mainProductPrice, discountPercent);
    productVariantIds.push(mainProductVariantId);
    totalPrice += mainProductPrice;

    document.querySelectorAll('.suggested-product').forEach(productEl => {
        const suggestedProductVariantId = productEl.querySelector('.variant-dropdown')?.value || productEl.getAttribute('data-product-variant-id');
        let suggestedProductPrice = parseFloat(productEl.querySelector('.suggested-product-info .price').textContent.replace(/[^0-9.-]+/g, ""));

        // Apply discount to suggested products
        suggestedProductPrice = applyDiscount(suggestedProductPrice, discountPercent);
        productVariantIds.push(suggestedProductVariantId);
        totalPrice += suggestedProductPrice;
    });

    // Update the total price with the discounted value
    document.querySelector(".discounted-Price").textContent = '$' + totalPrice.toFixed(2);
    document.getElementById('total-price').textContent = '$' + totalPrice.toFixed(2);
}

updateProductVariants();

document.querySelectorAll('.variant-dropdown').forEach(dropdown => {
    dropdown.addEventListener('change', () => {
        updateSuggestedProductPrice(dropdown);
        updateProductVariants();
    });
});
