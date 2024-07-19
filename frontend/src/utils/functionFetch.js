import { showLoading, hideLoading } from "../components/loading/loading.js"



//? await functionFetch(route, params, method, objeto, token)



export const functionFetch = async (route, params, method, objeto, token) => {
  showLoading()
  try {
    const url = `http://localhost:4001/api/v1/${route}/${params}`;

    const options = {
      method,
      body: objeto,
      headers: {}
    };

    if (!(objeto instanceof FormData)) {
      options.headers['Content-Type'] = 'application/json';
    }

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(url, options);

    const response = await res.json();

    if (response) {
      hideLoading()
    }

    if (!res.ok) {  //esttus fuera de rango 200-299
      throw new Error(response);
    }

    return response;

  } catch (error) {
    console.error('Error en el fetching:', error);
    throw error; // Asegurar que el error sea lanzado
    hideLoading()
  }
}



