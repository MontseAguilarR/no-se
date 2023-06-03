export class Cancion{
    _id?: number;
    nombre_cancion: string;
    instrumento: string;
    artista: string;
    duracion: string;

    constructor(nombre_cancion: string, instrumento:string, artista: string, duracion: string){
        this.nombre_cancion=nombre_cancion;
        this.instrumento=instrumento;
        this.artista=artista;
        this.duracion=duracion;
    }

}