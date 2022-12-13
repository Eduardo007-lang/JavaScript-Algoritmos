
    var assert = require('assert');

    /*n1 = 3222;
    s1 = 'my string';
    b1 = true;
    n2 = null; // o tipo primitivo do null e (object) pelo fato dele apontar para um objeto inexistente







    console.log(`My variable is ${typeof n2}`);
    console.log(`My variable is ${typeof s1}`);
    console.log(`My variable is ${typeof b1}`);
    console.log(`My variable is ${typeof n2}`);
    */

    

    /*
    tipo boolean  false and true 
    ! -> negacao se o valor for true e passar o ponto de interrogacao o valor passarar a ser false e vice versa
    
     let x = 10;

    // A variavel x tem o valor maior que o numeral 10 ? se sim E verdairo se nao E Falso!

     x > 10 = false;
    
    // O resultado retornar falso, pois o valor de x nao E maior que 10 eles sao iguais, ou seja, nem maior e nem menor.

    // A negacao funciona da seguinte forma, vou mostrar um exemplo abaixo...
    
        let x = 10;
        let result = x > 10 ;

        // Nesse momento sera imprimido o valor 'true', pois a negacao E simplesmente negar o valor real, contradizer aquele resultado,
        // com isso sabemos que o result retornaria um valor 'false' pois o valor armazenado dentro da variavel x nao e maior que 10 e
        // igual a 10.
        console.log(!result);

    */
    
    // Funcoes JavaScript


    //Uma funcao JavaScript se inicia com a palavra chave "function" 
    //seguido com o nome da funcao e lista de argumentos passado entre parentese e separados pro virgulas
    //E declaracao da funcao passado entre chaves onde define a funcao
    //Exemplo: 

  


// Inicializacao OBJECT 

//Serve para acessar ou declarar uma nova propriedade ou metodo;


/*

//Declaracao de um object de forma literal 
const dotNotation = {

    prop1: "Sou uma propriedade que sera acessada usando dot notation",
    metodo: function(obj) {
        return "Sou o um metodo, ou seja uma funcao dentro de um objeto";
    },
}

*/

// Criando uma array de forma literal

// let frutas = [];

//ou
        
let frutas = ["Maca","Banana"];

console.log(frutas.length);


// outra maneira usando o operador construtor -> new constroi um novo objeto por meio da funcao construtora do array

let frutasUsandoNew = new Array("Maca","Banana");

frutasUsandoNew = ["Pera","Uva"];

let arrTamanho = new Array(10);

const arrEsparso = [1,,,3];

console.log(frutasUsandoNew);

// metodo delete 

delete frutasUsandoNew[1];

// A propriedade length e wrible, significa que ela pode ser alterada;

const animais = ["leao", "tigre", "cachorro", "Girafa", "macaco"];

animais.length = 3;

console.log(animais);

