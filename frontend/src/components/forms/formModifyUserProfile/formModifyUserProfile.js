import "./formModifyUserProfile.css"
import { showUserProfile } from "../../showUserProfile/showUserProfile.js"
import { URL } from "../../../utils/url.js"
import { showUserAvatar } from "../../showUserAvatar/showUserAvatar.js"
import { functionFetch } from "../../../utils/functionFetch.js"

export const formModifyUserProfile = () => {
  const main = document.querySelector("main")

  const existingFormModifyUserProfile = document.querySelector(".form-modify-user-profile")
  if (existingFormModifyUserProfile) {
    return
  }

  const CLOSEdiv = document.createElement("div")
  CLOSEdiv.classList.add("close-div")
  const CLOSEbutton = document.createElement("button")
  CLOSEbutton.classList.add("close-button", "secondary-button")
  CLOSEbutton.textContent = "X"
  CLOSEdiv.append(CLOSEbutton)

  CLOSEbutton.addEventListener("click", () => formModifyUserProfile.remove())

  const formModifyUserProfile = document.createElement("form")
  formModifyUserProfile.classList.add("form-modify-user-profile", "shadow")

  const formModifyUserProfileTitle = document.createElement("h3")
  formModifyUserProfileTitle.classList.add("form-modify-user-profile-title", "secondary-title")
  formModifyUserProfileTitle.textContent = "¿Quieres modificar tu perfil?"


  const inputName = document.createElement("input")
  inputName.classList.add("input-name")
  inputName.type = "text"
  inputName.placeholder = "Nuevo nombre de usuario"

  const inputAboutMe = document.createElement("textarea")
  inputAboutMe.classList.add("input-about-me")
  inputAboutMe.placeholder = "Cuenta algo sobre ti."

  const inputAvatar = document.createElement("input")
  inputAvatar.classList.add("input-avatar")
  inputAvatar.type = "file"



  const modifyButton = document.createElement("button")
  modifyButton.classList.add("modify-button", "primary-button", "hover", "shadow")
  modifyButton.textContent = "Modificar"

  formModifyUserProfile.addEventListener("submit", (e) => submit(e))


  formModifyUserProfile.append(CLOSEdiv)
  formModifyUserProfile.append(formModifyUserProfileTitle)
  formModifyUserProfile.append(inputName)
  formModifyUserProfile.append(inputAboutMe)
  formModifyUserProfile.append(inputAvatar)
  formModifyUserProfile.append(modifyButton)

  main.append(formModifyUserProfile)

}



const submit = async (e) => {
  e.preventDefault()

  const userID = localStorage.getItem("userID")

  const form = e.target;
  const inputName = form.querySelector(".input-name");
  const inputAboutMe = form.querySelector(".input-about-me");
  const inputAvatar = form.querySelector(".input-avatar");

  const existingError = form.querySelector(".error");
  if (existingError) {
    existingError.remove();
  }


  const formData = new FormData()

  formData.append("userName", inputName.value)
  formData.append("aboutMe", inputAboutMe.value)
  formData.append("avatar", inputAvatar.files[0])

  try {

    const response = await functionFetch("user/profile", userID, "PUT", formData, null)
    console.log(response);

    if (window.confirm("✅ Perfil modificado correctamente.")) {
      const divImg = document.querySelector(".div-img")
      divImg.innerHTML = ""
      showUserAvatar(divImg)
      showUserProfile();

    }

  } catch (error) {
    const errorMsg = error.message;
    const pError = document.createElement("p");
    pError.classList.add("error", "subtext");
    pError.textContent = errorMsg;
    form.append(pError);
    console.error("Error durante el login:", errorMsg);
  }


}