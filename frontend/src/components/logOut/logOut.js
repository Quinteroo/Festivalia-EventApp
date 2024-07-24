import "./logOut.css"
import { landingPage } from "../../../main.js"


export const logOutDiv = (elementoPadre) => {
  const logOutDiv = document.createElement("div")
  logOutDiv.classList.add("log-out-div")
  logOutDiv.addEventListener("click", logOut)

  const imgLogOut = document.createElement("img")
  imgLogOut.classList.add("img-log-out")
  imgLogOut.src = "/assets/cerrar-sesion.png"
  imgLogOut.alt = "LogOut image"

  logOutDiv.append(imgLogOut)
  elementoPadre.append(logOutDiv)
}


export const logOut = () => {
  localStorage.removeItem("loginToken")
  localStorage.clear()
  landingPage()

}