import './login.css'
import { headerLP } from "../../components/headerLP/headerLP.js";
import { storeFront } from "../../components/storeFront/storeFront.js";
import { footer } from "../../components/footer/footer.js";
import { logo } from "../../components/logo/logo.js";
import { landingPage } from "../../../main.js";
import { register } from '../register/register.js';
import { home } from '../home/home.js';
import { functionFetch } from '../../utils/functionFetch.js';


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

  const objeto = JSON.stringify({ password, email });

  try {
    const user = await functionFetch("user/login", "", "POST", objeto, null);


    localStorage.setItem("loginToken", user.token);
    localStorage.setItem("userID", user.user._id);

    home();
  } catch (error) {
    const errorMsg = error.message;
    const pError = document.createElement("p");
    pError.classList.add("error", "subtext");
    pError.textContent = errorMsg;
    form.append(pError);
    console.error("Error durante el login:", errorMsg);
  }
}
