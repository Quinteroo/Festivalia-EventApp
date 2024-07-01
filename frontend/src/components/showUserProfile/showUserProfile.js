import "./showUserProfile.css"
import { showUserAvatar } from "../showUserAvatar/showUserAvatar.js"

export const showUserProfile = async () => {

  const userID = localStorage.getItem("userID")

  const res = await fetch(`http://localhost:4001/api/v1/user/${userID}`)

  const user = await res.json()

  console.log(user);

  pintarProfile(user)

}


const pintarProfile = async (user) => {
  const main = document.querySelector("main")
  main.innerHTML = "";

  const profile = document.createElement("section")
  profile.classList.add("profile")

  await showUserAvatar(profile)

  const userInfo = document.createElement("div")
  userInfo.classList.add("user-info")

  const userName = document.createElement("p")
  userName.classList.add("user-name")
  userName.textContent = user.userName

  const userEmail = document.createElement("p")
  userEmail.classList.add("user-email")
  userEmail.textContent = user.email

  userInfo.append(userName)
  userInfo.append(userEmail)
  profile.append(userInfo)

  const divAboutMe = document.createElement("div")
  divAboutMe.classList.add("div-about-me")
  const aboutMeText = document.createElement("p")
  aboutMeText.classList.add("about-me-text")
  aboutMeText.textContent = user.aboutMe
  divAboutMe.append(aboutMeText)
  profile.append(divAboutMe)

  const divOrganizedEvents = document.createElement("div")
  divOrganizedEvents.classList.add("div-organized-events")

  const showOrganizedEvents = (user) => {
    for (const event of user.organizedEvents) {
      const eventDiv = document.createElement("div")
      eventDiv.classList.add("event-div")

      const eventPoster = document.createElement("img")
      eventPoster.classList.add("event-poster")
      eventPoster.src = event.poster

      eventDiv.append(eventPoster)

      divOrganizedEvents.append(eventDiv)
    }
  }

  profile.append(divOrganizedEvents)
  main.append(profile)

}

