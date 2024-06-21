import './logo.css'

export const logo = (elementoPadre) => {

  const logoContainer = document.createElement("div")
  logoContainer.className = "logo-container"

  const divName = document.createElement("div")
  divName.className = "name-div"

  const brandName = document.createElement("h1")
  brandName.textContent = "Festivalia"
  brandName.classList.add("brand-name")
  brandName.classList.add("primary-title")
  divName.append(brandName)

  const divImg = document.createElement("div")
  divImg.className = "img-div"

  const imgLogo = document.createElement("img")
  imgLogo.src = "./src/assets/images/logoFestivalia1.png"
  imgLogo.alt = "Festivalia Logo"
  imgLogo.className = "logo-image"

  divImg.append(imgLogo)

  logoContainer.append(divName)
  logoContainer.append(divImg)

  elementoPadre.append(logoContainer)
}
