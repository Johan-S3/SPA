import './style.css';
import { controllerCategoria } from './Views/Categories/controllerCategories';
import { controllerFormulario } from './Views/Categories/controllerFormualrio';
import { controllerProducto } from './Views/Products/controllerProducts';




const main = document.querySelector(".main");

window.addEventListener('hashchange', function() {
  const hash = window.location.hash.slice(1);
  console.log("El hash ha cambiado.");
  console.log("Nuevo hash:", hash);

  recorrer(hash);
});

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.slice(1);
  if (hash) recorrer(hash);
});

async function cargarVista(ruta) {
  if (!ruta) {
    const mensaje = "<h1>404</h1><h1>\nPage not found</h1>"
    main.innerHTML = mensaje;
    return;
  }
  const vista = await fetch(ruta);
  const html = await vista.text();
  main.innerHTML = html;
}

async function recorrer(hash) {
  const objeto = rutas.find(objeto => objeto.nombre == hash);
  if (objeto) {
    const path = objeto.path;
    await cargarVista(path);
    objeto.controlador();
    return
  }
  cargarVista(null);
}



const rutas = [
  {
    nombre: "Home",
    path: "src/Views/Home/index.html",
    // controlador: controllerCategoria
  },
  {
    nombre: "Categories",
    path: "src/Views/Categories/index.html",
    controlador: controllerCategoria
  },
  {
    nombre: "Products",
    path: "src/Views/Products/index.html",
    controlador: controllerProducto
  },
  {
    nombre: "FormularioCategoria",
    path: "src/Views/Categories/formulario.html",
    controlador: controllerFormulario
  }
]