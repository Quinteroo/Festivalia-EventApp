import "./showAllEvents.css"

export const showAllEvents = async (elementoPadre) => {

  const main = document.querySelector("main")
  main.innerHTML = "";
  main.classList.remove("background-image")


  const res = await fetch('http://localhost:4001/api/v1/event')

  const events = await res.json()
  console.log(events);

  pintarEventos(events, elementoPadre)

}


const pintarEventos = (events, elementoPadre) => {
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
    //todo moreButton.addEventListener("click", showEventDetails)

    card.append(poster)
    card.append(eventTitle)
    card.append(date)
    card.append(moreButton)
    elementoPadre.append(card)

  }
}