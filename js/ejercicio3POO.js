class Rectangulo{
    #_alto;
    #_ancho;
    constructor(altoParam,anchoParam){
        this.#_alto = altoParam;
        this.#_ancho = anchoParam;
    }

    get obtenerAlto(){
        return this.#_alto;
    }

    set nuevoAlto(nuevoAlto){
        this.#_alto = nuevoAlto;
    }

    get obtenerAncho(){
        return this.#_ancho;
    }

    set nuevoAncho(nuevoAncho){
        this.#_ancho = nuevoAncho;
    }

    mostrarPropiedades(){
        document.write(`<h2 class="text-center text-primary">Propiedades del rectangulo</h2>`)
        document.write(`
        <p class="text-center text-success fs-2">Alto del rectangulo: ${this.obtenerAlto}</p>
        <p class="text-center text-success fs-2">Ancho del rectangulo: ${this.obtenerAncho}</p>
        `);
    }

    calcularPerimetro(){
        let perimetro = 2*(this.obtenerAlto + this.obtenerAncho );
        return perimetro;
    }

    calcularArea(){
        let area = this.obtenerAlto * this.obtenerAncho;
        return area;
    }
}

const rectangulo1 = new Rectangulo(50,30);
const rectangulo2 = new Rectangulo(100, 70);

rectangulo1.mostrarPropiedades();
document.write(`<p class="text-center text-warning fs-2">El perimetro del rectangulo es: ${rectangulo1.calcularPerimetro()}</p>`);
document.write(`<p class="text-center text-warning fs-2">El perimetro del rectangulo es: ${rectangulo1.calcularArea()}</p>`);

rectangulo2.mostrarPropiedades();
document.write(`<p class="text-center text-warning fs-2">El perimetro del rectangulo es: ${rectangulo2.calcularPerimetro()}</p>`);
document.write(`<p class="text-center text-warning fs-2">El perimetro del rectangulo es: ${rectangulo2.calcularArea()}</p>`);