import "./footer.css"
import { showSocialIcons } from "../showSocialIcons/showSocialIcons.js"
import { showGithubButton } from "../buttons/showGithubButton/showGithubButton.js"
import { showContentInfo } from "../showContentInfo/showContentInfo.js"



export const footer = (elementoPadre) => {
  const footer = document.createElement("footer")

  const divSocial = document.createElement("div")
  divSocial.classList.add("div-social")

  const divInfo = document.createElement("div")
  divInfo.classList.add("div-info")


  showSocialIcons(divSocial)
  showGithubButton(divSocial)
  showContentInfo(divInfo)

  footer.append(divSocial)
  footer.append(divInfo)
  elementoPadre.append(footer)


}