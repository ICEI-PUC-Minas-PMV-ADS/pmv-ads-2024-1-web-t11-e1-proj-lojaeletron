// Funcao para carregar e inserir o conteúdo do cabeçalho
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


fetch('../Includes/header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
});