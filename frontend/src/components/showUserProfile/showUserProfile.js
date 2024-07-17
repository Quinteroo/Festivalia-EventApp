import "./showUserProfile.css"
import { showAllEventsButton } from "../buttons/showAllEventsButton/showAllEventsButton.js"


export const showUserProfile = async () => {

  const userID = localStorage.getItem("userID")

  const res = await fetch(`http://localhost:4001/api/v1/user/${userID}`)

  const user = await res.json()

  console.log(user);

  pintarProfile(user)
  showAllEventsButton()

}


const pintarProfile = async (user) => {
  const main = document.querySelector("main")
  main.innerHTML = "";

  const profile = document.createElement("section")
  profile.classList.add("profile")

  const userAvatar = document.createElement("img")
  userAvatar.classList.add("user-avatar")
  userAvatar.src = user.avatar

  const userName = document.createElement("h2")
  userName.classList.add("user-name")
  userName.textContent = user.userName

  const divAboutMe = document.createElement("div")
  divAboutMe.classList.add("div-about-me")
  const aboutMeTitle = document.createElement("h3")
  aboutMeTitle.classList.add("about-me-title")
  aboutMeTitle.textContent = "About me:"
  const aboutMe = document.createElement("p")
  aboutMe.classList.add("about-me")
  aboutMe.textContent = user.aboutMe || "Escribe algo sobre ti."
  divAboutMe.append(aboutMeTitle)
  divAboutMe.append(aboutMe)

  profile.append(userAvatar)
  profile.append(userName)
  profile.append(divAboutMe)


  const divOrganizedEvents = document.createElement("div")
  divOrganizedEvents.classList.add("div-organized-events")
  divOrganizedEvents.innerHTML = `<h3>Eventos organizados:</h3>`

  for (const event of user.organizedEvents) {
    const eventDiv = document.createElement("div")
    eventDiv.classList.add("event-div")

    const eventPoster = document.createElement("img")
    eventPoster.classList.add("event-poster")
    eventPoster.src = event.poster

    const eventTitle = document.createElement("p")
    eventTitle.classList.add("event-title")
    eventTitle.textContent = event.title

    eventDiv.append(eventPoster)
    eventDiv.append(eventTitle)

    divOrganizedEvents.append(eventDiv)
  }



  profile.append(divOrganizedEvents)
  main.append(profile)

}

