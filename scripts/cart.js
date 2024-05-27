document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');

  cartItems.forEach((item) => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${item.price}</p>
            <p>Total: $${item.quantity * item.price}</p>
        `;
    cartItemsContainer.appendChild(cartItemDiv);
  });

  document.getElementById('checkout').addEventListener('click', () => {
    // Checkout logic here
    alert('Checkout not implemented');
  });
});
