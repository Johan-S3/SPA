import { create } from "../../Helpers/peticiones";
import { limitar, outFocus, validarFormulario, validarLetras } from "../../Helpers/validacionForm";
import { successWindow, errorWindow } from "../../Helpers/ventanas";
export const loginController = () => {
        const email = document.querySelector('[name="email"]');  
        const contrasena = document.querySelector('[name="contrasena"]');
        
        // Validamos las letras permitidas en el campo de email
        email.addEventListener("keydown", validarLetras);
        // email.addEventListener("keydown", limitar)
        
        // Detectamos cuando el usuario sale del campo de email
        email.addEventListener("blur", outFocus);
        // contrasena.addEventListener("blur", outFocus);
        
        
        const formulario = document.querySelector(".main__form");
        
        formulario.addEventListener("submit", async (e) => {
            e.preventDefault();
        
            if (!validarFormulario(e)) return;
        
            const data = {
                email: email.value,
                contrasena: contrasena.value
            };
        
            // const crearCategoria = await create("categorias", data)
            // const datos = await crearCategoria.json();
            // console.log(datos);
            
            // if (datos.success) {
            //     successWindow('Categoria Creada exitosamente').then(() => {
            //         window.location.hash = "Categories";
            //     });
            // } else {
            //     errorWindow('No se puede crear la categoria', datos.erros);
            // }
        })
}