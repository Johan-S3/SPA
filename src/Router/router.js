import { rutas } from "./routers";

export const router = async (hash, elemento) => {
    const ruta = recorrerRutas(rutas, hash);
    await cargarVista(ruta.path, elemento)  
    ruta.controller();
    console.log(ruta)
}

const recorrerRutas = (rutas, hash) => {
    const arrayHas = hash.split("/");      
    for (const key in rutas) {
        // console.log(rutas[key]);
                
        if (key == arrayHas[0] || key == arrayHas[1] ) { 
            for(const elemento in rutas[key]){
                
                if(typeof rutas[key][elemento] == "object"){
                    console.log(arrayHas[arrayHas.length - 1]);
                    
                    console.log(elemento);
                    if(arrayHas.length == 1){
                        return rutas[key][elemento]
                    }

                    if(arrayHas[arrayHas.length - 1] == elemento){
                        return rutas[key][elemento]
                    }

                }else{
                    return  rutas[key]
                }
            }
            
            return rutas[key];            
        }
    }
    return "";
    
}
 const cargarVista = async (path, elemento) => {
    console.log(path, elemento);
    const seccion = await fetch(`./src/Views/${path}`);
    if (!seccion.ok) throw new Error("No pudimos leer el archivo");
    const html = await seccion.text();
    elemento.innerHTML =  html;
 }