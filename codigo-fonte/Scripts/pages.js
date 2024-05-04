// Funcao para carregar e inserir o conteúdo do cabeçalho
fetch('../Includes/header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
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


