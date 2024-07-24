import "./showSocialIcons.css"


const routerSocial = [
  {
    texto: "Facebook",
    href: "#",
    image: "/assets/logo-FB.png"
  },
  {
    texto: "X",
    href: "#",
    image: "/assets/logo-X.png"
  },
  {
    texto: "Instagram",
    href: "#",
    image: "/assets/logo-IG.png"
  },
  {
    texto: "Spotify",
    href: "#",
    image: "/assets/logo-Spotify.png"
  },
]

export const showSocialIcons = (elementoPadre) => {
  const ulSocialLinks = document.createElement("ul")
  ulSocialLinks.classList.add("ul-social-links")

  for (const social of routerSocial) {

    const liSocial = document.createElement("li")
    liSocial.classList.add("li-social")
    liSocial.classList.add("hover")

    const aSocial = document.createElement("a")
    aSocial.classList.add("a-social")
    aSocial.href = social.href
    aSocial.setAttribute('target', '_blank')

    const imgSocial = document.createElement("img")
    imgSocial.classList.add("img-social")
    imgSocial.src = social.image

    aSocial.append(imgSocial)

    liSocial.append(aSocial)

    ulSocialLinks.append(liSocial)

    elementoPadre.append(ulSocialLinks)

  }
}