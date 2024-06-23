document.getElementById('newsletter').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter o email do usuário
    var userEmail = document.getElementById('user-email').value;

    // Mostrar mensagem de status
    var statusMessage = document.getElementById('status-message');
    statusMessage.textContent = "Enviando...";

    // Configurar os parâmetros do template
    var templateParams = {
        user_email: userEmail
    };

    // Enviar o email usando EmailJS
    emailjs.send('service_zhrrxaa', 'template_86ms9no', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            statusMessage.textContent = "Inscrição realizada com sucesso!";
        }, function(error) {
            console.log('FAILED...', error);
            statusMessage.textContent = "Ocorreu um erro ao tentar se inscrever. Tente novamente.";
        });
});

// Facebook Autenticador

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
          document.getElementById('response').innerHTML = 'Você está logado com o Facebook.';
        }
      }, {scope: 'public_profile,email'});
    }
  }
  