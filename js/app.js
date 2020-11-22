"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linguagem = 'Typescript';
var texto = "Ol\u00E1 " + linguagem;
var idade = 33;
linguagem = '19';
var getPerfil = function (nome, idade, email) {
    console.log(nome, idade, email);
};
function getIdade(idade) {
    return idade + " anos";
}
//Arrow function
var retornaPerfil = function (nome, idade, email) {
    nome = nome.toUpperCase();
    console.log(nome, idade, email);
};
//getPerfil(364,54,"teste@teste");
//let idadeAnos: number = getIdade(45);
console.log(texto, idade);
//Tipos
//primitivos
var nome = "Ana";
var idade2 = 19;
var ehMaior = idade2 > 17;
//vetores
var lista = ["verde", "azul", "amarelo"];
var listaNumeros = [81, 82, 83];
//enumerators
var Cor;
(function (Cor) {
    Cor[Cor["vermelho"] = 2] = "vermelho";
    Cor[Cor["azul"] = 3] = "azul"; /*3*/
    Cor[Cor["laranja"] = 4] = "laranja"; /*4*/
})(Cor || (Cor = {}));
;
var cor = Cor.azul;
console.log(cor); //1
console.log(Cor[4]); //laranja
//variant
var aux;
aux = "teste";
aux = 43;
aux = [43, 34];
var arrayAny = [43, "teste", {}];
function listaNomes(lista) {
    console.log(lista);
}
///////////////////////////////////////////////////////
var veiculo_class_1 = require("./classes/veiculo-class");
var moto_class_1 = require("./classes/moto-class");
var camaro = new veiculo_class_1.Veiculo("Camaro Amarelo");
var honda = new moto_class_1.Moto("Honda Titan", 2);
console.log(camaro.getTitulo());
console.log(honda.getTitulo());
console.log(honda);
//document.getElementById('nomeMoto').innerHTML = honda.getTitulo();
//let minhaDiv: HTMLDivElement; //= document.getElementById('nomeMoto') as HTMLDivElement;
var motoDiv = document.getElementById('nomeMoto');
motoDiv.innerHTML = honda.getTitulo();
console.log(motoDiv);
var carroDiv = document.getElementById("nomeCarro");
carroDiv.innerHTML = camaro.getTitulo();
console.log(camaro);
var button = document.createElement('button');
button.textContent = 'Say hello';
button.onclick = function () {
    alert(camaro.getTitulo());
};
document.body.appendChild(button);
//# sourceMappingURL=app.js.map