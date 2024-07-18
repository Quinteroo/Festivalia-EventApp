import "./formNewEvent.css"
import { showAllEvents } from "../../showAllEvents/showAllEvents.js"
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

  buttonCreateEvent.textContent = "Crear Evento"

  elementoPadre.append(formText)
  elementoPadre.append(inputTitle)
  elementoPadre.append(inputLocation)
  elementoPadre.append(inputDate)
  elementoPadre.append(inputStyle)
  elementoPadre.append(inputDescription)
  elementoPadre.append(inputPoster)
  elementoPadre.append(buttonCreateEvent)


  elementoPadre.addEventListener("submit", submit);
}



const submit = async (e) => {
  e.preventDefault()

  const userID = localStorage.getItem("userID")

  console.log(e);

  const [inputTitle, inputLocation, inputDate, inputStyle, inputDescription, inputPoster] = e.target //!ARRAY destructuring!!!!!


  const formData = new FormData()

  formData.append("title", inputTitle.value)
  formData.append("location", inputLocation.value)
  formData.append("date", inputDate.value)
  formData.append("style", inputStyle.value)
  formData.append("description", inputDescription.value)
  formData.append("poster", inputPoster.files[0])

  const res = await fetch(`${URL}event/event/${userID}`, {
    method: "POST",
    body: formData,
    headers: {
      "authorization": `Bearer ${localStorage.getItem("loginToken")}`
    }
  })

  const response = await res.json()
  console.log(response);
  showAllEvents()

}