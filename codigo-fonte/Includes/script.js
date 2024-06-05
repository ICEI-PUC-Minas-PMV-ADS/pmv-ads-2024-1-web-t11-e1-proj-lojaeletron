document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var accountType = document.querySelector('input[name="accountType"]:checked').value;
    var fullname = document.getElementById('fullname').value;
    var gender = document.getElementById('gender').value;
    var phone = document.getElementById('phone').value;
    var cpf = document.getElementById('cpf').value;
    var birthdate = document.getElementById('birthdate').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var referral = document.getElementById('referral').value;

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (fullname === '' || gender === '' || phone === '' || cpf === '' || birthdate === '' || email === '' || password === '' || confirmPassword === '' || referral === '') {
        document.getElementById('response').innerHTML = 'Por favor, preencha todos os campos obrigatórios.';
        return;
    }

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
        document.getElementById('response').innerHTML = 'As senhas não coincidem.';
        return;
    }

    // Armazenar os dados no Local Storage
    var userData = {
        accountType: accountType,
        fullname: fullname,
        gender: gender,
        phone: phone,
        cpf: cpf,
        birthdate: birthdate,
        email: email,
        password: password,
        referral: referral
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Simulação de envio do formulário
    document.getElementById('response').innerHTML = 'Enviando...';

    // Simular um atraso de 2 segundos e exibir uma mensagem de sucesso.
    setTimeout(function() {
        document.getElementById('response').innerHTML = 'Cadastro realizado com sucesso!';
        // Limpar os campos após o envio bem-sucedido
        document.getElementById('signup-form').reset();
    }, 2000);
});

function onlyNumbers(event) {
    var key = event.keyCode || event.which;
    var allowedKeys = /^[0-9]$/;

    // Verificar se a tecla pressionada é um número
    if (!allowedKeys.test(String.fromCharCode(key))) {
        event.preventDefault();
    }
}

function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log(data);

    // Aqui você pode fazer algo com os dados do usuário
    // Por exemplo, preenchendo automaticamente os campos do formulário
    document.getElementById('fullname').value = data.name;
    document.getElementById('email').value = data.email;
}

// Carregar e inicializar a API do Google Identity Services
window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'SEU_CLIENT_ID',
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.querySelector(".g_id_signin"),
        { theme: "outline", size: "large" }  // Personalização do botão
    );
    google.accounts.id.prompt(); // Solicita o login do usuário
};


