import { controllerCategoria } from '../Views/Categories/controllerCategories';
import { controllerFormulario } from '../Views/Categories/controllerFormualrio';
import { controllerProducto } from '../Views/Products/controllerProducts';

export const rutas = [
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