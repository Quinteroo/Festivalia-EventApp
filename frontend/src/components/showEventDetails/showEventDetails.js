import "./showEventDetails.css"

export const showEventDetails = async (eventID) => {

  console.log("Event ID:", eventID)

  const res = await fetch(`http://localhost:4001/api/v1/event/${eventID}`)

  const event = await res.json()

  pintarEvent(event)

}


const pintarEvent = (event) => {
  const main = document.querySelector("main")
  main.innerHTML = "";

  const divPrueba = document.createElement("div")
  divPrueba.classList.add("div-prueba")
  divPrueba.textContent = `Event: ${event.title}`

  main.append(divPrueba)
}