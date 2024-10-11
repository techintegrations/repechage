// Function to add selected products to the cart
function undelCartadd() {
  const productSelectors = document.querySelectorAll('.addon-products');
  let selectedProducts = [];

  // Loop through each selector to collect the selected product
  productSelectors.forEach(function(selector) {
    const selectedOption = selector.options[selector.selectedIndex];
    const productId = selectedOption.value;

    // Only add if a valid product is selected
    if (productId) {
      selectedProducts.push({
        id: productId,
        quantity: 1 // Adjust quantity as needed
      });
    }
  });

  // Check if there are selected products
  if (selectedProducts.length > 0) {
    addMultipleToCart(selectedProducts);
  } else {
    console.log("No products selected.");
  }
}

// Function to add multiple products to the Shopify cart via AJAX
async function addMultipleToCart(products) {
  const response = await fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({
      items: products // Pass all selected products at once
    })
  });
  
  const data = await response.json();
  console.log('Products successfully added:', data);
}

// Attach event listeners to the Add to Cart buttons
document.querySelectorAll(".product-form--atc-button").forEach((addBTN) => {
  addBTN.addEventListener("click", () => {
    undelCartadd();
  });
});


//update price 
async function updatePriceAddon() {
  let newCart = await fetch("/?section_id=product-form");
  let cartData = await newCart.text();
  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = cartData;
  let newprice = tempDiv.querySelector(".product-details .product-title-wrap .product--price .price--main .exl_vat span").innerHTML;
  document.querySelector(".product-details .product-title-wrap .product--price .price--main .exl_vat span").innerHTML = newprice;
}
productSelectors.forEach((selector)=>{
  selector.addEventListner("change",()=>{
     updatePriceAddon();
  });
});
