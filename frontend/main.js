import './style.css'
import { headerLP } from "./src/components/headerLP/headerLP.js";
import { logo } from "./src/components/logo/logo.js"
import { storeFront } from "./src/components/storeFront/storeFront.js"
import { footer } from "./src/components/footer/footer.js"
import { intro } from "./src/components/intro/intro.js"
import { home } from './src/pages/home/home.js';




export const landingPage = () => {
  const divApp = document.querySelector("#app")
  divApp.innerHTML = "";

  headerLP(divApp)
  storeFront(divApp)
  footer(divApp)


  logo(document.querySelector("header"))
  intro()


}


function handleInitialLoad() {
  const token = localStorage.getItem('loginToken');
  if (token) {
    home();
  } else {
    landingPage();
  }
}

document.addEventListener("DOMContentLoaded", handleInitialLoad);
