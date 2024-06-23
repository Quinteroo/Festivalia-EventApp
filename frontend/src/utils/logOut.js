import { landingPage } from "../../main.js"


export const logOut = () => {
  localStorage.removeItem("loginToken")
  localStorage.clear()
  landingPage()

}