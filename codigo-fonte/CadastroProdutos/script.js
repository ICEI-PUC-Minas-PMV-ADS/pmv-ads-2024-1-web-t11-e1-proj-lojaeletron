const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let products = []; // Armazenará todos os produtos

// Carrega o arquivo JSON localmente
fetch("catalogo.json")
    .then((response) => response.json())
    .then((data) => {
        // Armazena todos os produtos
        products = data.Produtos;
    })
    .catch((error) => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });
// Adiciona um ouvinte de evento para o evento submit do formulário
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o comportamento padrão de enviar o formulário

    const searchTerm = inputSearch.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        // Verifica se o nome do produto ou a marca do produto contém o termo de pesquisa
        return product.nome.toLowerCase().includes(searchTerm) ||
               product.marca.toLowerCase().includes(searchTerm);
    });

    // Exibe ou oculta os produtos com base no resultado da pesquisa
    displayProducts(filteredProducts);
});

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