//SIMULADOR DE COMPRAS

//STOCK DE LIBROS

class Libro {
  constructor(nombre, autor, precio, id, stock) {
    this.nombre = nombre;
    this.autor = autor;
    this.precio = precio;
    this.id = id;
    this.stock = stock;
  }
}

const libros = [
  {
    nombre: "Vermeer:La Obra Completa",
    autor: "Karl Shutz",
    precio: 5000,
    id: 01,
    stock: 3,
  },
  {
    nombre: "Eso no estaba en mi libros de matemáticas",
    autor: "Vicente Meavilla",
    precio: 1500,
    id: 02,
    stock: 25,
  },
  {
    nombre: "Bajo La misma Estrella",
    autor: "John Green",
    precio: 2500,
    id: 03,
    stock: 10,
  },
];

class Carrito {
  constructor() {
    this.productos = [];
  }

  hayStock(libro, unidades) {
    if (libro.stock != 0 && libro.stock >= unidades) {
      return true;
    }
    if (libro.stock == 0) {
      console.log("No hay mas en stock");
      return false;
    }
    if (libro.stock < unidades) {
      console.log("La cantidad ingresada excede el stock");
      return false;
    }
  }

  agregarItem(libro, unidades) {
    if (
      this.hayStock(libro, unidades) &&
      this.productos.find((el) => el.id == libro.id) == null
    ) {
      libro.stock -= unidades;
      libro.cantidad_comprada = unidades; // AGREGO CANTIDAD COMPRADA
      this.productos.push(libro);
    } else {
      return false;
    }
  }
}

const carrito = new Carrito();

const imgAdd = document.getElementsByClassName("foto");

imgAdd[0].onclick = () => {
  const idBuscado = 1;
  const elementoLibro = libros.find((elemento) => elemento.id == idBuscado);
  carrito.agregarItem(elementoLibro, 1);
};

let total = 0;
let envio = 1000;
let valorIVA = 0.21;

for (let i = 0; i < carrito.productos.length; i++) {
  total += carrito.productos[i].precio;
}

const iva = (x) => x * valorIVA;

let precioFinal = total + iva(total) + envio;

//MUESTRO POR CONSOLA TOTAL Y TOTAL CON MODIFICACIONES CORRESPONDIENTES
console.log("Total " + total);
console.log("Total con envio + IVA = " + precioFinal);
