const ruta = 'http://localhost:3000/api/';


export const create = async (path, data) => {
  const solicitud = await fetch(`${ruta}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return solicitud;
}
