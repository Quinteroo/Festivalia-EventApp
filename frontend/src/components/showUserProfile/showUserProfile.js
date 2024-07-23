import "./showUserProfile.css"
import { showAllEventsButton } from "../buttons/showAllEventsButton/showAllEventsButton.js"
import { modifyUserProfileButton } from "../buttons/modifyUserProfileButton/modifyUserProfileButton.js"
import { functionFetch } from "../../utils/functionFetch.js"


export const showUserProfile = async () => {

  const userID = localStorage.getItem("userID")

  const user = await functionFetch("user", userID, "GET", null, null)

  console.log(user);

  pintarProfile(user)
  modifyUserProfileButton()
  showAllEventsButton()

}


const pintarProfile = async (user) => {
  const main = document.querySelector("main")
  main.innerHTML = "";

  const profile = document.createElement("section")
  profile.classList.add("profile", "flex-column-around")

  const userAvatar = document.createElement("img")
  userAvatar.classList.add("user-avatar")
  userAvatar.src = user.avatar

  const userName = document.createElement("h2")
  userName.classList.add("user-name", "primary-title")
  userName.textContent = user.userName

  const divAboutMe = document.createElement("div")
  divAboutMe.classList.add("div-about-me", "flex-column-around")
  const aboutMeTitle = document.createElement("h3")
  aboutMeTitle.classList.add("about-me-title", "subtitle")
  aboutMeTitle.textContent = "About me:"
  const aboutMe = document.createElement("p")
  aboutMe.classList.add("about-me", "subtext")
  aboutMe.textContent = user.aboutMe || "Escribe algo sobre ti."
  divAboutMe.append(aboutMeTitle)
  divAboutMe.append(aboutMe)

  profile.append(userAvatar)
  profile.append(userName)
  profile.append(divAboutMe)


  const divOrganizedEvents = document.createElement("div")
  divOrganizedEvents.classList.add("div-organized-events", "flex-row-wrap")
  divOrganizedEvents.innerHTML = `<h3>Eventos organizados:</h3>`

  for (const event of user.organizedEvents) {
    const eventDiv = document.createElement("div")
    eventDiv.classList.add("event-div", "shadow")

    const eventPoster = document.createElement("img")
    eventPoster.classList.add("event-poster")
    eventPoster.src = event.poster

    const eventTitle = document.createElement("p")
    eventTitle.classList.add("event-title", "text")
    eventTitle.textContent = event.title

    eventDiv.append(eventPoster)
    eventDiv.append(eventTitle)

    divOrganizedEvents.append(eventDiv)
  }



  profile.append(divOrganizedEvents)
  main.append(profile)

}

