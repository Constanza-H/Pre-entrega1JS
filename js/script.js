let carritoCantidadPorcionesTorta = 0; // Cantidad de porciones de torta en el carrito
let carritoCantidadAlfajores = 0; // Cantidad de alfajores en el carrito
let carritoCantidadMacarrons=0; // Cantidad de macarrons en el carrito 
let carritoCantidadCookies=0; // Cantidad de cookies en el carrito 
let carritoCantidadCroissants=0; // Cantidad de croassants en el carrito 

const precioPorcionT = 1500; // Precio de cada porcion de torta
const precioAlfajores = 550; // Precio de cada alfajor
const precioMacarrons = 600; // Precio de cada macarrons
const precioCookies = 450; // Precio de cada cookie
const precioCroissant= 850; // Precio de cada croissant


// Función para agregar una porcion de torta al carrito
function agregarPorcionTortaAlCarrito() {
  let cantidad = parseInt(prompt("Ingresa la cantidad de porciones de torta que deseas agregar:"));

  // Validar que la cantidad ingresada sea un número válido
  if (isNaN(cantidad)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  carritoCantidadPorcionesTorta += cantidad;

  alert("Las porciones de torta han sido agregadas al carrito.");
}

// Función para agregar un alfajor al carrito
function agregarAlfajorAlCarrito() {
  let cantidad = parseInt(prompt("Ingresa la cantidad de alfajores que deseas agregar:"));

  // Validar que la cantidad ingresada sea un número válido
  if (isNaN(cantidad)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  carritoCantidadAlfajores += cantidad;

  alert("Los alfajores han sido agregadas al carrito.");
}

// Función para agregar un macarrons al carrito
function agregarMacarronsAlCarrito() {
    let cantidad = parseInt(prompt("Ingresa la cantidad de macarrons que deseas agregar:"));
  
    // Validar que la cantidad ingresada sea un número válido
    if (isNaN(cantidad)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }
  
    carritoCantidadMacarrons += cantidad;
  
    alert("Los macarrons han sido agregadas al carrito.");
  }

  // Función para agregar un cookies al carrito
function agregarCookiesAlCarrito() {
    let cantidad = parseInt(prompt("Ingresa la cantidad de cookies que deseas agregar:"));
  
    // Validar que la cantidad ingresada sea un número válido
    if (isNaN(cantidad)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }
  
    carritoCantidadCookies += cantidad;
  
    alert("Las cookies han sido agregadas al carrito.");
  }

  // Función para agregar un croissant al carrito
function agregarCroissantsAlCarrito() {
    let cantidad = parseInt(prompt("Ingresa la cantidad de croissants que deseas agregar:"));
  
    // Validar que la cantidad ingresada sea un número válido
    if (isNaN(cantidad)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }
  
    carritoCantidadCroissants += cantidad;
  
    alert("Los croissants han sido agregados al carrito.");
  }
// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  let contenidoCarrito = "Contenido del carrito:\n";
  contenidoCarrito += "Porciones de torta: " + carritoCantidadPorcionesTorta + "\r";
  contenidoCarrito += "Alfajores: " + carritoCantidadAlfajores + "\r";
  contenidoCarrito += "Macarrons: " + carritoCantidadMacarrons + "\r";
  contenidoCarrito += "Cookies: " + carritoCantidadCookies + "\r";
  contenidoCarrito += "Croissants: " + carritoCantidadCroissants + "\r";
  
  alert(contenidoCarrito);
}


// Función para calcular el total a pagar
function calcularTotal() {
  let totalPorcionesTorta = carritoCantidadPorcionesTorta * precioPorcionT;
  let totalAlfajores = carritoCantidadAlfajores * precioAlfajores;
  let totalMacarrons = carritoCantidadMacarrons * precioMacarrons;
  let totalCookies = carritoCantidadCookies * precioCookies;
  let totalCroissants = carritoCantidadCroissants * precioCroissant;
  let total = totalPorcionesTorta + totalAlfajores + totalMacarrons + totalCookies + totalCroissants ;
  alert("Total a pagar: $" + total);
}

// Ciclo 
let continuar = true;

while (continuar) {
  let opcion = parseInt(prompt("Selecciona una opción:\n1. Agregar porción de torta al carrito\n2. Agregar alfajores al carrito\n3. Agregar macarrons al carrito\n4. Agregar cookies al carrito\n5. Agregar croissants al carrito\n6. Mostrar carrito\n7. Calcular total\n8 . Salir"));

  switch (opcion) {
    case 1:
      agregarPorcionTortaAlCarrito();
      break;
    case 2:
      agregarAlfajorAlCarrito();
      break;
      case 3:
      agregarMacarronsAlCarrito();
      break;
      case 4:
      agregarCookiesAlCarrito();
      break;
      case 5:
      agregarCroissantsAlCarrito();
      break;
      case 6:
      mostrarCarrito();
        break;
    case 7:
      calcularTotal();
      break;
    case 8:
       continuar = false;
      break;
    default:
      alert("Por favor, selecciona una opción válida.");
      break;
  }
}
