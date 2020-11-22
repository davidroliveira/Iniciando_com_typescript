
let linguagem: string = 'Typescript';
let texto: string = `Olá ${linguagem}`;
let idade: number = 33;

linguagem = '19';

let getPerfil = function(nome: string, idade: number, email: string): void {
    console.log(nome, idade, email);
};

function getIdade(idade: number): string {
    return idade + " anos";
}

//Arrow function
let retornaPerfil = (nome: string, idade: number, email: string): void => {
    nome = nome.toUpperCase();
    console.log(nome, idade, email);
}

//getPerfil(364,54,"teste@teste");
//let idadeAnos: number = getIdade(45);

console.log(texto, idade);

//Tipos
//primitivos
let nome: string = "Ana";
let idade2: number = 19;
let ehMaior: boolean = idade2 > 17;

//vetores
let lista: string[] = ["verde", "azul", "amarelo"];
let listaNumeros: Array<number> = [81, 82, 83];

//enumerators
enum Cor { vermelho=2, azul/*3*/, laranja/*4*/};
let cor: Cor = Cor.azul;

console.log(cor);//1
console.log(Cor[4]);//laranja

//variant
let aux: any;
aux = "teste";
aux = 43;
aux = [43, 34];

let arrayAny: any[] = [43, "teste", {}];

function listaNomes(lista: string[]): void {
    console.log(lista);
}

///////////////////////////////////////////////////////

import { Veiculo } from './classes/veiculo-class';
import { Moto } from './classes/moto-class';

let camaro: Veiculo = new Veiculo("Camaro Amarelo");
let honda: Moto = new Moto("Honda Titan", 2);

console.log(camaro.getTitulo());

console.log(honda.getTitulo());

console.log(honda);


//document.getElementById('nomeMoto').innerHTML = honda.getTitulo();
//let minhaDiv: HTMLDivElement; //= document.getElementById('nomeMoto') as HTMLDivElement;
let motoDiv = document.getElementById('nomeMoto') as HTMLDivElement;
motoDiv.innerHTML = honda.getTitulo();
console.log(motoDiv);


let carroDiv = document.getElementById("nomeCarro") as HTMLDivElement;
carroDiv.innerHTML = camaro.getTitulo();
console.log(camaro);