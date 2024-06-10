import './style.css'
import { headerLP } from "./src/components/headerLP/headerLP.js";
import { logo } from "./src/components/logo/logo.js"
import { storeFront } from "./src/components/storeFront/storeFront.js"
import { slogan } from './src/components/slogan/slogan.js'
import { footer } from "./src/components/footer/footer.js"
import { accessButton } from './src/components/buttons/accessButton/accessButton.js';




const landingPage = () => {
  const divApp = document.querySelector("#app")

  headerLP(divApp)
  storeFront(divApp)
  footer(divApp)


  logo()
  slogan()
  accessButton()


}

landingPage()