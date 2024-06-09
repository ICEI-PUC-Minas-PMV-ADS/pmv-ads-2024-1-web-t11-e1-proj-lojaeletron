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

/// Faceboko autenticador
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      // O usuário está conectado ao Facebook e à sua aplicação.
      FB.api('/me', {fields: 'name, email'}, function(response) {
        document.getElementById('fullname').value = response.name;
        document.getElementById('email').value = response.email;
        document.getElementById('response').innerHTML = 'Você está logado com o Facebook.';
      });
    } else {
      // O usuário não está logado no Facebook ou não autorizou sua aplicação.
      FB.login(function(response) {
        if (response.authResponse) {
          FB.api('/me', {fields: 'name, email'}, function(response) {
            document.getElementById('fullname').value = response.name;
            document.getElementById('email').value = response.email;
            document.getElementById('response').innerHTML = 'Você está logado com o Facebook.';
          });
        } else {
          document.getElementById('response').innerHTML = 'Login com o Facebook falhou.';
        }
      }, {scope: 'public_profile,email'});
    }
  }
  