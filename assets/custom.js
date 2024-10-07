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

// Frequently Boughts section
// Frequently Boughts section

let productVariantIds = [];
let totalPrice = 0;

function updateMainProductPrice() {
    const mainProductEl = document.querySelector('.main-product');
    const selectedVariant = mainProductEl.querySelector('.variant-dropdown').selectedOptions[0];
    const mainProductPriceEl = mainProductEl.querySelector('.product-info .price');
    mainProductPriceEl.textContent = selectedVariant.dataset.price; // Keep original price
    updateProductVariants();
}

function updateSuggestedProductPrice(dropdown) {
    const suggestedProductEl = dropdown.closest('.suggested-product');
    const selectedVariant = dropdown.selectedOptions[0];
    const suggestedProductPriceEl = suggestedProductEl.querySelector('.suggested-product-info .price');
    suggestedProductPriceEl.textContent = selectedVariant.dataset.price; // Keep original price
    updateProductVariants();
}

function updateProductVariants() {
    productVariantIds = [];
    totalPrice = 0;

    const mainProductEl = document.querySelector('.main-product');
    const mainProductVariantId = mainProductEl.querySelector('.variant-dropdown')?.value || mainProductEl.getAttribute('data-product-variant-id');
    const mainProductPrice = parseFloat(mainProductEl.querySelector('.product-info .price').textContent.replace(/[^0-9.-]+/g, ""));
    
    productVariantIds.push(mainProductVariantId);
    totalPrice += mainProductPrice;

    document.querySelectorAll('.suggested-product').forEach(productEl => {
        const suggestedProductVariantId = productEl.querySelector('.variant-dropdown')?.value || productEl.getAttribute('data-product-variant-id');
        const suggestedProductPrice = parseFloat(productEl.querySelector('.suggested-product-info .price').textContent.replace(/[^0-9.-]+/g, ""));
        
        productVariantIds.push(suggestedProductVariantId);
        totalPrice += suggestedProductPrice; // Keep original price
      
    });
    
    document.getElementById('total-price').textContent = '$' + totalPrice.toFixed(2);
  
    // Calculate the discounted price
    const discountPercentage = parseFloat(document.querySelector(".frequently_boughts-info .discounts .value").textContent);
    const discountAmount = (discountPercentage / 100) * totalPrice;
    const discountedPrice = totalPrice - discountAmount;
    
    document.querySelector(".discounted-Price").textContent = '$' + discountedPrice.toFixed(2);
}

updateProductVariants();

document.querySelectorAll('.variant-dropdown').forEach(dropdown => {
    dropdown.addEventListener('change', () => {
        updateSuggestedProductPrice(dropdown);
        updateProductVariants();
    });
});

async function addProductsToCart() {
    for (const variantId of productVariantIds) {
        const variantElement = document.querySelector(`[data-product-variant-id="${variantId}"]`);
        const originalPrice = parseFloat(variantElement.querySelector('.suggested-product-info .price').textContent.replace(/[^0-9.-]+/g, ""));
        const discount = parseFloat(variantElement.dataset.discount || 0);
        const discountedPrice = originalPrice - discount;

        try {
            const response = await fetch('/cart/add.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: variantId, quantity: 1 })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Failed to add product to cart:', errorData);
            } else {
                console.log(`Added variant ${variantId} to the cart.`);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    }
}



document.querySelector('.add-to-cart-F-B').addEventListener('click', async (event) => {
    event.preventDefault();
    await addProductsToCart();
    theme.cart.getCartProductMarkup().then(cartMarkup => {
        const cartForm = new theme.CartForm(document.getElementById('CartDrawerForm'));
        cartForm.cartMarkup(cartMarkup);
    });
    document.dispatchEvent(new CustomEvent('cart:open'));
});
