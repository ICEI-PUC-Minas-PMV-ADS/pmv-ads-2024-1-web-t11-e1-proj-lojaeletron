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