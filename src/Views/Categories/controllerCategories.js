export const controllerCategoria = async () => {
  const solicitud = await fetch("http://localhost:3000/api/categorias");
  const datos = await solicitud.json();
  const categorias = await datos.data;

  const lista = document.getElementById("lista");

  // Tabla
  const table = document.createElement("table");
  table.classList.add("main__table", "table");
  // Encabezado y du fila
  const encabezado = document.createElement("thead");
  encabezado.classList.add("table__encabezado")
  const filaEncabezado = document.createElement("tr");

  // Celdas del encabezado de la tabla
  const id = document.createElement("th");
  id.classList.add("table__celda");
  id.textContent = "id";
  const nombre = document.createElement("th");
  nombre.classList.add("table__celda");
  nombre.textContent = "nombre";
  const descripcion = document.createElement("th");
  descripcion.classList.add("table__celda");
  descripcion.textContent = "descripcion";

  filaEncabezado.append(id, nombre, descripcion);
  encabezado.append(filaEncabezado);

  // Agregado de encabezado en la tabla
  table.append(encabezado);

  // Creo el cuerpo de la tabla donde irá la información de los posts
  const cuerpo = document.createElement("tbody");

  // Crear los elementos de la tabla de posts
  categorias.forEach(categoria => {
    // Creo la fila de la informacion de cada post
    const filaCategoria = document.createElement("tr");
    filaCategoria.classList.add("table__tupla")
    
    // Obtengo la iformación de cada post
    const dataId = document.createElement("td");
    dataId.classList.add("table__celda");
    dataId.textContent = categoria.id;
    const dataNombre = document.createElement("td");
    dataNombre.classList.add("table__celda");
    dataNombre.textContent = categoria.nombre;
    const dataDescipcion = document.createElement("td");
    dataDescipcion.classList.add("table__celda");
    dataDescipcion.textContent = categoria.descripcion;

    // Agrego la información obtenida a la fila
    filaCategoria.append(dataId, dataNombre, dataDescipcion);

    // Agrego la fila al cuerpo de la tabla
    cuerpo.append(filaCategoria);
  });
  // Agreago a la tabla el cuerpo de ella que contiene toda la información.
  table.append(cuerpo);

  // Agrego al espacion del html la tabla
  lista.append(table);
}