import "./accessButton.css"

export const accessButton = () => {
  const main = document.querySelector("main")

  const divButtons = document.createElement("div")
  divButtons.className = "div-buttons"

  const buttonLogIn = document.createElement("button")
  buttonLogIn.textContent = "Log in"
  buttonLogIn.classList.add("primary-button")
  buttonLogIn.classList.add("hover")

  const buttonJoin = document.createElement("button")
  buttonJoin.textContent = "Join"
  buttonJoin.classList.add("secondary-button")
  buttonJoin.classList.add("hover")

  divButtons.append(buttonLogIn)
  divButtons.append(buttonJoin)
  main.append(divButtons)
}
