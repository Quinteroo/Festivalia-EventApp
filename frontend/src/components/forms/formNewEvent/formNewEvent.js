import "./formNewEvent.css"
import { home } from "../../../pages/home/home.js"
import { URL } from "../../../utils/url.js"

export const formNewEvent = (elementoPadre) => {


  const formText = document.createElement("h3")
  formText.classList.add("form-text")
  formText.textContent = "Crea un evento memorable!"
  const inputTitle = document.createElement("input")
  const inputLocation = document.createElement("input")
  const inputStyle = document.createElement("select")
  inputStyle.classList.add("input-style")
  const inputDate = document.createElement("input")
  const inputDescription = document.createElement("textarea")
  const inputPoster = document.createElement("input")
  const buttonCreateEvent = document.createElement("button")
  buttonCreateEvent.classList.add("primary-button", "hover")

  inputTitle.type = "text"
  inputTitle.placeholder = "Nombre del evento"

  inputLocation.type = "text"
  inputLocation.placeholder = "Localización del evento"

  inputStyle.innerHTML =
    `
    <option value="">Selecciona un estilo</option>
    <option value="rock">Rock</option>
    <option value="heavy">Heavy</option>
    <option value="rap">Rap</option>
    <option value="pop">Pop</option>
    <option value="indie">Indie</option>
    <option value="reggae">Reggae</option>
    <option value="electro">Electro</option>
    <option value="flamenco">Flamenco</option>
    <option value="techno">Techno</option>
  `
  inputDate.type = "date"

  inputDescription.placeholder = "Describe el evento"

  inputPoster.type = "file"
  inputPoster.accept = "image/*"

  buttonCreateEvent.textContent = "Crear Evento"

  elementoPadre.append(formText)
  elementoPadre.append(inputTitle)
  elementoPadre.append(inputLocation)
  elementoPadre.append(inputDate)
  elementoPadre.append(inputStyle)
  elementoPadre.append(inputDescription)
  elementoPadre.append(inputPoster)
  elementoPadre.append(buttonCreateEvent)


  const posterFile = inputPoster.files[0];


  elementoPadre.addEventListener("submit", (event) => {
    event.preventDefault(); // el evento "submit" recarga por defecto la página web, preventDefault evita que esto suceda
    submit(inputTitle.value, inputLocation.value, inputDate.value, inputStyle.value, inputDescription.value, posterFile); //* Para acceder al archivo en sí, necesitas utilizar inputPoster.files[0], que es donde el navegador almacena el archivo seleccionado.
    //
  });
}



const submit = async (title, location, date, style, description, poster) => {

  const token = localStorage.getItem("loginToken")


  // const opciones = {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title,
  //     location,
  //     date,
  //     style,
  //     description,
  //     poster
  //   }),
  //   headers: {
  //     "content-type": "application/json",
  //     "Authorization": `Bearer ${token}`
  //   }
  // }


  const formData = new FormData();
  formData.append("title", title);
  formData.append("location", location);
  formData.append("date", date);
  formData.append("style", style);
  formData.append("description", description);
  formData.append("poster", poster); // Asegúrate de pasar el archivo correctamente

  const opciones = {
    method: "POST",
    body: formData,
    headers: {
      "Authorization": `Bearer ${token}`
      // No agregues "Content-Type", el navegador lo establece automáticamente cuando se usa FormData
    }
  }

  try {
    const res = await fetch(`${URL}event/event`, opciones);
    const resFinal = await res.json();
    console.log(resFinal);
    //home()
  } catch (error) {
    console.error("Error:", error);
  }
}