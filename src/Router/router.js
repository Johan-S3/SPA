import { routes } from "./routers";

export const router = async (elemento) => {
    // Elimino los 2 primeros caracteres del hash que seria "#/".
    const hash = location.hash.slice(2);

    // Almaceno en la variable un arreglo con las posiciones correspondientes al separar la cadena de texto con "/".
    // Luego filtro cada elemento dentro del arreglo y verifico que exista. Es decir, que no esté vacio, que no sea indefinido o nulo.
    const segmentos = hash.split("/").filter(seg => seg);

    // Destructuro la ruta recbida y los parametros en sus variable al llamar la funcion que recorre las rutas enviando como parametros las rutas y los segmentos del hash.
    const [ruta, parametros] = recorrerRutas(routes, segmentos);  

    // Si el acceso de la ruta es privado entonces cambio el hash para mostrar el componente donde se logea o inicia sesion el usuario.
    if(ruta.private){
        location.hash = "#/login"
        return;
    }

    // Si la ruta no existe es decir la funcion recorrer rutas me retornó null. Entonces...
    if(!ruta){
        // Imprimo un mensaje de advetencia indicando que la ruta no es valida. 
        console.warn("Ruta inválida:", hash);    
        // Y cargo al componenete un mensaje HTML indicando que la ruta no ha sido encontrada.
        elemento.innerHTML = `<h2>Ruta no encontrada</h2>`;
        return;
    }

    // Si pasa las validaciones de acceso y de existencia entonces cargo la vista pasandole el path de donde se encuenta ubicado el componente a agregar y el elemento en donde se agregará el componenete.
    await cargarVista(ruta.path, elemento)  
    // Y ejecuto el controller del componene agregado.
    await ruta.controller(parametros);
}

// Por medio de una función que recibe como parametros las rutas y los segmentos del hash se recorren las rutas.
const recorrerRutas = (routes, segmentos = null) => {
    // Declaro una variable a la que le asigno todas las rutas.
    let rutaActual = routes;
    // Declato variable que almacenará valor booleano que me indicará si la ruta fue encontrada de acuerdo al hash "true" o si no fue encontrada "false".
    let rutaEncontrada = false;
    // Declaro una variable a la que le asigno un objeto vacio donde agregaré los query Params.
    let parametros = {};

    // Valido si no hay segmentos es decir no hay hash entonces cargo la vista inicial "home".
    if(segmentos.length == 0) window.location.href = "#/home"

    // Valido si el hash tiene dos segmentos que el primero seriá el que indica a que apartado se dirige y el segudo seria la accion que puede o no contener query params
    if(segmentos.length == 3){
        // Luego, almaceno en una variable los query params del segundo parametro que es donde se ubican al identificar un "&" los cuales se almacenaran en un arreglo.
        const parametrosSeparados = segmentos[2].split("&");
        
        // Se recorre los query params separados para separar el atrubuto con su valor.
        parametrosSeparados.forEach(parametro => {
            // Entonces, por medio de la funcion split se separa el atributo del valor al identificar el "=" que une el uno del otro.
            const keyValue = parametro.split("=");
            
            // Por ultimo almaceno en el objeto parametros la propiedad con su respectivo valor.
            parametros[keyValue[0]] = keyValue[1];
        });
        // Por ultimo elimino el ultimo segmento del path para no tener problemas al recorrerlos en la siguiente funcion.
        segmentos.pop();
        console.log(segmentos);
        
    }

    // Recorro los segmentos del path sin tener en cuenta el segmento de los queryParams ya que fue eliminado pero almacenando los parametros para usarlos.
    segmentos.forEach(segmento => {
        // Si el segmento de la  iteracion existe dentro de los atributos de ruta actual, entonce...
        if(rutaActual[segmento]) {
            // Se le asigna a ruta acutal el valor del ese atributo.
            rutaActual = rutaActual[segmento];
            // Se le asigna a la variable que guarda como booleano si la ruta fue encontrado o no y como se encontro entonces "ture".
            rutaEncontrada = true;
        }else rutaEncontrada = false; //Si no llega a ser asi se le asigna a la bandera que la ruta no fue encontrada. Es decir, "false".

        // Luego se valida si el objeto que se almacena en rutaActual es un grupo de rutas. Es decir, si el contenido de ese objeto son otros objetos.
        if(esGrupoRutas(rutaActual)){
            // Si lo es entonces valido si la primera propiedad se llama "/" y si segmentos solo contiene una posicion es decir el hash solo tiene un segmento.
            if(rutaActual["/"] && segmentos.length == 1){
                // Si es así, entonces le asigno a ruta actual el atributo mencionado
                rutaActual = rutaActual["/"];
                // Se le asigna a la variable que guarda como booleano si la ruta fue encontrado o no y como se encontro entonces "ture".
                rutaEncontrada = true; 
            }else rutaEncontrada = false; //Si no llega a ser asi se le asigna a la bandera que la ruta no fue encontrada. Es decir, "false".
        }
    });

    // Por ultimo si ruta encontrado es true retorno un arreglo que contiene el objeto donde se encuentra la ruta, el controller de la ruta y su acceso con los parametros que tiene(opcional)
    // Y si es falso se retorna null
    return rutaEncontrada ? [rutaActual, parametros] : null;
    
}

// Creo funcion donde se carga la vista o el componente recibiendo como parametros el path del componente y el elemento donde se agregará.
const cargarVista = async (path, elemento) => {
    const seccion = await fetch(`./src/Views/${path}`);
    // Paso a texto el compoenente para agregarlo al elemento.
    const html = await seccion.text();
    elemento.innerHTML =  html;
}

// Creo función donde se validad si un objeto es un grupo de rutas recibiendo como parametos el objeto a evaluar.
const esGrupoRutas = (obj) => {
    // Se recorre cada atributo del objeto.
    for (let key in obj) {    
        // Si el atributo es diferente de tipo objeto o es null se retorna false.
        if (typeof obj[key] !== 'object' || obj[key] === null) {
            return false;
        }    
    }
    // Aquí se returna true si no pasa nada dentro del ciclo.
    return true;
}