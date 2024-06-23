import "./home.css"
import { headerLP } from "../../components/headerLP/headerLP.js"
import { storeFront } from "../../components/storeFront/storeFront.js"
import { footer } from "../../components/footer/footer.js"
import { logo } from "../../components/logo/logo.js"
import { avatar } from "../../components/avatar/avatar.js"
import { logOutDiv } from "../../components/logOut/logOut.js"

export const home = () => {
  const divApp = document.querySelector("#app")
  divApp.innerHTML = "";

  headerLP(divApp)
  storeFront(divApp)
  footer(divApp)

  const divLogo = document.createElement("div")
  divLogo.classList.add("div-logo")
  //todo divLogo.addEventListener("click", eventFront)

  logo(divLogo)
  const header = document.querySelector("header")
  header.append(divLogo)

  const divUser = document.createElement("div")
  divUser.classList.add("div-user")
  avatar(divUser)
  logOutDiv(divUser)



  header.append(divUser)

}