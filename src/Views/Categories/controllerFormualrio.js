import { limitar, outFocus, validarFormulario, validarLetras } from "../../Helpers/validacionForm";

export const controllerFormulario = () => {

  const nombre = document.querySelector('[name="nombre"]');
  const descripcion = document.querySelector('[name="descripcion"]');

  // Validamos las letras permitidas en el campo de nombre
  nombre.addEventListener("keydown", validarLetras);
  // nombre.addEventListener("keydown", limitar)

  // Detectamos cuando el usuario sale del campo de nombre
  nombre.addEventListener("blur", outFocus);


  const formulario = document.querySelector(".main__form");
  
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario(e);
  })


};