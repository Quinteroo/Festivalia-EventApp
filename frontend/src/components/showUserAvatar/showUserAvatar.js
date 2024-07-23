import "./showUserAvatar.css";
import { showUserProfile } from "../showUserProfile/showUserProfile";
import { functionFetch } from "../../utils/functionFetch.js";




export const showUserAvatar = async (elementoPadre) => {

  const userID = localStorage.getItem("userID")

  const user = await functionFetch("user", userID, "GET", null, null)

  console.log(user);

  pintarAvatar(user.avatar, elementoPadre)
  console.log(user.avatar);

}



const pintarAvatar = (image, elementoPadre) => {

  const divImg = document.createElement("div")
  divImg.classList.add("div-img")
  divImg.addEventListener("click", showUserProfile)

  const imgAvatar = document.createElement("img")
  imgAvatar.classList.add("img-avatar")
  imgAvatar.src = image


  divImg.append(imgAvatar)
  elementoPadre.append(divImg)


}