import "./formNewEvent.css"
import { home } from "../../../pages/home/home.js"

export const formNewEvent = (elementoPadre) => {

  const inputTitle = document.createElement("input")
  const inputLocation = document.createElement("input")
  const inputStyle = document.createElement("select")
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

  elementoPadre.append(inputTitle)
  elementoPadre.append(inputLocation)
  elementoPadre.append(inputDate)
  elementoPadre.append(inputStyle)
  elementoPadre.append(inputDescription)
  elementoPadre.append(inputPoster)
  elementoPadre.append(buttonCreateEvent)





  // elementoPadre.addEventListener("submit", () => {
  //   submit(inputEventTitle.value, inputEventLocation.value, inputEventDate.value, inputEventStyle.value, inputDescription.value, inputEventPoster.value)
  // });
}



// const submit = async (title, location, date, style, description, poster) => {

//   const opciones = {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//       location,
//       date,
//       style,
//       description,
//       poster
//     }),
//     headers: {
//       "content-type": "application/json"
//     }
//   }

//   const res = await fetch(`${URL}user/event`, opciones)
//   const resFinal = await res.json()
//   console.log(resFinal);

//   home()
// }