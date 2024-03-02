//sempre quando criar uma função precisa da palavra reservada function e um nome interativo sobre a função//

function verificarChute() {
    console.log("O botão foi clicado");
}
//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado:

function exibirMensagemNoConsole() {
    alert("O BOtão foi clicado ");
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo Js, sempre que o botão Alerta for pressionado:
function exibirAlerta() {
    alert('Eu amo Js')
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você:
function apertaPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil que você gosta muito:");
    alert(`Estive em ${cidade} e lembrei de você`);
} <
button onclick = "exibirMensagemNoConsole()"
class = "button" > Console < /button> <
    button onclick = "exibirAlerta()"
class = "button" > Alert < /button> <
    button onclick = "apertaPrompt()"
class = "container_botao" > Prompt < /button> <
    button onclick = "apertaSoma()"
class = "container_botao" > Soma < /button>

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function apertaSoma() {
    let numero1 = parseInt(prompt("Favor difgitar o primeiro numero"));
    let numero2 = parseInt(prompt("Favor digitar o segundo número"));
    let soma = numéro1 + numero2;
    alert(`A soma dos dois numeros é  ${soma}`);
}


//Desafios
//Criar uma função que exibe "Olá, mundo!" no console.
function exibe() {
    console.log("Olá mundo!!");
}
exibe();


//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirnome(nome) {
    console.log(`Olá ${nome}!`)
}
exibirnome("Fernanda");


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculaMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
let media = calculaMedia(5, 10 15);
console.log(calculaMedia;


        //Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
        function encontrarMaior(a, b) {
            return a > b ? a : b;
        }

        let maiorNumero = encontrarMaior(15, 9); console.log(maiorNumero);

        //Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

        function quadrado(numero) {
            return numero * numero;
        }

        let resultado = quadrado(2); console.log(resultado);