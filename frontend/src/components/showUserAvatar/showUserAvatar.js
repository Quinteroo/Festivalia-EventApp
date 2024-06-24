import "./showUserAvatar.css";
// import { URL } from "../../utils/url.js"



export const showUserAvatar = async () => {
  const divUser = document.querySelector("div-user")

  const userID = localStorage.getItem("userID")

  const res = await fetch(`http://localhost:4001/api/v1/user/${userID}`)

  const user = await res.json()

  console.log(user);
}