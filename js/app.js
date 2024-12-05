// Array para armazenar a lista de amigos
let amigos = [];

// Função para adicionar um novo amigo à lista
function adicionar() {
    let amigo = document.getElementById('nome-amigo'); // Input com o nome do amigo
    let lista = document.getElementById('lista-amigos'); // Elemento onde a lista de amigos será exibida

    // Verifica se o campo está vazio
    if (amigo.value.trim() === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Nome digitado pelo usuário, sem espaços desnecessários
    let nome = amigo.value.trim();

    // Verifica se o nome já está na lista
    if (amigos.includes(nome)) {
        // Adiciona o nome em minúsculo para diferenciá-lo
        let nomeMinusc = nome.toLowerCase();

        // Se o nome em minúsculo também já existir, adiciona números sequenciais
        let contador = 2;
        while (amigos.includes(nomeMinusc)) {
            nomeMinusc = `${nome.toLowerCase()} (${contador})`;
            contador++;
        }
        nome = nomeMinusc;
        alert(`Nome já existe! Adicionando como: ${nome}`);
    }

    // Adiciona o nome à lista
    amigos.push(nome);

    // Atualiza a exibição da lista
    lista.textContent = amigos.join(', ');

    // Limpa o campo de entrada
    amigo.value = '';
}

// Função para embaralhar o array de amigos usando Fisher-Yates Shuffle
function embaralha(lista) {

    
    /**
     * Fisher-Yates Shuffle:
     * É um algoritmo eficiente para embaralhar arrays. Ele percorre o array de trás para frente,
     * trocando o elemento atual por um elemento aleatório (dentro do intervalo que ainda não foi embaralhado).
     */


    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice); // Gera um índice aleatório válido


        // Troca os elementos usando destructuring
        /**
         * Destructuring:
         * É uma forma de desconstruir arrays ou objetos de forma concisa.
         * Aqui, estamos trocando os valores de dois índices no array `lista` sem usar uma variável temporária.
         */
        

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Função para realizar o sorteio dos amigos
function sortear() {
    // Verifica se há amigos suficientes para o sorteio
    if (amigos.length < 2) {
        alert('É necessário ter pelo menos 2 amigos na lista para realizar o sorteio!');
        return;
    }

    embaralha(amigos); // Embaralha a lista de amigos
    let sorteio = document.getElementById('lista-sorteio'); // Elemento onde o resultado será exibido
    sorteio.innerHTML = ''; // Limpa o conteúdo anterior do sorteio

    // Laço para organizar o sorteio, criando pares
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            // O último amigo "presenteia" o primeiro
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            // Os demais amigos são conectados sequencialmente
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

// Função para reiniciar o sorteio e limpar as listas
function reiniciar() {
    amigos = []; // Reseta o array de amigos
    document.getElementById('lista-amigos').innerHTML = ''; // Limpa a lista de amigos exibida
    document.getElementById('lista-sorteio').innerHTML = ''; // Limpa os resultados do sorteio
}
