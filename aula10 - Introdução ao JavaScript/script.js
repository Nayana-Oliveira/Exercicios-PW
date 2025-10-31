//------------- FUNÇÕES -------------//

function saudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

console.log(saudacao("Maria"));

//funcao anonima
let saudacao = function(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

console.log(saudacao("João"));

//funcao arrow (ES6)
let saudacao = (nome) => `Olá, ${nome}! Seja bem-vindo(a)!`;

console.log(saudacao("Ana"));

//funcoes com paramentos padrao (ES6)
function saudacao(nome = "Visitante") {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

console.log(saudacao());
console.log(saudacao("Carlos"));

//funcoes com rest parameter (ES6)

function somar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(somar(1, 2, 3, 4, 5)); // 15

//funções callback
function processar(numero, callback) {
    let resultado = numero * 2;
    callback(resultado);
}

processar(5, resultado => {
    console.log(`Resultado: ${resultado}`);
});


//funcoes recursivas
function fatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5)); // 120

//funcoes imediatamente invocadas (IIFE)
(function() {
    console.log("Esta função foi invocada imediatamente!");
})();

//funçoes de alta ordem
let numeros = [1, 2, 3, 4, 5];
let dobrados = aplicarOperacao(numeros, num => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

//funções geradores
function* contador() {;
    yield 1;
    yield 2;
    yield 3;
}

let gen = contador();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

//funções assíncronas (async/await)
async function buscarDados() {
    let resposta = await fetch('https://api.exemplo.com/dados');
    let dados = await resposta.json();
    console.log(dados);
}

buscarDados();

//------------- Escopos -------------//

//declarando variaveis com let
let idade = 18;
let nome = "Nayana";
let ativo = true;

idade = 19;
nome = "Nay Oliveira";

console.log("Let:", idade, nome, ativo);

//declarando variaveis com const
const PI = 3.14159;
const corFavorita = "Verde";
const usuario = { nome: "Nayana", idade: 19 };

usuario.idade = 20; 

console.log("Const:", PI, corFavorita, usuario);

//declarando variáveis com var
var cidade = "São Paulo";
var pais = "Brasil";
var ano = 2025;

cidade = "Rio de Janeiro";

console.log("Var:", cidade, pais, ano);

//exemplo de hoisting com var
var mensagem = "Olá, mundo!";
console.log("Hoisting var:", mensagem);

//exemplo de hoisting com let e const
console.log("Hoisting let:", saudacaoLet);
let saudacaoLet = "Olá com let!";
console.log("Hoisting const:", saudacaoConst);
const saudacaoConst = "Olá com const!";

//exemplo de zona morta temporal
console.log("Zona morta temporal let:", valorLet);
let valorLet = 10;
console.log("Zona morta temporal const:", valorConst);
const valorConst = 20;
