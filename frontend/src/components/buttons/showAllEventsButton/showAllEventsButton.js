import "./showAllEventsButton.css"
import { showAllEvents } from "../../showAllEvents/showAllEvents.js"


export const showAllEventsButton = () => {
  const main = document.querySelector("main")

  const showAllEventsButton = document.createElement("div")
  showAllEventsButton.classList.add("show-all-events-button", "hover", "shadow")
  showAllEventsButton.addEventListener("click", showAllEvents)

  main.append(showAllEventsButton)
}