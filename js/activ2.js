let nombres = [];
let nombre = "";

while (nombre !== "Voldemort") {
  nombre = prompt("Ingresa un nombre");
  nombres.push(nombre);
}

alert("Los nombres ingresados fueron: " + nombres.slice(0, -1).join(", "));
