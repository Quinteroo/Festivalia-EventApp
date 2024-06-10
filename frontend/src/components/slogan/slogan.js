import './slogan.css'

export const slogan = () => {
  const main = document.querySelector("main")

  const divSlogan = document.createElement("div")
  divSlogan.className = "div-slogan"

  const slogan = document.createElement("p")
  slogan.className = "slogan"
  slogan.innerHTML = "Achieve happiness<br>through emotion";

  const subSlogan = document.createElement("p")
  subSlogan.className = "subSlogan"
  subSlogan.innerHTML = "Do better your life finding the<br>best music events around you";


  divSlogan.append(slogan)
  divSlogan.append(subSlogan)
  main.append(divSlogan)

}