import "./formNewAttendee.css"
import { URL } from "../../../utils/url.js"

export const formNewAttendee = () => {

  const main = document.querySelector("main")

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
  YESbutton.addEventListener("click", submit)
  YESbutton.addEventListener("click", () => formAttendee.remove())

  formAttendee.append(CLOSEdiv)
  formAttendee.append(formAttendeeTitle)
  formAttendee.append(formAttendeeText)
  formAttendee.append(YESbutton)


  main.append(formAttendee)
}




const submit = async (e) => {
  e.preventDefault()
  console.log(e);

  const userID = localStorage.getItem("userID")
  const eventTitle = document.querySelector(".div-event-details > h3")

  console.log(eventTitle);

  try {
    const opciones = {
      method: "POST",
      body: JSON.stringify({
        eventName: eventTitle.textContent
      }),
      headers: {
        "content-type": "application/json"
      }
    }


    console.log(opciones);

    const res = await fetch(`${URL}attendee/${userID}`, opciones)

    if (!res.ok) {  // (status fuera de rango 200-299)
      const errorMsg = await res.json();
      throw new Error(errorMsg);
    }

    const resFinal = await res.json()

    console.log(resFinal);

    alert("✅ ¡Genial! ya has sido registrado en el evento! Revisa tu email con los detalles y no olvides apuntarlo en tu agenda!")

  } catch (error) {
    console.log(error);
    alert("❌ Ya te has registrado anteriormente!")
  }
}