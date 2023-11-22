class Producto{
    #_codigo;
    #_nombre;
    #_precio;

    constructor(codigoParam, nombreParam, precioParam){
        this.#_codigo = codigoParam;
        this.#_nombre = nombreParam;
        this.#_precio = precioParam;
    }

    get obtenerCodigo(){
        return this.#_codigo;
    }

    set nuevoCodigo(codigo){
        if(Number.isInteger(codigo)){
            this.#_codigo = codigo;
        }else{
            alert("Por favor, ingrese un codigo válido");
        }
    }

    get obtenerNombre(){
        return this.#_nombre;
    }

    set nuevoNombre(nombre){
        if(nombre !== ''){
            this.#_nombre = nombre;
        }else{
            alert("Por favor, ingrese un nombre");
        }
    }

    get obtenerPrecio(){
        return this.#_precio;
    }

    set nuevoPrecio(precio){
        if(Number.isInteger(precio)){
            this.#_precio = precio;
        }else{
            alert("Por favor, ingrese un precio válido");
        }
    }

    imprimeDatos(){
        document.write(`<h4>Producto</h4>`);
        document.write(`<ul>
        <li>${this.obtenerCodigo}</li>
        <li>${this.obtenerNombre}</li>
        <li>${this.obtenerPrecio}</li>
        </ul>`);
    }
}

let arrayProductos = [];
const notebook = new Producto(125343, 'Notebook', 549000);
const parlante = new Producto(125344, 'Parlantes', 15400);
const monitor = new Producto(125345, 'Monitor', 85000);
arrayProductos.push(notebook,parlante,monitor);
console.log(arrayProductos);
for(let i = 0; i < arrayProductos.length; i++){
    document.write(`${arrayProductos[i].imprimeDatos()}`);
}


