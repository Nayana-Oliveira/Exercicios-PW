//-------- POO --------//

// Funções como objetos de primeira ordem
function saudacao() {
    console.log("Olá!");
}

let func = saudacao;
func();

// Objetos literais
let pessoa = {
    nome: "Alice",
    idade: 25,
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

pessoa.saudacao();

// Funções construtoras e prototypes
function Animal(tipo) {
    this.tipo = tipo;
}

Animal.prototype.som = function() {
    console.log(`${this.tipo} faz som`);
};

let gato = new Animal("Gato");
gato.som();

// Classes em JavaScript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

// Herança em JavaScript
class Animal {
    constructor(tipo) {
        this.tipo = tipo;
    }

    som() {
        console.log(`${this.tipo} faz som`);
    }
}

class Cachorro extends Animal {}

// Propriedades e métodos estáticos
class Matematica {
    static somar(a, b) {
        return a + b;
    }
}

console.log(Matematica.somar(3, 5));

// Encapsulamento com getters e setters
class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(valor) {
        if (valor) {
            this._nome = valor;
        }
    }
}

// Simular interfaces
class Carregavel {
    carregar() {
        throw new Error("Método 'carregar()' deve ser implementado");
    }
}

class Documento extends Carregavel {
    carregar() {
        console.log("Carregar");
    }
}

// Herança múltipla (composição de mixin)
let Voar = Base => class extends Base {
    voar() {
        console.log("Está voando");
    }
};

let Nadar = Base => class extends Base {
    nadar() {
        console.log("Está nadando");
    }
};

// Adicionando propriedades a objetos
let carro = { marca: "Toyota" };

carro.modelo = "Corolla";
console.log(carro.modelo);

carro["ano"] = 2020;
console.log(carro.ano);

// Adicionando propriedades a objetos dinamicamente
let chave = "cor";
carro[chave] = "Azul";
console.log(carro.cor);

// Adicionando propriedades ao prototype
function PessoaProto(nome) {
    this.nome = nome;
}

PessoaProto.prototype.idade = 30;

let pessoa1 = new PessoaProto("Alice");
console.log(pessoa1.idade);

// Removendo propriedades de objetos
let carro2 = { marca: "Toyota", modelo: "Corolla" };
delete carro2.modelo;
console.log(carro2.modelo);

// Removendo propriedades do prototype
function AnimalProto() {}
AnimalProto.prototype.tipo = "Vertebrado";

let cachorro2 = new AnimalProto();
console.log(cachorro2.tipo);

delete AnimalProto.prototype.tipo;
console.log(cachorro2.tipo);

// Métodos para Gerenciar Propriedades
let carro3 = { marca: "Toyota", modelo: "Corolla" };

console.log(Object.keys(carro3));
console.log(Object.values(carro3));
console.log(Object.entries(carro3));

// Usando hasOwnProperty para verificar propriedades
let carro4 = { marca: "Toyota" };
carro4.modelo = "Corolla";

console.log(carro4.hasOwnProperty("marca"));
console.log(carro4.hasOwnProperty("tipo"));

//-------- Protection --------//

// Object.freeze - Imutabilidade total
let pessoa2 = { nome: "Alice", idade: 30 };
Object.freeze(pessoa2);

pessoa2.idade = 31;
pessoa2.cidade = "SP";
delete pessoa2.nome;

console.log(pessoa2);

// Object.preventExtensions - Bloqueando adição
let livro = { titulo: "JavaScript Básico", paginas: 200 };
Object.preventExtensions(livro);

livro.paginas = 220;
livro.autor = "Autor";
delete livro.titulo;

console.log(livro);

// Verificando imutabilidade com isFrozen, isSealed e isExtensible
let obj = { a: 1 };
Object.freeze(obj);

console.log(Object.isFrozen(obj));
console.log(Object.isSealed(obj));
console.log(Object.isExtensible(obj));

// Proteção com Getters e Setters
let pessoa3 = {
    _nome: "Alice",
    get nome() {
        return this._nome;
    },
    set nome(novoNome) {
        if (novoNome) {
            this._nome = novoNome;
        } else {
            console.log("Nome inválido!");
        }
    }
};

// Congelando propriedades específicas
let produto = { nome: "Caneta", preco: 2.5 };

Object.defineProperty(produto, "preco", {
    writable: false,
    configurable: false
});

produto.preco = 3.0;
delete produto.preco;

// Congelamento recursivo - Deep Freeze
function deepFreeze(obj) {
    Object.freeze(obj);
    for (let key in obj) {
        if (typeof obj[key] === "object" && !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]);
        }
    }
}

let carro5 = { 
    marca: "Toyota", 
    detalhes: { ano: 2020, modelo: "Corolla" }
};

deepFreeze(carro5);

//-------- Modules --------//

// Exportação nomeada
// arquivo: matematica.js
export const PI = 3.14159;

export function somar(a, b) {
    return a + b;
}

export function subtrair(a, b) {
    return a - b;
}

// Exportação padrão
export default function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Importando módulos
// arquivo: app.js
import { PI, somar } from './matematica.js';
import saudacao from './saudacao.js';

console.log(PI);               // Saída: 3.14159
console.log(somar(5, 3));      // Saída: 8
console.log(saudacao("Alice"));// Saída: Olá, Alice!

// Renomeando importações e exportações
// arquivo: calculos.js
export { somar as adicionar, subtrair as diminuir };

// arquivo: app.js
import { adicionar, diminuir } from './calculos.js';
console.log(adicionar(10, 5)); // Saída: 15

// Importação global de tudo de um módulo
import * as calc from './matematica.js';

console.log(calc.PI);          // Saída: 3.14159
console.log(calc.somar(5, 3)); // Saída: 8

// Importação dinâmica de módulos (condicional)
if (condicao) {
    import('./matematica.js').then(modulo => {
        console.log(modulo.somar(5, 3)); // Saída: 8
    });
}

// Exportando tudo com export *
 // arquivo: index.js
export * from './matematica.js';
export { default as saudacao } from './saudacao.js';
