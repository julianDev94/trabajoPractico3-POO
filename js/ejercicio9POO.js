class Animal{
    #_nombre;
    #_edad;

    constructor(nombreParam, edadParam){
        this.nombre = nombreParam;
        this.edad = edadParam;
    }

    get obtenerNombre(){
        return this.#_nombre;
    }

    set nuevoNombre(nombre){
        if(nombre !== ''){
            this.#_nombre = nombre;
        }else{
            alert("Ingrese un nombre válido");
        }
    }

    get obtenerEdad(){
        return this.#_edad;
    }

    set nuevoEdad(edad){
        if(edad > 0 ){
            this.#_edad = edad;
        }else{
            alert("Ingrese una edad válida");
        }
    }

    emitirSonido(){
        document.write('<h4 class="text-primary">Soy animal</h4>');
    }
}

class Perro extends Animal{
    constructor(nombreParam, edadParam){
        super(nombreParam, edadParam);
    }

    emitirSonido(){
        document.write("<h4>Guau guau</h4>");
    }
}

class Gato extends Animal{
    constructor(nombreParam,edadParam){
        super(nombreParam, edadParam);
    }

    emitirSonido(){
        document.write("<h4>Miau miau</h4>")
    }
}

const perrito = new Perro('Lolo', 5)
const gatito = new Gato('Cholo', 3);

perrito.emitirSonido();
gatito.emitirSonido();