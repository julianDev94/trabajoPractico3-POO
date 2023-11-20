class Persona{
    #_nombre;
    #_edad;
    #_profesion;

    constructor(nombreParam, edadParam, profesionParam){
        this.#_nombre = nombreParam;
        this.#_edad = edadParam;
        this.#_profesion = profesionParam;
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

    get obtenerProfesion(){
        return this.#_profesion;
    }

    set nuevoProfesion(profesion){
        if(profesion !== ''){
            this.#_profesion = profesion;
        }else{
            alert("Ingrese una profesión válida");
        }
    }

    saludar(){
        document.write(`<h4>Hola, como estas? Me llamo ${this.obtenerNombre} tengo ${this.obtenerEdad} años y soy ${this.obtenerProfesion}</h4>`);
    }

    despedirse(){
        document.write("<h4>Hasta pronto!</h4>");
    }

}

const persona1 = new Persona('Juan', 18, 'Estudiante');
const persona2 = new Persona('Pedro', 29, 'Ingeniero en Sistemas');

persona1.saludar();
persona1.despedirse();
persona2.saludar();
persona2.despedirse();
