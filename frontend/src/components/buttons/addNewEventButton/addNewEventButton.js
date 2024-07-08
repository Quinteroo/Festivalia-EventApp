import "./addNewEventButton.css"
import { home } from "../../../pages/home/home.js"




export const addNewEventButton = () => {
  const main = document.querySelector("main")


  //ADD EVENT BUTTON
  const addEventButton = document.createElement("div")
  addEventButton.classList.add("add-event-button", "hover", "shadow")

  const formEvent = document.createElement("form")
  formEvent.classList.add("form-event", "shadow", "hidden")


  addEventButton.addEventListener("click", () => {
    if (formEvent.classList.contains("hidden")) {
      formEvent.classList.remove("hidden")
    } else {
      formEvent.classList.add("hidden")
    }
  })



  // ESTRUCTURA FORMULARIO

  formEvent.innerHTML =
    `
    <h3>LET'S GO</h3>
    <input type="text" id="inputEventTitle" name="title" placeholder="Título" required>
    
    <input type="text" id="inputEventLocation" name="location" placeholder="Ubicación" required>

    <input type="date" id="inputEventDate" name="date" required>
    
    <select id="inputEventStyle" name="style" required>
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
    </select><br>
    
    <textarea id="inputDescription" name="description" placeholder="Descripción" required></textarea>
    
    <input type="file" id="inputEventPoster" name="image" accept="image/*" required>
    
    <button type="submit" class="primary-button">CREAR EVENTO</button>
  `

  // EVENTO FORMULARIO BBDD
  const inputEventTitle = document.querySelector("#inputEventTitle")
  const inputEventLocation = document.querySelector("#inputEventLocation")
  const inputEventDate = document.querySelector("#inputEventDate")
  const inputEventStyle = document.querySelector("#inputEventStyle")
  const inputDescription = document.querySelector("#inputDescription")
  const inputEventPoster = document.querySelector("#inputEventPoster")


  main.append(addEventButton)
  main.append(formEvent)


  formEvent.addEventListener("submit", () => {
    submit(inputEventTitle.value, inputEventLocation.value, inputEventDate.value, inputEventStyle.value, inputDescription.value, inputEventPoster.value)
  });

  console.log(inputEventTitle);
  console.log(inputEventDate);
  console.log(inputEventLocation);


}


const submit = async (title, location, date, style, description, poster) => {

  const opciones = {
    method: "POST",
    body: JSON.stringify({
      title,
      location,
      date,
      style,
      description,
      poster
    }),
    headers: {
      "content-type": "application/json"
    }
  }

  const res = await fetch(`${URL}user/event`, opciones)
  const resFinal = await res.json()
  console.log(resFinal);

  home()
}