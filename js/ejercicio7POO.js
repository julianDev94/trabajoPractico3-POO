class Contacto{
    #_nombre;
    #_telefono;

    constructor(nombreParam, telefonoParam){
        this.#_nombre = nombreParam;
        this.#_telefono = telefonoParam;
    }

    get obtenerNombre(){
        return this.#_nombre;
    }

    set modificarNombre(nombre){
        if(nombre !== ''){
            this.#_nombre = nombre;
        }else{
            alert("Ingrese un nombre válido");
        }
    }

    get obtenerTelefono(){
        return this.#_telefono;
    }

    set modificarTelefono(telefono){
        if(nombre !== ''){
            this.#_nombre = nombre;
        }else{
            alert("Ingrese un nombre válido");
        }
    }

    

}