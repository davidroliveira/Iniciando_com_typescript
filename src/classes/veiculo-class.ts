import { IVeiculo } from '../interfaces/veiculo-interface';

class Veiculo implements IVeiculo {

    constructor(private titulo: string = "Nome Carro", private rodas: number = 4) {
        this.titulo = titulo;
        this.rodas = rodas;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getRodas(): number {
        return this.rodas;
    }
};

export { Veiculo };