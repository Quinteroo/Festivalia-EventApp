import "./modifyUserProfileButton.css"
import { formModifyUserProfile } from "../../forms/formModifyUserProfile/formModifyUserProfile.js"

export const modifyUserProfileButton = () => {
  const main = document.querySelector("main")

  const modifyUserProfileButton = document.createElement("div")
  modifyUserProfileButton.classList.add("modify-user-profile-button", "hover", "shadow")
  modifyUserProfileButton.addEventListener("click", formModifyUserProfile)

  main.append(modifyUserProfileButton)

}