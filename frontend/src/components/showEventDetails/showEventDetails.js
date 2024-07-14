import "./showEventDetails.css"
import { formNewAttendee } from "../forms/formNewAttendee/formNewAttendee"

export const showEventDetails = async (eventID) => {

  console.log("Event ID:", eventID)

  const res = await fetch(`http://localhost:4001/api/v1/event/${eventID}`)

  const event = await res.json()

  pintarEvent(event)

}


const pintarEvent = (event) => {
  const main = document.querySelector("main")
  main.innerHTML = "";

  const sectionProfile = document.createElement("section")
  sectionProfile.classList.add("section-profile")

  // IMAGEN EVENTO
  const divPoster = document.createElement("div")
  divPoster.classList.add("div-poster")

  const posterProfile = document.createElement("img")
  posterProfile.classList.add("poster-profile")
  posterProfile.src = event.poster

  divPoster.append(posterProfile)
  sectionProfile.append(divPoster)

  // DETALLES EVENTO
  const divEventDetails = document.createElement("div")
  divEventDetails.classList.add("div-event-details")
  divEventDetails.innerHTML =
    `
    <h3>${event.title}</h3>
    <p>${event.date}</p>
    <p>${event.location}</p>
    <p>${event.style}</p>
    <p>asistentes: ${event.attendees.length}</p>
  `
  sectionProfile.append(divEventDetails)


  // ABOUT
  const divEventAbout = document.createElement("div")
  divEventAbout.classList.add("div-event-about")
  divEventAbout.innerHTML =
    `
    <h3>About</h3>
    <p>${event.description}</p>
  `
  sectionProfile.append(divEventAbout)


  // BOTÓN CONFIRMAR ASISTENCIA
  const newAttendeeButton = document.createElement("button")
  newAttendeeButton.classList.add("new-attendee-button", "secondary-button", "hover")
  newAttendeeButton.textContent = "¿Quieres asistir al evento?"
  newAttendeeButton.addEventListener("click", formNewAttendee)

  sectionProfile.append(newAttendeeButton)

  // ATTENDEES
  const divAvatarAttendees = document.createElement("div")
  divAvatarAttendees.classList.add("div-avatar-attendee")
  divAvatarAttendees.innerHTML =
    `
  <h3>Attendees</h3>
  `

  const ulAttendees = document.createElement("ul")
  ulAttendees.classList.add("ul-attendees")

  event.attendees.forEach(attendee => {
    const liAttendee = document.createElement("li")
    liAttendee.classList.add("li-attendee")

    const avatarAttendee = document.createElement("img")
    avatarAttendee.classList.add("avatar-attendee")
    avatarAttendee.src = (attendee.attendeeAvatar) ? attendee.attendeeAvatar : "/assets/usuario.png"

    liAttendee.append(avatarAttendee)
    ulAttendees.append(liAttendee)
  })

  divAvatarAttendees.append(ulAttendees)

  sectionProfile.append(divAvatarAttendees)


  main.append(sectionProfile)
}