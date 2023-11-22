const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo = this.saldo + cantidad;
    return this.saldo;
  },
  extraer: function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo = this.saldo - cantidad;
      return this.saldo;
    } else {
      document.write(
        '<p class="text-warning text-center fs-1">Usted no posee fondos suficientes!! </p>'
      );
      return this.saldo;
    }
    
  },
  informar: function (estado) {
    document.write(`<p class="text-center text-success fs-1"> Saldo actual de la cuenta: ${estado}</p>`);
  },
};

document.write(
  `<p class="text-center text-primary fs-1">Saldo de la cuenta actual: ${cuenta.saldo}</p>`
);

let saldoCuenta = 0;

let agregarSaldo = parseInt(prompt("Ingresar saldo"));
if (Number.isInteger(agregarSaldo)) {
  saldoCuenta = cuenta.ingresar(agregarSaldo);
  cuenta.informar(saldoCuenta);
} else {
  alert("El valor ingresado no es válido!");
}

let extraerSaldo = parseInt(prompt("Extraer saldo"));
if (Number.isInteger(extraerSaldo)) {
  saldoCuenta = cuenta.extraer(extraerSaldo);
  document.write(`<p class="text-center text-success fs-1"> Usted extrajo: $${extraerSaldo} de su cuenta</p>`);
  cuenta.informar(saldoCuenta);
} else {
  alert("El valor ingresado no es válido!");
}
