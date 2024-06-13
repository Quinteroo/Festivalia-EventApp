import "./register.css"
import { headerLP } from "../../components/headerLP/headerLP.js";
import { storeFront } from "../../components/storeFront/storeFront.js";
import { footer } from "../../components/footer/footer.js";

export const register = () => {
  const divApp = document.querySelector("#app")
  const main = document.querySelector("main")


  divApp.innerHTML = "";


  headerLP(divApp)
  storeFront(divApp)
  footer(divApp)
  main.style.backgroundImage = "none"

}