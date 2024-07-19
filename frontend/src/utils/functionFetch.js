
// await functionFetch(route, params, method, objeto, token)

export const functionFetch = async (route, params, method, objeto, token) => {
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

    return response

  } catch (error) {
    console.error('Error fetching events:', error);

  }

}


