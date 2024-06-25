import "./showUserAvatar.css";
// import { URL } from "../../utils/url.js"



export const showUserAvatar = async (elementoPadre) => {

  const userID = localStorage.getItem("userID")

  const res = await fetch(`http://localhost:4001/api/v1/user/${userID}`)

  const user = await res.json()

  console.log(user);

  pintarAvatar(user.avatar, elementoPadre)
}



const pintarAvatar = (img, elementoPadre) => {

  const divImg = document.createElement("div")
  divImg.classList.add("div-img")

  const imgAvatar = document.createElement("img")
  imgAvatar.classList.add("img-avatar")
  imgAvatar.src = img

  divImg.append(imgAvatar)
  elementoPadre.append(divImg)


}