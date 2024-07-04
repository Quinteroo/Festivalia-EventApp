import "./showUserAvatar.css";
import { showUserProfile } from "../showUserProfile/showUserProfile";




export const showUserAvatar = async (elementoPadre) => {

  const userID = localStorage.getItem("userID")

  const res = await fetch(`http://localhost:4001/api/v1/user/${userID}`)

  const user = await res.json()

  console.log(user);

  pintarAvatar(user.avatar, elementoPadre)

}



const pintarAvatar = (image, elementoPadre) => {

  const divImg = document.createElement("div")
  divImg.classList.add("div-img")
  divImg.addEventListener("click", showUserProfile)

  const imgAvatar = document.createElement("img")
  imgAvatar.classList.add("img-avatar")
  imgAvatar.src = image || ".src/assets/images/default-avatar.png"


  divImg.append(imgAvatar)
  elementoPadre.append(divImg)


}