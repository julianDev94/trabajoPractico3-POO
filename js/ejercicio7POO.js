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

class Agenda{
    #contactos;
    constructor(){
        this.#contactos = [];
    }

    aniadirContacto(contacto){
        if(tamanioAgenda > 0){
            for(let i = 0; i<tamanioAgenda; i++){
                this.#contactos[i] = contacto;
            }
        }
    }

    existeContacto(contacto){
        for(let i = 0; i < this.#contactos.length; i++){
            if(contacto === this.#contactos[i]){
                return 'existe';
            }
        
        }
    }

    listarContactos(){
        for(let i = 0; i < this.#contactos.length; i++){
            document.write(`<h4 class="text-primary">Contacto ${i}</h4>`)
            document.write("<ul>");
            document.write(`<li>${this.#contactos[i].obtenerNombre}</li>`);
            document.write(`<li>${this.#contactos[i].obtenerTelefono}</li>`);
            document.write("</ul>");        
        }
    }

    buscarContacto(nombre){
        for(let i = 0; i < this.#contactos.length; i++){
            if(nombre === this.#contactos[i].obtenerNombre){
                return this.#contactos[i].obtenerTelefono;
            }
        
        }
    }

    eliminarContacto(Contacto c){

    }

    agendaLlena(){
        if(this.#contactos.length === 10){
            document.write("<p>La agenda se encuentra llena</p>");
        }else{
            document.write("<p>La agenda no se encuentra llena</p>");
        }
    }

    huecosLibres(){
        let hueco = 0;
        if(this.#contactos.length >= 0 && this.#contactos.length <= 10 ){
            hueco = 10 - this.#contactos.length; 
            document.write(`<p>El hueco que queda disponible es ${hueco}</p>`);
        }else{
            document.write("<p>La agenda no se encuentra llena</p>");
        }
    }
}

do{
    
    document.write("<ul>");
    document.write("<li>1-Añadir contacto</li>");
    document.write("<li>2-Existe contacto</li>");
    document.write("<li>3-Listar contactos</li>");
    document.write("<li>4-Buscar contacto</li>");
    document.write("<li>5-Eliminar contacto</li>");
    document.write("<li>6-Comprobar estado de agenda</li>");
    document.write("<li>7-Comprobar huecos libres</li>");
    document.write("</ul>");
    let opcion = parseInt(prompt("Ingrese que opcion desea utilizar"));
    switch(opcion){
        case 1:
            const agregarContacto = new Agenda();
            const contacto1 = new Contacto('pepito','4249851');
            agregarContacto.aniadirContacto();
    }
}while();