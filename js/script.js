class Producto {
  constructor(name, id, type, price, stock, description, image) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.stock = stock;
    this.description = description;
    this.type = type;
    this.image = image;
  }
}

const carrito = [];

document.addEventListener('DOMContentLoaded', () => {
  cargarProductos()
    .then(productos => {
      renderizarProductos(productos);
      agregarEventListeners(productos);
    })
    .catch(error => {
      console.error('Error al cargar los productos:', error);
    });
});

function cargarProductos() {
  return fetch('../productos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar los datos: ${response.status}`);
      }
      return response.json();
    });
}

function crearCard(producto) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = producto.image;
  img.alt = producto.name;

  const h2 = document.createElement('h2');
  h2.textContent = producto.name;

  const p = document.createElement('p');
  p.textContent = producto.description;

  const span = document.createElement('span');
  span.textContent = `Precio: $${producto.price}`;

  const form = document.createElement('form');
  form.id = `form-${producto.id}`;

  const labelCantidad = document.createElement('label');
  labelCantidad.textContent = 'Cantidad';

  const inputCantidad = document.createElement('input');
  inputCantidad.type = 'number';
  inputCantidad.placeholder = '1';
  inputCantidad.id = `cantidad-${producto.id}`;

  const buttonAgregar = document.createElement('button');
  buttonAgregar.textContent = 'Agregar';
  buttonAgregar.classList.add('btn-primary');
  buttonAgregar.id = `agregar-${producto.id}`;

  form.appendChild(labelCantidad);
  form.appendChild(inputCantidad);
  form.appendChild(buttonAgregar);

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(span);
  card.appendChild(form);

  return card;
}

function agregarEventListeners(productos) {
  productos.forEach(producto => {
    const form = document.getElementById(`form-${producto.id}`);
    const botonAgregar = document.getElementById(`agregar-${producto.id}`);

    botonAgregar.addEventListener('click', event => {
      event.preventDefault();
      const cantidad = Number(document.getElementById(`cantidad-${producto.id}`).value);
      if (cantidad > 0) {
        agregarAlCarrito(producto, cantidad);
      }
    });
  });
}

function agregarAlCarrito(producto, cantidad) {
  const carritoItem = {
    producto: producto,
    cantidad: cantidad
  };
  carrito.push(carritoItem);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu producto se agrego con éxito al carrito de compras',
    showConfirmButton: false,
    timer: 1500
  })
}

function renderizarProductos(productos) {
  const contenedorProductos = document.getElementById('productos-container');
  contenedorProductos.innerHTML = '';

  productos.forEach(producto => {
    const card = crearCard(producto);
    contenedorProductos.appendChild(card);
  });
}


// Finalizar la compra
function finalizarCompra(event) {
  event.preventDefault();

  if (carrito.length === 0) {
    Swal.fire('Carrito Vacío', 'No hay productos en el carrito.', 'error');
    return;
  }

  // Datos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;

  // Datos del cliente
  const cliente = {
    nombre: nombre,
    email: email,
    telefono: telefono,
  };

  // Guardar pedido en el local storage
  const pedido = {
    cliente: cliente,
    carrito: carrito,
  };

  // resumen de la compra
  const resumen = `
    Resumen de la Compra:
    ---------------------
    Productos: ${carrito
      .map(item => `${item.producto.name} x${item.cantidad}`)
      .join('\n')}
    Total: $${totalCarrito()}
  `;

  Swal.fire({
    title: 'Confirmar Compra',
    text: resumen,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Finalizar Compra',
    cancelButtonText: 'Cancelar',
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire('¡Compra Finalizada!', '¡Gracias por tu compra!', 'success');
      carrito.length = 0;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      localStorage.setItem('pedido', JSON.stringify(pedido));
      renderizarCarrito();
      totalCarritoRender();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const formularioCompra = document.getElementById('formCompraFinal');
  formularioCompra.addEventListener('submit', finalizarCompra);
});
