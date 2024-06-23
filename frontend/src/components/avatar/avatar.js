import "./avatar.css"
import { URL } from "../../utils/url.js"


export const avatar = async (elementoPadre) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const imgAvatar = document.createElement("img");
  imgAvatar.classList.add("img-avatar");
  imgAvatar.src = "./src/assets/images/usuario.png"
  imgAvatar.alt = "avater image"


  imgContainer.append(imgAvatar)

  elementoPadre.append(imgContainer)


};
