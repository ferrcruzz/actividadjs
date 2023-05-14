let productos = "";
let numero = "";

while (numero !== "ESC") {
  numero = prompt("Ingresa un número");
  switch (numero) {
    case "1":
      productos += "Tomate ";
      break;
    case "2":
      productos += "Papa ";
      break;
    case "3":
      productos += "Carne ";
      break;
    case "4":
      productos += "Pollo ";
      break;
    default:
      // no hacer nada si el usuario ingresa otra cosa o "ESC"
      break;
  }
}

alert("Los productos ingresados fueron: " + productos);
