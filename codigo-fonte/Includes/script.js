document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

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
    if (password!== confirmPassword) {
        document.getElementById('response').innerHTML = 'As senhas não coincidem.';
        return;
    }

    // Armazenar os dados no Local Storage
    var userData = {
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

// Google Sign-in
const express = require('express');
const bodyParser = require('body-parser');
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '79566223665-reqmqlnjlqk893ck5asut9in040o8eff.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    const token = req.body.credential;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];

        // Aqui você pode criar uma sessão para o usuário, armazenar informações no banco de dados, etc.
        res.status(200).json({message: 'Login bem-sucedido', user: payload});
    } catch (error) {
        res.status(401).json({message: 'Token inválido', error: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});