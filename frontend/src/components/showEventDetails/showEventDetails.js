import "./showEventDetails.css"
import { formNewAttendee } from "../forms/formNewAttendee/formNewAttendee.js"
import { showAllEventsButton } from "../buttons/showAllEventsButton/showAllEventsButton.js"
import { functionFetch } from "../../utils/functionFetch.js"

export const showEventDetails = async (id) => {
  const main = document.querySelector("main")


  try {

    const evento = await functionFetch("events", id, "GET", null, null)
    console.log(evento);

    if (evento) {
      pintarEvent(evento)
      showAllEventsButton();
    }


  } catch (error) {
    console.error('❌ Error en el fetching:', error);
    // const errorMsg = error.message;
    const pError = document.createElement("p");
    pError.classList.add("error", "subtext");
    pError.textContent = "❌ hubo un problema al cargar los datos.";
    main.append(pError);

  }

}


const pintarEvent = (evento) => {
  const main = document.querySelector("main")
  main.innerHTML = "";

  const sectionProfile = document.createElement("section")
  sectionProfile.classList.add("section-profile", "flex-column-around")

  // IMAGEN EVENTO
  const divPoster = document.createElement("div")
  divPoster.classList.add("div-poster")

  const posterProfile = document.createElement("img")
  posterProfile.classList.add("poster-profile")
  posterProfile.src = evento.poster

  divPoster.append(posterProfile)
  sectionProfile.append(divPoster)

  // DETALLES EVENTO
  const divEventDetails = document.createElement("div")
  divEventDetails.classList.add("div-event-details", "flex-column-around")
  divEventDetails.innerHTML =
    `
    <h3>${evento.title}</h3>
    <p>${evento.date}</p>
    <p>${evento.location}</p>
    <p>${evento.style}</p>
    <p>asistentes: ${evento.attendees.length}</p>
  `
  sectionProfile.append(divEventDetails)


  // ABOUT
  const divEventAbout = document.createElement("div")
  divEventAbout.classList.add("div-event-about")
  divEventAbout.innerHTML =
    `
    <h3>About</h3>
    <p>${evento.description}</p>
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
  ulAttendees.classList.add("ul-attendees", "flex-row-wrap")

  evento.attendees.forEach(attendee => {
    const liAttendee = document.createElement("li")
    liAttendee.classList.add("li-attendee")

    const avatarAttendee = document.createElement("img")
    avatarAttendee.classList.add("avatar-attendee")
    avatarAttendee.src = (attendee.attendeeAvatar) ? attendee.attendeeAvatar : "/public/assets/default-avatar.png"

    liAttendee.append(avatarAttendee)
    ulAttendees.append(liAttendee)
  })

  divAvatarAttendees.append(ulAttendees)

  sectionProfile.append(divAvatarAttendees)


  main.append(sectionProfile)
}