document.addEventListener('DOMContentLoaded', function () {
    const formPesquisa = document.getElementById('formPesquisa');
    const campoPesquisa = document.getElementById('campoPesquisa');
    const listaResultado = document.getElementById('resultadoPesquisa');

    formPesquisa.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const termoPesquisa = campoPesquisa.value.toLowerCase();
        fetch('produtos.json')
            .then(response => response.json())
            .then(data => {
                const resultados = data.produtos.filter(produto =>
                    produto.nome.toLowerCase().includes(termoPesquisa) ||
                    produto.descricao.toLowerCase().includes(termoPesquisa) ||
                    produto.categoria.toLowerCase().includes(termoPesquisa)
                );
                exibirResultados(resultados);
            })
            .catch(error => console.error('Erro ao carregar produtos:', error));
    });

    function exibirResultados(resultados) {
        listaResultado.innerHTML = '';

        resultados.forEach(produto => {
            const itemLista = document.createElement('li');
            itemLista.textContent = `${produto.nome} - ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            listaResultado.appendChild(itemLista);
        });
    }
});
