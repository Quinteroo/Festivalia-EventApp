import "./addNewEventButton.css"
import { formNewEvent } from "../../forms/formNewEvent/formNewEvent.js"




export const addNewEventButton = () => {
  const main = document.querySelector("main")

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



  main.append(addEventButton)
  main.append(formEvent)


}