import "./register.css";
import { headerLP } from "../../components/headerLP/headerLP.js";
import { storeFront } from "../../components/storeFront/storeFront.js";
import { footer } from "../../components/footer/footer.js";
import { logo } from "../../components/logo/logo.js";
import { landingPage } from "../../../main.js";
import { login } from "../login/login.js";

export const register = () => {
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

  const inputUN = document.createElement("input");
  inputUN.type = "text";
  inputUN.placeholder = "*Username";
  inputUN.setAttribute("autocomplete", "username");

  const inputPASS = document.createElement("input");
  inputPASS.type = "password";
  inputPASS.placeholder = "*Password";
  inputPASS.setAttribute("autocomplete", "current-password");

  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.placeholder = "*Email";
  inputEmail.setAttribute("autocomplete", "email");

  const submitButton = document.createElement("button");
  submitButton.textContent = "ENLIST";
  submitButton.classList.add("primary-button", "hover");

  const privacyPolicyNotice = document.createElement("p");
  privacyPolicyNotice.classList.add("privacy-policy-notice", "text");
  privacyPolicyNotice.innerHTML = `<p>By creating an account, you agree to our <a class="link">Privacy Policy</a></p>`;

  form.append(divLogo, inputEmail, inputUN, inputPASS, submitButton, privacyPolicyNotice);
  main.append(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submit(inputUN.value, inputEmail.value, inputPASS.value, form)
  });
};



// REGISTER SUBMIT
const submit = async (userName, email, password, form) => {

  const existingError = form.querySelector(".error");
  if (existingError) {
    existingError.remove();
  }

  const objetoFinal = JSON.stringify({
    userName,
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
    const res = await fetch("http://localhost:4001/api/v1/user/register", opciones);

    if (!res.ok) {
      const errorMsg = await res.json();
      const pError = document.createElement("p");
      pError.classList.add("error", "subtext");
      pError.textContent = errorMsg;
      form.append(pError);
      throw new Error(errorMsg);
    }

    const resFinal = await res.json();
    console.log(resFinal);
    login();
  } catch (error) {
    console.error("Error during registration:", error);
  }

}