import './login.css'
import { headerLP } from "../../components/headerLP/headerLP.js";
import { storeFront } from "../../components/storeFront/storeFront.js";
import { footer } from "../../components/footer/footer.js";
import { logo } from "../../components/logo/logo.js";
import { landingPage } from "../../../main.js";
import { register } from '../register/register.js';
import { home } from '../home/home.js';
import { URL } from "../../utils/url.js"


export const login = () => {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = "";


  headerLP(divApp);
  storeFront(divApp);
  footer(divApp);

  const main = document.querySelector("main");


  const form = document.createElement("form");
  const divLogo = document.createElement("div");
  divLogo.classList.add("div-logo");
  divLogo.addEventListener("click", landingPage);
  logo(divLogo);

  const pWelcome = document.createElement("p")
  pWelcome.classList.add("p-welcome", "primary-title")
  pWelcome.textContent = "welcome!"


  const inputPASS = document.createElement("input");
  inputPASS.type = "password";
  inputPASS.placeholder = "*Password";
  inputPASS.setAttribute("autocomplete", "current-password");

  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.placeholder = "*Email";
  inputEmail.setAttribute("autocomplete", "email");

  const loginButton = document.createElement("button");
  loginButton.textContent = "SIGN IN";
  loginButton.classList.add("primary-button", "hover");

  const signUpNotice = document.createElement("p");
  signUpNotice.classList.add("sign-up-notice", "text");
  signUpNotice.innerHTML = `<p><a class="link">Sign up</a> if you don't have an account yet.</p>`;
  signUpNotice.addEventListener("click", register)


  form.append(divLogo, pWelcome, inputEmail, inputPASS, loginButton, signUpNotice);
  main.append(form);


  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submit(inputEmail.value, inputPASS.value, form)
  });
};



// REGISTER SUBMIT
const submit = async (email, password, form) => {

  const existingError = form.querySelector(".error");
  if (existingError) {
    existingError.remove();
  }



  const objetoFinal = JSON.stringify({
    password,
    email
  })


  const opciones = {
    method: "POST",
    body: objetoFinal,
    headers: {
      "content-type": "application/json"
    }
  }

  try {
    const res = await fetch(`${URL}user/login`, opciones);
    if (!res.ok) {
      const errorMsg = await res.json();
      const pError = document.createElement("p");
      pError.classList.add("error", "subtext");
      pError.textContent = errorMsg;
      form.append(pError);
      throw new Error(errorMsg);
    }

    const resFinal = await res.json();
    const userID = resFinal.user._id;

    localStorage.setItem("loginToken", resFinal.token);
    localStorage.setItem("userID", userID);
    console.log(resFinal);

    home();
  } catch (error) {
    console.error("Error durante login:", error);
  }


}