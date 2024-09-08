// Crear un carrito de compras simple utilizando JavaScript, HTML y CSS.
// El carrito debe permitir agregar productos, eliminarlos y mostrar un resumen de la
// compra.
// Se utilizarán clases para representar los productos y el carrito.
// Se emplearán métodos de arreglos para gestionar los productos en el carrito.
// Se implementará una interfaz de usuario básica utilizando HTML y CSS.
// Estructura del Proyecto:
// • index.html: Contiene el HTML básico para la lista de productos y el carrito.
// • style.css: Contiene los estilos CSS para darle formato a la página.
// • script.js: Contiene el código JavaScript para la lógica del carrito de compras.


// Creo la clase Producto indicando la cantidad 0, esto es para contabilizar 
 // la cantidad de productos agregue el usuario.
class Producto {
    constructor (nombre, precio, imagen){
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = 0;
            this.imagen = imagen;
    }
        // Creo el metodo vaciarProductos() para resetear el contador a 0
        // cuando me sea necesario.
        vaciarProductos() {
                this.cantidad = 0;
        }
}

// Defino los objetos de la clase Producto

const producto1 = new Producto('Led TCL 42"', 429999, 'imagen1');
const producto2 = new Producto('Led LG 55" 4K', 2899999, 'imagen2');
const producto3 = new Producto('Aire Acondicionado Frío Calor 5500 Fg', 1249999, 'imagen3');
const producto4 = new Producto('Lavarropas Automatico Concept DREAN', 638999, 'imagen4');
const producto5 = new Producto('Motorola E14 Verde 64 Gb', 199999, 'imagen5');
const producto6 = new Producto('Freidora De Aire Easyfryer-9000 TELEFUNKEN', 209999, 'imagen6');

console.log(producto1);
// Creo la clase carrito y sus metodos. El constructor tiene un array
// vacío donde se le agregarán los productos. También le agrego un contador
// para saber cuantos objetos tiene el carrito.

class carrito {
    constructor() {
        this.carrito = [];
        this.cantidad = 0;
    }
        // Este metodo primero verifica que si no hay nada en el carrito
        // vacía el div. 
        // Agrega al carrito el producto entrante mediante .push
        // Suma 1 al contador del carrito.
        
    agregarProducto(producto) {
        if (this.cantidad === 0) {
            document.getElementById("carritoOculto").innerHTML = '';
        }
        this.carrito.push(producto);
        this.cantidad = this.cantidad+1;
        producto.cantidad = producto.cantidad + 1;
        this.publicarCarrito(producto);
        this.actualizarCantidadCarrito();
        this.botonVaciarCarrito();
        this.botonComprar();
    }
    vaciarCarrito() {
        this.carrito = [];
        this.cantidad = 0;
        this.actualizarCantidadCarrito();
        this.borrarTodo();
        producto1.vaciarProductos();
        producto2.vaciarProductos();
        producto3.vaciarProductos();
        producto4.vaciarProductos();
        producto5.vaciarProductos();
        producto6.vaciarProductos();
        //////// Acá crear variable que convierta las cantidades de los productos en 0 ////////
        
    }
     publicarCarrito(producto) {
        const nombreProducto = document.getElementById("carritoOculto");
        const element = document.createElement("div");
        const elementNombre = document.createElement("div");
        const elementImagen = document.createElement("img");
        const elementCantidad = document.createElement("div");
        element.id = "element";
        elementNombre.id = producto.nombre+"-id";
        elementCantidad.id = producto.nombre +"elementCantidad";
        elementImagen.id = "elementImagen";
        elementImagen.src = producto.imagen + '.jpg';
        elementNombre.textContent = producto.nombre;
        elementCantidad.textContent = producto.cantidad;
        const verificacion = document.getElementById(producto.nombre+"-id");
        const actualizarNumero = document.getElementById(producto.nombre+"elementCantidad");
        if (!verificacion) {
        nombreProducto.appendChild(element);
        element.appendChild(elementNombre);
        element.appendChild(elementImagen);
        element.appendChild(elementCantidad);
        }
        else {
            actualizarNumero.textContent = '';
            actualizarNumero.textContent = producto.cantidad;
        }
     }
    botonVaciarCarrito() {
            const botonVaciar = document.getElementById("botonVaciar");
            let vaciarBoton = document.getElementById("vaciarCarrito");
            if (this.cantidad > 0 && !vaciarBoton) {
                vaciarBoton = document.createElement("button");
                vaciarBoton.id = "vaciarCarrito";
                vaciarBoton.textContent = "Borrar";
                vaciarBoton.onclick = () => this.vaciarCarrito();
                botonVaciar.appendChild(vaciarBoton);
            }
        }
    botonComprar() {
            const botonComprar = document.getElementById("botonComprar");
            let comprarBoton = document.getElementById("comprarProducto");
            if (this.cantidad > 0 && !comprarBoton) {
                comprarBoton = document.createElement("button");
                comprarBoton.id = "comprarProducto";
                comprarBoton.textContent = "Comprar";
                botonComprar.onclick = () => this.comprarProducto();
                botonComprar.appendChild(comprarBoton);
        }
    }
    comprarProducto() {
        const resumenCompra = document.getElementById("resumenCompra");
        let total = 0;
        for (let producto of this.carrito) {
            const verificar = document.getElementById(producto.nombre);
            if (!verificar) {
            let subtotal = producto.cantidad*producto.precio;
            total = total + subtotal;
            const listaProductos = document.createElement("li");
            listaProductos.id = producto.nombre;
            listaProductos.style.listStyle = "none";
            listaProductos.textContent = `${producto.nombre} X${producto.cantidad} Precio = $${producto.precio}`;
            resumenCompra.appendChild(listaProductos);
            }
        }
        const totalCompra = document.getElementById("totalCompra");
        totalCompra.textContent = `Total: $${total}`;
            const confirmarCompra = document.getElementById("confirmarCompra");
            const header = document.getElementById("header");
            const carritoLateral = document.getElementById("carritoLateral");
                if (confirmarCompra.style.opacity = "0") {
                    confirmarCompra.style.visibility = "visible";
                    confirmarCompra.style.opacity = "1";
                    header.style.opacity = "0";
                    carritoLateral.style.opacity = "0";
                }
                else {
                    confirmarCompra.style.opacity = "0";
                    confirmarCompra.style.display = "none";
                }
        }
    actualizarCantidadCarrito() {
        document.getElementById("cantidadCarrito").innerHTML = this.cantidad;
    }
    borrarTodo() {
        document.getElementById("carritoOculto").innerHTML = 'No hay elementos en el carrito';
        document.getElementById("botonVaciar").innerHTML = '';
        document.getElementById("botonComprar").innerHTML = '';
    }
}
// Creo el carrito mediante un objeto, no es necesario definir más carritos.

const Carrito1 = new carrito();

// Esta funcion actualiza el contador del carrito.

function cantidadCarrito() {
document.getElementById("cantidadCarrito").innerHTML = Carrito1.cantidad;
}
cantidadCarrito();

// Esta funcion agrega un EventListener que al hacer click
// en el icono del carrito me muestra el carrito.

function mostrarCarrito() {
    const iconoCarrito = document.getElementById("carritoIcono");
    const carritoOculto = document.getElementById("carritoLateral");
    iconoCarrito.addEventListener("click", () => {
        if (carritoOculto.style.opacity === "0") {
            carritoOculto.style.opacity = "1";
            carritoOculto.style.visibility = "visible";
        }
        else {
            carritoOculto.style.opacity = "0";
            carritoOculto.style.visibility = "hidden";
        }
    })
}
mostrarCarrito();