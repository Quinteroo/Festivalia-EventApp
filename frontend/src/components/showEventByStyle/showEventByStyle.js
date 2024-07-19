import "./showEventByStyle.css"
import { showAllEventsButton } from "../buttons/showAllEventsButton/showAllEventsButton.js"
import { addNewEventButton } from "../buttons/addNewEventButton/addNewEventButton.js"
import { showAllEvents } from "../showAllEvents/showAllEvents.js"
import { URL } from "../../utils/url.js"

export const showEventByStyle = () => {
  const main = document.querySelector("main")

  const formSelectEventByStyle = document.createElement("form")
  formSelectEventByStyle.classList.add("form-select-event-by-style")

  const inputSelectStyle = document.createElement("select")
  inputSelectStyle.classList.add("input-select-style")
  inputSelectStyle.innerHTML =
    `
    <option value="-">Selecciona un estilo</option>
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

  const buttonSearch = document.createElement("button")
  buttonSearch.classList.add("button-search", "primary-button")
  buttonSearch.textContent = "ok"
  buttonSearch.addEventListener("click", () => pintarEventos(inputSelectStyle.value))

  formSelectEventByStyle.append(inputSelectStyle)
  formSelectEventByStyle.append(buttonSearch)
  main.append(formSelectEventByStyle)
}



const pintarEventos = async (style) => {
  const styleValue = style
  if (styleValue === "-") {
    showAllEvents()
  }

  const main = document.querySelector("main")
  main.innerHTML = "";
  showAllEventsButton()
  addNewEventButton()

  const res = await fetch(`${URL}event/${style}`)

  const events = await res.json()


  if (events.length === 0) {
    const pError = document.createElement("p")
    pError.classList.add("error")
    pError.textContent = "❌ No hay eventos disponibles con ese estilo. Por favor, prueba con otro estilo."
    main.append(pError)
    return;
  }

  for (const event of events) {
    const card = document.createElement("div")
    card.classList.add("card", "hover", "shadow")

    const poster = document.createElement("img")
    poster.classList.add("poster")
    poster.src = event.poster

    const eventTitle = document.createElement("h3")
    eventTitle.classList.add("event-title")
    eventTitle.textContent = event.title

    const date = document.createElement("p")
    date.classList.add("date")
    date.textContent = event.date

    const moreButton = document.createElement("button")
    moreButton.classList.add("primary-button", "hover")
    moreButton.textContent = "SEE MORE >"
    moreButton.addEventListener("click", () => showEventDetails(event._id))

    card.append(poster)
    card.append(eventTitle)
    card.append(date)
    card.append(moreButton)
    main.append(card)

  }

}

