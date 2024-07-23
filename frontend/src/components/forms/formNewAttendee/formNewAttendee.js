import "./formNewAttendee.css"
import { functionFetch } from "../../../utils/functionFetch.js"
import { showAllEvents } from "../../showAllEvents/showAllEvents.js"

export const formNewAttendee = () => {

  const main = document.querySelector("main")

  const existingFormAttendee = document.querySelector(".form-attendee")
  if (existingFormAttendee) {
    return
  }

  const CLOSEdiv = document.createElement("div")
  CLOSEdiv.classList.add("close-div")
  const CLOSEbutton = document.createElement("button")
  CLOSEbutton.classList.add("close-button", "secondary-button")
  CLOSEbutton.textContent = "X"
  CLOSEdiv.append(CLOSEbutton)

  CLOSEbutton.addEventListener("click", () => formAttendee.remove())

  const formAttendee = document.createElement("form")
  formAttendee.classList.add("form-attendee")

  const formAttendeeTitle = document.createElement("h3")
  formAttendeeTitle.classList.add("form-attendee-title", "secondary-title")
  formAttendeeTitle.textContent = "¿Quieres confirmar la asistencia a este evento?"


  const formAttendeeText = document.createElement("p")
  formAttendeeText.classList.add("form-attendee-text", "text")
  formAttendeeText.textContent = "Recibirás un email con los detalles del evento."

  const YESbutton = document.createElement("button")
  YESbutton.classList.add("yes-button", "primary-button")
  YESbutton.textContent = "YES!"
  YESbutton.addEventListener("click", async (e) => {
    e.preventDefault();
    await submit()
  })

  formAttendee.append(CLOSEdiv)
  formAttendee.append(formAttendeeTitle)
  formAttendee.append(formAttendeeText)
  formAttendee.append(YESbutton)


  main.append(formAttendee)
}




const submit = async () => {

  const form = document.querySelector(".form-attendee")

  const existingError = form.querySelector(".error");
  if (existingError) {
    existingError.remove();
  }

  const userID = localStorage.getItem("userID")
  const token = localStorage.getItem("loginToken")

  const eventTitleElement = document.querySelector(".div-event-details > h3");
  if (!eventTitleElement) {
    console.error("No se encontró el título del evento.");
    return;
  }
  const eventTitleText = eventTitleElement.textContent.trim();
  if (!eventTitleText) {
    console.error("El título del evento está vacío.");
    return;
  }


  const objeto = JSON.stringify({
    eventName: eventTitleText
  })

  console.log("Objeto a enviar:", objeto);

  try {

    const resFinal = await functionFetch("attendee/newAttendee", userID, "POST", objeto, token);
    console.log(resFinal);

    if (resFinal) {
      alert("✅ ¡Genial! ya has sido registrado en el evento! Revisa tu email con los detalles y no olvides apuntarlo en tu agenda!")
      showAllEvents()
    }

  } catch (error) {
    const errorMsg = error.message;
    const pError = document.createElement("p");
    pError.classList.add("error", "subtext");
    pError.textContent = errorMsg;
    form.append(pError);
  }
}