import './slogan.css'

export const slogan = () => {
  const main = document.querySelector("main")

  const divSlogan = document.createElement("div")
  divSlogan.className = "div-slogan"

  const slogan = document.createElement("p")
  slogan.classList.add("slogan")
  slogan.classList.add("secondary-title")
  slogan.innerHTML = "Achieve happiness<br>through emotion";

  const subSlogan = document.createElement("p")
  subSlogan.classList.add("text")
  subSlogan.classList.add("subSlogan")
  subSlogan.innerHTML = "Improve your life by finding the<br>best music events around you";


  divSlogan.append(slogan)
  divSlogan.append(subSlogan)
  main.append(divSlogan)

}