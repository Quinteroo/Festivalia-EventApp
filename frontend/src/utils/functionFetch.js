import { showLoading, hideLoading } from "../components/loading/loading.js"



//? await functionFetch(route, params, method, objeto, token)



export const functionFetch = async (route, params, method, objeto, token) => {
  showLoading()
  try {
    const url = `https://festivalia-back.vercel.app/${route}/${params}`;

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
      hideLoading()
      throw new Error(response);
    }

    return response;

  } catch (error) {
    hideLoading()
    console.error('Error en el fetching:', error);
    throw error; // esto srive para segurar que el error se ha lanzado
  }
}



