class Avion{
    #nombreAvion;
    #capacidad;
    #destino;
    #listaPasajero;

    constructor(nombreAvionParam, capacidadParam, destinoParam){
        this.#nombreAvion = nombreAvionParam;
        this.#capacidad = capacidadParam;
        this.#destino = destinoParam;
        this.#listaPasajero = [];
    }

    get obtenerNombreAvion(){
        return this.#nombreAvion;
    }

    get obtenerCapacidad(){
        return this.#capacidad;
    }

    get obtenerDestino(){
        return this.#destino;
    }

    get obtenerListaPasajero(){
        return this.#listaPasajero;
    }

    abordar(pasajero){
        if(this.obtenerCapacidad >= this.obtenerListaPasajero.length){
            this.#listaPasajero.push(pasajero);
        }else{
            document.write('<p class="text-warning fs-2"> El avion se encuentra lleno! </p>')
        }
    }
}


class Aeropuerto{

    #nombreAeropuerto;
    #listaAviones;

    constructor(nombreAeropuertoParam){
        this.#nombreAeropuerto = nombreAeropuertoParam;
        this.#listaAviones = [];
    }

    get obtenerNombreAeropuerto(){
        return this.#nombreAeropuerto;
    }

    get obtenerListaAviones(){
        return this.#listaAviones;
    }

    agregarAviones(avion){
        this.#listaAviones.push(avion);
    }

    buscarAvion(nombreAvion){
        for(let i = 0; i<= this.obtenerListaAviones.length ; i++){
            if(nombreAvion === this.obtenerListaAviones[i].obtenerNombreAvion){
                document.write(`<p class="text-center text-primary fs-1">El avion ${this.obtenerListaAviones[i].obtenerNombreAvion} si se encuentra</p>`)
                return nombreAvion;
            }
        }
        
    }
}

const aeropuertoInternacional = new Aeropuerto('Aeropuerto Internacional');

const avion1 = new Avion('Avion1', 200, 'España, Madrid');
const avion2 = new Avion('Avion2', 100, 'Argentina, Buenos Aires');
const avion3 = new Avion('Avion3', 150, 'Italia, Milan');

aeropuertoInternacional.agregarAviones(avion1);
aeropuertoInternacional.agregarAviones(avion2);
aeropuertoInternacional.agregarAviones(avion3);

let avionEncontrado = aeropuertoInternacional.buscarAvion('Avion4');

if(avionEncontrado){
    document.write(`<p class="text-center text-success fs-2">El pasajero puede subir!!</p>`);
    avion1.abordar('Rolling Code');
    console.log(avion1);
}else{
    document.write(`<p class="text-center text-warning fs-1">El avion no se encuentra por lo tanto no se puede abordar pasajeros</p>`);
}