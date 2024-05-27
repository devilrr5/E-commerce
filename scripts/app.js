document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');

  fetch('data/products.json')
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>₹${product.price}</p>
                    <button data-id="${product.id}">Add to Cart</button>
                `;
        productList.appendChild(productDiv);
      });
    });
});

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
    const productId = event.target.dataset.id;
    // Add product to cart logic here
  }
});
