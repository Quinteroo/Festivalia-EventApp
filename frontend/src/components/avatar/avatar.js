import "./avatar.css"
import { URL } from "../../utils/url.js"
import { logOut } from "../../utils/logOut.js"

export const avatar = async (elementoPadre) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const imgAvatar = document.createElement("img");
  imgAvatar.classList.add("img-avatar");
  imgAvatar.src = "./src/assets/images/usuario.png"
  imgAvatar.alt = "avater image"

  const logOutDiv = document.createElement("div")
  logOutDiv.classList.add("log-out-div")
  logOutDiv.addEventListener("click", logOut)

  const imgLogOut = document.createElement("img")
  imgLogOut.classList.add("img-log-out")
  imgLogOut.src = "./src/assets/images/logo-FB.png"
  imgLogOut.alt = "LogOut image"


  imgContainer.append(imgAvatar)
  logOutDiv.append(imgLogOut)
  elementoPadre.append(imgContainer)
  elementoPadre.append(logOutDiv)

};
