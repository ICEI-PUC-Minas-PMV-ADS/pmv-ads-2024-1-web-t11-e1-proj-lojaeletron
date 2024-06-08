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
let produtos = [];
let carrinho = [];

// Carrega o catálogo de produtos
fetch('catalogo.json')
  .then(response => response.json())
  .then(data => {
    produtos = data.catalogo.produtos;
    exibirProdutos(produtos);
    verificarPaginaDetalhes();
  });

// Função para exibir os produtos na página principal
function exibirProdutos(produtos) {
  const produtosDiv = document.getElementById('produtos');

  if (!produtosDiv) return;

  produtosDiv.innerHTML = '';

  produtos.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'produto';

    const img = document.createElement('img');
    img.src = produto.imagens[0];
    img.alt = produto.nome;
    img.className = 'produto-img';

    const nome = document.createElement('h3');
    nome.textContent = produto.nome;

    const descricao = document.createElement('p');
    descricao.textContent = produto.descricao;

    const preco = document.createElement('p');
    preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

    const linkDetalhes = document.createElement('a');
    linkDetalhes.href = `detalhes.html?id=${produto.id}`;
    linkDetalhes.textContent = 'Ver Detalhes';

    produtoDiv.appendChild(img);
    produtoDiv.appendChild(nome);
    produtoDiv.appendChild(descricao);
    produtoDiv.appendChild(preco);
    produtoDiv.appendChild(linkDetalhes);

    produtosDiv.appendChild(produtoDiv);
  });
}

// Função para exibir os detalhes do produto
function exibirDetalhesProduto(produto) {
  const produtoDetalhesDiv = document.getElementById('produtoDetalhes');

  if (!produtoDetalhesDiv) return;

  const img = document.createElement('img');
  img.src = produto.imagens[0];
  img.alt = produto.nome;
  img.className = 'produto-img';

  const nome = document.createElement('h3');
  nome.textContent = produto.nome;

  const descricao = document.createElement('p');
  descricao.textContent = produto.descricao;

  const preco = document.createElement('p');
  preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

  const botaoAdicionar = document.createElement('button');
  botaoAdicionar.textContent = 'Adicionar ao Carrinho';
  botaoAdicionar.onclick = () => adicionarAoCarrinho(produto);

  produtoDetalhesDiv.appendChild(img);
  produtoDetalhesDiv.appendChild(nome);
  produtoDetalhesDiv.appendChild(descricao);
  produtoDetalhesDiv.appendChild(preco);
  produtoDetalhesDiv.appendChild(botaoAdicionar);
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  exibirCarrinho();
}

// Função para exibir o carrinho
function exibirCarrinho() {
  const carrinhoDiv = document.getElementById('carrinho');
  if (!carrinhoDiv) return;

  carrinhoDiv.innerHTML = '';

  carrinho.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'produto';

    const img = document.createElement('img');
    img.src = produto.imagens[0];
    img.alt = produto.nome;
    img.className = 'produto-img';

    const nome = document.createElement('h3');
    nome.textContent = produto.nome;

    const preco = document.createElement('p');
    preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

    produtoDiv.appendChild(img);
    produtoDiv.appendChild(nome);
    produtoDiv.appendChild(preco);

    carrinhoDiv.appendChild(produtoDiv);
  });

  const total = carrinho.reduce((sum, produto) => sum + produto.preco, 0);
  const totalDiv = document.createElement('p');
  totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
  carrinhoDiv.appendChild(totalDiv);
}

// Função para verificar se estamos na página de detalhes do produto
function verificarPaginaDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const produtoId = params.get('id');

  if (produtoId) {
    const produto = produtos.find(p => p.id == produtoId);
    if (produto) {
      exibirDetalhesProduto(produto);
    }
  }
}

// Filtra os produtos com base na entrada do usuário
document.getElementById('searchInput').addEventListener('input', function() {
  const termoBusca = this.value.toLowerCase();
  const produtosFiltrados = produtos.filter(produto => 
    produto.nome.toLowerCase().includes(termoBusca)
  );
  exibirProdutos(produtosFiltrados);
});

