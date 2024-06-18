import { register } from "../../../pages/register/register.js"
import { login } from "../../../pages/login/login.js"
import "./accessButton.css"

export const accessButton = (elementoPadre) => {

  const divButtons = document.createElement("div")
  divButtons.className = "div-buttons"

  const buttonLogIn = document.createElement("button")
  buttonLogIn.textContent = "Log in"
  buttonLogIn.classList.add("primary-button")
  buttonLogIn.classList.add("hover")

  const buttonJoin = document.createElement("button")
  buttonJoin.textContent = "Join"
  buttonJoin.classList.add("secondary-button")
  buttonJoin.classList.add("hover")

  buttonLogIn.addEventListener("click", login)
  buttonJoin.addEventListener("click", register)

  divButtons.append(buttonLogIn)
  divButtons.append(buttonJoin)
  elementoPadre.append(divButtons)
}
