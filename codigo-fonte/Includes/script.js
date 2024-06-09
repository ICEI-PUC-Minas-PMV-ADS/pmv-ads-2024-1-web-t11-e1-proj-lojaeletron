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
          document.getElementById('response').innerHTML = 'Login com o Faceboo.';
        }
      }, {scope: 'public_profile,email'});
    }
  };
 
 
  // PRODUTOS CATALOGO

  
const catalogo = {
  "catalogo": {
      "produtos": [
          {
              "id": 1,
              "nome": "Monitor",
              "descricao": "Monitor 144hz, AOC",
              "preco": 1129.99,
              "categoria": "Hardware",
              "disponibilidade": true,
              "imagens": [
                  "imgs/monitor_150x150.png"
              ],
              "especificacoes": {
                  "material": "",
                  "tamanhosDisponiveis": []
              }
          },
          {
              "id": 2,
              "nome": "Mouse Razer",
              "descricao": "Mouse optico , 12000 dpi",
              "preco": 79.99,
              "categoria": "Perifericos",
              "disponibilidade": true,
              "imagens": [
                  "imgs/mouse_150x150.jpeg"
              ],
              "especificacoes": {
                  "material": "",
                  "tamanhosDisponiveis": []
              }
          },
          {
  "id": 3,
  "nome": "Placa de video",
  "descricao": "Placa de video Radeon",
  "preco": 1399.99,
  "categoria": "Hardware",
  "disponibilidade": false,
  "imagens": [
    "imgs/placa_150x96.jpeg"
  ],
  "especificacoes": {
    "material": "",
    "tamanhosDisponiveis": [],
    "coresDisponiveis": ["Preto", "Branco", "Cinza"]
  }
},

{
"id": 4,
"nome": "Placa Mae",
"descricao": "Placa Mae Asus",
"preco": 598.99,
"categoria": "Hardware",
"disponibilidade": false,
"imagens": [
"imgs/placamae.png"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
},
{
"id": 5,
"nome": "Placa de Vídeo RTX 3060 ",
"descricao": "Ventus 2X MSI NVIDIA GeForce, 12GB GDDR6",
"preco": 1799.99,
"categoria": "Hardware",
"disponibilidade": false,
"imagens": [
"imgs/placartx.png"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis":[]
}
},
{
"id": 6,
"nome": "Mouse Gamer Sem Fio Logitech G PRO",
"descricao": "Wireless LIGHTSPEED, RGB LIGHTSYNC",
"preco": 699.99,
"categoria": "Perifericos",
"disponibilidade": false,
"imagens": [
"imgs/mouseGPRO.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Preto", "Branco"]
}
},
{
"id": 7,
"nome": "Fonte XPG Core Reactor, 850W",
"descricao": "80 Plus Gold, Modular",
"preco": 599.99,
"categoria": "Hardware",
"disponibilidade": false,
"imagens": [
"imgs/fonte xpg.png"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": []
}
},
{
"id": 8,
"nome": "Kit Gamer Redragon RGB",
"descricao": "Headset Lamia 2 Surround 7.1 + Teclado Kumara Switch Outemu Blue + Mouse Cobra",
"preco": 499.99,
"categoria": "Perifericos",
"disponibilidade": false,
"imagens": [
"imgs/kitreddragon.png"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": []
}
},
{
"id": 9,
"nome": "JBL Quantum 50",
"descricao": "Fone de Ouvido Gamer Intra Auricular",
"preco": 129.99,
"categoria": "Perifericos",
"disponibilidade": false,
"imagens": [
"imgs/fone1.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": []
}
},
{
"id": 10,
"nome": "Epson EcoTank L3250",
"descricao": "Multifuncional, Tanque de Tinta Colorida",
"preco": 1135.00,
"categoria": "Eletronico",
"disponibilidade": false,
"imagens": [
"imgs/impressora1.png"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Preto", "Branco", "Cinza"]
}
},
{
"id": 11,
"nome": "Razer Huntsman Mini",
"descricao": "Chroma, Razer Switch Red",
"preco": 999.00,
"categoria": "Perifericos",
"disponibilidade": false,
"imagens": [
"imgs/razerhuntsman_150x84.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
},
{
"id": 12,
"nome": "Redragon Zeus",
"descricao": "Headset Gamer, 7.1",
"preco": 299.00,
"categoria": "Perifericos",
"disponibilidade": false,
"imagens": [
"imgs/fonefdp_122x120.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
},
{
"id": 13,
"nome": "Iphone 12 128gb",
"descricao": " Câmera 12MP, Tela 6.1",
"preco": 3199.99,
"categoria": "Eletronico",
"disponibilidade": false,
"imagens": [
"imgs/iphone12.png"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Preto", "Branco"]
}
},
{
"id": 14,
"nome": "Notebook Samsung Galaxy Book2",
"descricao": "Intel Core i5-1235U, 8GB RAM, SSD 256GB",
"preco": 2399.99,
"categoria": "Eletronico",
"disponibilidade": false,
"imagens": [
"imgs/galaxybook2_150x105.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Preto"]
}
},
{
"id": 15,
"nome": "Echo Dot 5ª geração Amazon",
"descricao": "com Alexa, Smart Speaker",
"preco": 379.99,
"categoria": "Eletronico",
"disponibilidade": false,
"imagens": [
"imgs/echodot_150x110.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Preto"]
}
},
{
"id": 16,
"nome": "Samsung Galaxy Watch4",
"descricao": "BT 40mm - Relógio inteligente",
"preco": 965.99,
"categoria": "Eletronico",
"disponibilidade": false,
"imagens": [
"imgs/galaxywatch_131x150.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Preto"]
}
},
{
"id": 17,
"nome": "Cabo de Rede",
"descricao": "Patch Cord CAT.6 Plus Cable,10m, Azul ",
"preco": 20.99,
"categoria": "Informatica",
"disponibilidade": false,
"imagens": [
"imgs/caboderede_111x150.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
},
{
"id": 18,
"nome": "Gabinete UP Gamer Cronos",
"descricao": "RGB, ATX, Micro ATX",
"preco": 300.99,
"categoria": "Informatica",
"disponibilidade": false,
"imagens": [
"imgs/Gabineteup_83x120.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Preto"]
}
},
{
"id": 19,
"nome": "Controle Sony DualSense PS5",
"descricao": "Sem Fio, Midnight Black ",
"preco": 399.99,
"categoria": "Eletronico",
"disponibilidade": false,
"imagens": [
"imgs/dualsense_120x120.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Preto"]
}
},
{
"id": 20,
"nome": "Cabo HDMI 2.0",
"descricao": "4K PIX, 2 Metros, 19 Pinos",
"preco": 21.99,
"categoria": "Eletronico",
"disponibilidade": false,
"imagens": [
"imgs/cabohdmi_120x120.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
},
{
"id": 21,
"nome": "Carregador USB-C",
"descricao": "20W Branco Apple Original",
"preco": 119.99,
"categoria": "Eletronico",
"disponibilidade": false,
"imagens": [
"imgs/carregadorapple.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Branco"]
}
},
{
"id": 22,
"nome": "Playstation 5 Sony",
"descricao": "SSD 825GB, Controle sem fio DualSense",
"preco": 3440.99,
"categoria": "Games",
"disponibilidade": false,
"imagens": [
"imgs/ps5_120x120.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": ["Branco"]
}
},
{
"id": 23,
"nome": "Marvel's Spider-Man 2",
"descricao": "Edição Standard - PlayStation 5",
"preco": 250.00,
"categoria": "Games",
"disponibilidade": false,
"imagens": [
"imgs/spiderman_94x120.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
},
{
"id": 24,
"nome": "EA Sports FC 24",
"descricao": "PlayStation 5",
"preco": 290.99,
"categoria": "Games",
"disponibilidade": false,
"imagens": [
"imgs/FC24_95X120.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
},
{
"id": 25,
"nome": "The Last of Us Part II",
"descricao": "Remastered, PS5",
"preco": 175.00,
"categoria": "Games",
"disponibilidade": false,
"imagens": [
"imgs/tlou_94x120.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
},
{
"id": 26,
"nome": "God of War Ragnarök",
"descricao": "God of War Ragnarök",
"preco": 299.99,
"categoria": "Games",
"disponibilidade": false,
"imagens": [
"imgs/gow_150x84.jpeg"
],
"especificacoes": {
"material": "",
"tamanhosDisponiveis": [],
"coresDisponiveis": []
}
}
]
}
}


function carregarProduto(id) {
  const produto = catalogo.catalogo.produtos.find(p => p.id === id);
  if (produto) {
      document.getElementById('produto-imagem').src = produto.imagens[0];
      document.getElementById('produto-nome').textContent = produto.nome;
      document.getElementById('produto-descricao').textContent = produto.descricao;
      document.getElementById('produto-preco-original').textContent = "R̶$̶ " + (produto.preco * 1.2).toFixed(2); // Exemplo de preço original
      document.getElementById('produto-preco').textContent = "R$ " + produto.preco.toFixed(2);
      document.getElementById('produto-detalhes').textContent = produto.descricao; // Usando descrição como detalhes
      document.getElementById('produto-especificacoes').textContent = "Categoria: " + produto.categoria; // Exemplo de especificações
  }
}

function obterParametroId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'));
}

window.onload = function() {
  const produtoId = obterParametroId();
  if (produtoId) {
      carregarProduto(produtoId);
  } else {
      console.error("ID do produto não encontrado na URL.");
  }
};



  
  