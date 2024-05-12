// Funcao para carregar e inserir o conteúdo do cabeçalho
fetch('../Includes/header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
}).then(() => {
    const content = document.querySelector(".content");
    const inputSearch = document.querySelector("input[type='search']");

    let products = []; // Armazenará todos os produtos

    // Carrega o arquivo JSON localmente
    fetch("../Scripts/data.json")
    .then((response) => response.json())
    .then((data) => {
        // Armazena todos os produtos
        products = data.Produtos;
    })
    .catch((error) => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });

    // Search Button
    inputSearch.addEventListener("input", () => {

        const searchTerm = inputSearch.value.toLowerCase();
        const filteredProducts = products.filter((product) => {
            // Verifica se o nome do produto ou a marca do produto contém o termo de pesquisa
            return product.nome.toLowerCase().includes(searchTerm) ||
                   product.marca.toLowerCase().includes(searchTerm);
        });
    
        // Exibe ou oculta os produtos com base no resultado da pesquisa
        displayProducts(filteredProducts);
    });

    // List Product
    function displayProducts(products) {
        // Limpa o conteúdo atual
        content.innerHTML = '';
    
        // Mostra os produtos apenas se a pesquisa não estiver vazia
        if (products.length > 0 && inputSearch.value.trim() !== '') {
            products.forEach((product) => {
                const div = document.createElement("div");
                // Exibe o nome e a marca do produto
                div.textContent = `${product.nome} ${product.marca}`;
                content.appendChild(div);
            });
        }
    }
});

fetch('../Includes/carrousel.html')
    .then(response => response.text())
    .then(data => {
document.getElementById('carrousel').innerHTML = data;
});

fetch('../Includes/carrousel2.html')
    .then(response => response.text())
    .then(data => {
document.getElementById('carrousel2').innerHTML = data;
});

fetch('../Includes/carrousel3.html')
    .then(response => response.text())
    .then(data => {
document.getElementById('carrousel3').innerHTML = data;
});

fetch('../Includes/carrousel4.html')
    .then(response => response.text())
    .then(data => {
document.getElementById('carrousel4').innerHTML = data;
});

fetch('../Includes/carrousel5.html')
    .then(response => response.text())
    .then(data => {
document.getElementById('carrousel5').innerHTML = data;
});

fetch('../Includes/carrousel6.html')
    .then(response => response.text())
    .then(data => {
document.getElementById('carrousel6').innerHTML = data;
});

fetch('../Includes/carrousel7.html')
    .then(response => response.text())
    .then(data => {
document.getElementById('carrousel7').innerHTML = data;
});

fetch('../Includes/carrousel8.html')
    .then(response => response.text())
    .then(data => {
document.getElementById('carrousel8').innerHTML = data;
});

fetch('../Includes/login.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('login').innerHTML = data;
});

fetch('../Includes/carrinho.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('carrinho').innerHTML = data;
});

