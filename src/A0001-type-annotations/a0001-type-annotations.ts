/*eslint-disable*/

// Tipos básicos (Ocorre inferência de tipos)
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;


// Arrays

let arrayNume: number[] = [1,2,3];
let arrayNum: Array<number> = [1,2,3];
let arrayString: Array<string> = ['a','b'];
let arrayStrings: string[] = ['a','b'];

//objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Arthur'
};
console.log(pessoa.nome);

// funções
function soma(x: number, y: number){
  return x + y;
}
const soma2: (x: number, y: number) => number = (x,y) => x+y;
