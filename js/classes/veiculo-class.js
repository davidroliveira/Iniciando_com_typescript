"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(titulo, rodas) {
        if (titulo === void 0) { titulo = "Nome Carro"; }
        if (rodas === void 0) { rodas = 4; }
        this.titulo = titulo;
        this.rodas = rodas;
        this.titulo = titulo;
        this.rodas = rodas;
    }
    Veiculo.prototype.getTitulo = function () {
        return this.titulo;
    };
    Veiculo.prototype.getRodas = function () {
        return this.rodas;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
;
//# sourceMappingURL=veiculo-class.js.map