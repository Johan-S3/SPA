import { rutas } from "./routers";

export async function recorrer(hash, main) {
  const objeto = rutas.find(objeto => objeto.nombre == hash);
  if (objeto) {
    const path = objeto.path;
    await cargarVista(path, main);
    objeto.controlador();
    return
  }
  cargarVista(null, main);
}

export async function cargarVista(ruta, main) {
  if (!ruta) {
    const mensaje = "<h1>404</h1><h1>\nPage not found</h1>"
    main.innerHTML = mensaje;
    return;
  }
  const vista = await fetch(ruta);
  const html = await vista.text();
  main.innerHTML = html;
}
