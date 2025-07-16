import { create } from "../../Helpers/peticiones";
import { limitar, outFocus, validarFormulario, validarLetras } from "../../Helpers/validacionForm";
import { successWindow, errorWindow } from "../../Helpers/ventanas";
export const createController = () => {  
  const nombre = document.querySelector('[name="nombre"]');  
  const descripcion = document.querySelector('[name="descripcion"]');

  // Validamos las letras permitidas en el campo de nombre
  nombre.addEventListener("keydown", validarLetras);
  // nombre.addEventListener("keydown", limitar)

  // Detectamos cuando el usuario sale del campo de nombre
  nombre.addEventListener("blur", outFocus);


  const formulario = document.querySelector(".main__form");
  
  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validarFormulario(e)) return;

    const data = {
      nombre: nombre.value,
      descripcion: descripcion.value
    };

    const crearCategoria = await create("categorias", data)
    const datos = await crearCategoria.json();
    console.log(datos);
    
    if (datos.success) {
      successWindow('Categoria Creada exitosamente').then(() => {
        window.location.hash = "Categories";
      });
    } else {
      errorWindow('No se puede crear la categoria', datos.erros);
    }
  })
};