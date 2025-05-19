// Replace with your actual API endpoint
const apiUrl = 'https://fakestoreapi.com/products'; // Example with images

async function loadProducts() {
  try {
    const response = await fetch(apiUrl);
    const products = await response.json();

    const container = document.getElementById('product-list');
    container.innerHTML = ''; // Clear loading message

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      card.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.title}">
        <div class="product-title">${product.title}</div>
        <div class="product-category">Category: ${product.category}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-price">$${product.price}</div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    document.getElementById('product-list').innerHTML = '<p>Failed to load products.</p>';
    console.error('Error fetching products:', error);
  }
}

loadProducts();
