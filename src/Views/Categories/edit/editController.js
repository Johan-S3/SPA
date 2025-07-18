import * as api from "../../../Helpers/peticiones";
import { limitar, outFocus, validarFormulario, validarLetras } from "../../../Helpers/validacionForm";
import { successWindow, errorWindow } from "../../../Helpers/ventanas";

export const  editController = async (parametros = null) => {
    const nombre = document.querySelector('[name="nombre"]');  
    const descripcion = document.querySelector('[name="descripcion"]');

    const {id} = parametros;

    const peticion = await api.get(`categorias/${id}`);
    const resultado = await peticion.json();

    console.log(resultado);
    
    if(!resultado.success){
        const alerta = await errorWindow(data.message, data.erros);
        if(alerta.isConfirmed) window.location.hash = "#/categories"
        return;
    }

    const {data} = resultado;
    
    nombre.value = data.nombre;
    descripcion.value = data.descripcion;

    
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
    
        const actualizarCategoria = await api.update(`categorias/${id}`, data)
        const datos = await actualizarCategoria.json();
        console.log(datos);
        
        if (datos.success) {
            const alerta = await successWindow('Categoria actualizada exitosamente');
            if(alerta.isConfirmed) window.location.hash = "#/categories";
        } else {
            errorWindow('No se puede actualizar la categoria', datos.erros);
        }
    })
}