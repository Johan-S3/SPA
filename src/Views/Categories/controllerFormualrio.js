import { limitar, outFocus, validarFormulario, validarLetras } from "../../Helpers/validacionForm";
import Swal from 'sweetalert2';

export const controllerFormulario = () => {

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

    validarFormulario(e);

    const solicitud = await fetch('http://localhost:3000/api/categorias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre.value,
        descripcion: descripcion.value
      })
})
    const datos = await solicitud.json();
    console.log(datos);
    
    if (datos.success) {
      Swal.fire({
        title: 'Categoria Creada exitosamente',
        icon: 'success',
        // backdrop: false,         
        // allowOutsideClick: false,
        customClass: {
          confirmButton: 'button__ok'
        },
      }).then(() => {
        window.location.hash = "Categories";
      });
    }
  })
};