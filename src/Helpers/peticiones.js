const ruta = 'http://localhost:3000/api/';

export const get = async (path) => {
  const solicitud = await fetch(`${ruta}${path}`);
  return solicitud;
}

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
