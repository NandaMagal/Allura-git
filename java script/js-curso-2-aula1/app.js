//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio:
//let campo= document.querySelector(tag);
//campo.innerHTML="JOgo do umero secreto";
//Quando temos comportamentos iguais podemos vincular codigos e diminuir as linhas de código.
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "HORA DO DESAFIO";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 5000";
// gera um nr aleatorio com a função matchRadom

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 5000');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 3 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

// Lista utilizamos colchetess , quando criamos uma lista conseguimos visualizar o tamanho da lista . Primeiro elemento da liusta sempre vai ter o indice 
// numeros. length ( tamanho da lista );