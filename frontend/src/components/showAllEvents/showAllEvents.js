import "./showAllEvents.css";
import { showEventByStyle } from "../showEventByStyle/showEventByStyle.js";
import { showEventDetails } from "../showEventDetails/showEventDetails.js";
import { addNewEventButton } from "../buttons/addNewEventButton/addNewEventButton.js";
import { showAllEventsButton } from "../buttons/showAllEventsButton/showAllEventsButton.js";
import { showLoading, hideLoading } from "../loading/loading.js";
import { functionFetch } from "../../utils/functionFetch.js";



export const showAllEvents = async () => {

  try {

    const eventos = await functionFetch("events", "", "GET", null, null)
    console.log(eventos);
    if (eventos) {
      pintarEventos(eventos);
      addNewEventButton();
      showAllEventsButton();
    }


  } catch (error) {
    console.error('❌ Error fetching events:', error);
    hideLoading(); x

  }
};


const pintarEventos = async (eventos) => {
  const main = document.querySelector("main")
  main.innerHTML = "";
  main.classList.remove("background-image")


  showEventByStyle()


  for (const event of eventos) {

    const card = document.createElement("div")
    card.classList.add("card", "hover", "shadow")

    const poster = document.createElement("img")
    poster.classList.add("poster")
    poster.src = event.poster

    const eventTitle = document.createElement("h3")
    eventTitle.classList.add("event-title", "subtitle")
    eventTitle.textContent = event.title

    const date = document.createElement("p")
    date.classList.add("date", "text")
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