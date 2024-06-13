import "./intro.css"
import { slogan } from "../slogan/slogan.js"
import { accessButton } from "../buttons/accessButton/accessButton.js"

export const intro = () => {
  const main = document.querySelector("main")
  const intro = document.createElement("section")
  intro.classList.add("intro")

  slogan(intro)
  accessButton(intro)

  main.append(intro)
}