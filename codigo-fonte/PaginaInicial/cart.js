document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length > 0) {
            cart.forEach((product, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
                    <h2>${product.nome}</h2>
                    <p>Preço: R$${product.preco.toFixed(2)}</p>
                    <img src="${product.imagens[0]}" alt="${product.nome}">
                    <button class="remove-item" data-index="${index}">Excluir</button>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });

            const totalPrice = cart.reduce((sum, product) => sum + product.preco, 0);
            totalPriceContainer.textContent = `Total: R$${totalPrice.toFixed(2)}`;
        } else {
            cartItemsContainer.innerHTML = '<p>O carrinho está vazio.</p>';
            totalPriceContainer.textContent = '';
        }
    }

    function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }

    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.dataset.index;
            removeItem(index);
        }
    });

    updateCart();

    const finalizarCompraButton = document.getElementById('finalizar-compra');
    finalizarCompraButton.addEventListener('click', () => {
        window.location.href = 'cartao.html'; // Redireciona para a página de checkout
    });
});

// Seção de adicionar produto ao carrinho
document.addEventListener('DOMContentLoaded', () => {
    const productId = new URLSearchParams(window.location.search).get('id');
    const productDetails = document.getElementById('product-details');
    const addToCartButton = document.getElementById('add-to-cart');

    fetch('catalogo.json')
        .then(response => response.json())
        .then(data => {
            const product = data.catalogo.produtos.find(p => p.id == productId);

            if (product) {
            
                addToCartButton.addEventListener('click', () => {
                    addToCart(product);
                });
            } else {
                productDetails.innerHTML = '<p>Produto não encontrado</p>';
            }
        });
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'carrinho.html';
}

// Seção de cartão de crédito
document.addEventListener('DOMContentLoaded', () => {
    const finalizarCompraButton = document.getElementById('finalizar-compra');
    finalizarCompraButton.addEventListener('click', () => {
        window.location.href = 'cartao.html'; // Redireciona para a página de checkout
    });
});
