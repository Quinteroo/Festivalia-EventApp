import "./register.css"
import { headerLP } from "../../components/headerLP/headerLP.js";
import { storeFront } from "../../components/storeFront/storeFront.js";
import { footer } from "../../components/footer/footer.js";
import { logo } from "../../components/logo/logo.js";
import { landingPage } from "../../../main.js";



export const register = () => {
  const divApp = document.querySelector("#app")
  divApp.innerHTML = "";


  headerLP(divApp)
  storeFront(divApp)
  footer(divApp)

  const main = document.querySelector("main")

  const form = document.createElement("form")
  const divLogo = document.createElement("div")
  divLogo.classList.add("div-logo")
  divLogo.addEventListener("click", landingPage)
  logo(divLogo)

  const inputFile = document.createElement("input");
  inputFile.type = "file";
  inputFile.id = "image-upload";
  inputFile.name = "image-upload";
  inputFile.accept = "image/*";
  inputFile.classList.add("input-file");


  const inputUN = document.createElement("input")
  inputUN.type = "text"
  inputUN.placeholder = "*Username"

  const inputPASS = document.createElement("input")
  inputPASS.type = "password"
  inputPASS.placeholder = "*Password"

  const inputEmail = document.createElement("input")
  inputEmail.type = "email"
  inputEmail.placeholder = "*Email"

  const submitButton = document.createElement("button")
  submitButton.textContent = "ENLIST"
  submitButton.classList

  form.append(divLogo, inputEmail, inputUN, inputPASS, inputFile, submitButton)
  main.append(form)

}