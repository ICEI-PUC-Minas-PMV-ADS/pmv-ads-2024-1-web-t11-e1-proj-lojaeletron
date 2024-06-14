document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const cardNumber = document.getElementById('card-number').value;
    const name = document.getElementById('name').value;
    const cep = document.getElementById('cep').value;

    if (!validateCPF(cpf)) {
        alert('CPF inválido.');
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        alert('Número do cartão inválido.');
        return;
    }

    alert('Pagamento realizado com sucesso!');
});

function validateCPF(cpf) {
    // Adicione aqui a validação de CPF se necessário
    return /\d{3}\.\d{3}\.\d{3}-\d{2}/.test(cpf);
}

function validateCardNumber(cardNumber) {
    // Expressão regular para verificar o formato 0000 0000 0000 0000
    const pattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    return pattern.test(cardNumber);
}

function bloquearNumeros(event) {
    // Verifica se a tecla pressionada é um número
    if (event.key >= '0' && event.key <= '9') {
        // Previne a inserção do número no input
        event.preventDefault();
    } 
}