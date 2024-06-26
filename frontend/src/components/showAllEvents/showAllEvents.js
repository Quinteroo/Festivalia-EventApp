import "./showAllEvents.css"
import { showEventDetails } from "../showEventDetails/showEventDetails.js"



export const showAllEvents = async () => {


  const res = await fetch('http://localhost:4001/api/v1/event')

  const events = await res.json()
  console.log(events);

  pintarEventos(events)

}


const pintarEventos = (events) => {
  const main = document.querySelector("main")
  main.innerHTML = "";
  main.classList.remove("background-image")

  for (const event of events) {
    const card = document.createElement("div")
    card.classList.add("card", "hover")

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