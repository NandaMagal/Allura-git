//Desafios
//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
//Caso contrário, mostre "Boa semana!".
//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//Caso contrário, mostre "Tente novamente para ganhar.".
//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
//
numero = prompt('Digite um número  positivo ou negativo');
if (numero < 0) {
    alert(" O numero informado é negativo");
} else {
    if (numero > 0) {
        alert(" O numero informado é positivo");
    }
} else {
    alert("O numero digitado é zero")
}
//

alert("VOCE ENTROU NO JOGO DE PONTOS");
let pontos;

console.log(`Por gentileza mostre quantos pontos vc possui ? ${pontos}`);
if (pontos >= 100) {
    console.log("parabéns vc venceu");
} else {
    console.log("tente novamente ")
}

//

let nome;
let saldo Conta;

nome = prompt("Favor inserir o seu nome ");
saldo = prompt("Favor informar o saldo ")
alert(`Bem vindo ${nome}`);