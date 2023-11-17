const auto = {
    color: "Azul",
    marca: "Peugeot",
    modelo: "208",
    encender: function(){
        document.write(`<p class="text-center text-primary fs-1">Auto encendido</p>`);
    },
    apagar: function(){
        document.write(`<p class="text-center text-warning fs-1">El auto se apagó</p>`);
    }
}

auto.encender();
auto.apagar();
