class Libro {
  #_ISBN;
  #_titulo;
  #_autor;
  #_numPag;

  constructor(ISBNParam, tituloParam, autorParam, numPagParam) {
    this.#_ISBN = ISBNParam;
    this.#_titulo = tituloParam;
    this.#_autor = autorParam;
    this.#_numPag = numPagParam;
  }

  get obtenerISBN() {
    return this.#_ISBN;
  }

  set nuevoISBN(ISBN) {
    if (ISBN >= 0 && Number.isInteger(ISBN)) {
      this.#_ISBN = ISBN;
    } else {
      alert("Ingrese un ISBN válido");
    }
  }

  get obtenerTitulo() {
    return this.#_titulo;
  }

  set nuevoTitulo(titulo) {
    if (titulo != "") {
      this.#_titulo = titulo;
    } else {
      alert("Ingrese un título válido");
    }
  }

  get obtenerAutor() {
    return this.#_autor;
  }

  set nuevoAutor(autor) {
    if (autor !== "") {
      this.#_autor = autor;
    } else {
      alert("Ingrese un autor válido");
    }
  }

  get obtenerNumPagina() {
    return this.#_numPag;
  }

  set nuevoNumPagina(numPag) {
    if (numPag >= 0 && Number.isInteger(numPag)) {
      this.#_ISBN = ISBN;
    } else {
      alert("Ingrese un número de página válido");
    }
  }

  mostrarLibro() {
    document.write(
      `<h4 class="text-center text-success">El libro ${this.obtenerTitulo} con ISBN ${this.obtenerISBN} creado por el autor ${this.obtenerAutor} tiene páginas ${this.obtenerNumPagina}</h4>`
    );
  }
}

const libro1 = new Libro(15168136, 'El Poder de la Autodisciplina', 'Lia Murillo', 50);
const libro2 = new Libro(16268743, 'LA CASA NEVILLE . LA FORMIDABLE SEÑORITA MANON', 'BONELLI, FLORENCIA', 62);

libro1.mostrarLibro();
libro2.mostrarLibro();

if(libro1.obtenerNumPagina > libro2.obtenerNumPagina){
    document.write(`<p class="text-center text-primary fs-2">El libro ${libro1.obtenerTitulo} posee más páginas</p>`);
}else{
    document.write(`<p class="text-center text-primary fs-2">El libro ${libro2.obtenerTitulo} posee más páginas</p>`);
}

