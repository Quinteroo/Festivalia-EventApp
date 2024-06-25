import "./home.css"
import { headerLP } from "../../components/headerLP/headerLP.js"
import { storeFront } from "../../components/storeFront/storeFront.js"
import { footer } from "../../components/footer/footer.js"
import { logo } from "../../components/logo/logo.js"
import { showUserAvatar } from "../../components/showUserAvatar/showUserAvatar.js"
import { logOutDiv } from "../../components/logOut/logOut.js"
import { showAllEvents } from "../../components/showAllEvents/showAllEvents.js"

export const home = () => {
  const divApp = document.querySelector("#app")
  divApp.innerHTML = "";

  //ESTRUCTURA
  headerLP(divApp)
  storeFront(divApp)
  footer(divApp)

  //HEADER
  const header = document.querySelector("header")

  const divLogo = document.createElement("div")
  divLogo.classList.add("div-logo")
  divLogo.addEventListener("click", showAllEvents)
  logo(divLogo)
  header.append(divLogo)

  const divUser = document.createElement("div")
  divUser.classList.add("div-user")
  showUserAvatar(divUser)
  logOutDiv(divUser)
  header.append(divUser)


  //FRONTSTORE
  const main = document.querySelector("main")

  const allEventsSection = document.createElement("section")
  allEventsSection.classList.add("all-events-section")
  showAllEvents(allEventsSection)
  main.append(allEventsSection)


}