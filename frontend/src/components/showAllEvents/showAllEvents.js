import "./showAllEvents.css"

export const showAllEvents = async (elementoPadre) => {

  const main = document.querySelector("main")
  main.innerHTML = "";




  const res = await fetch('http://localhost:4001/api/v1/event')

  const events = await res.json()
  console.log(events);

  pintarEventos(events, elementoPadre)

}


const pintarEventos = (events, elementoPadre) => {
  for (const event of events) {
    const card = document.createElement("div")
    card.classList.add("card")

    const poster = document.createElement("img")
    poster.classList.add("poster")
    poster.src = event.poster

    card.append(poster)
    elementoPadre.append(card)

  }
}