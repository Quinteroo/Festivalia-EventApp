
import './storeFront.css'

export const storeFront = (elementoPadre) => {
  const main = document.createElement("main")
  main.classList.add("background-image")
  elementoPadre.append(main)
}