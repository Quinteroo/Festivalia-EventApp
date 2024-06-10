import "./showContentInfo.css"

const contentInfoRoutes = [
  {
    texto: "© Festivalia 2024",
    href: "#",
  },
  {
    texto: "Terms of Service",
    href: "#",
  },
  {
    texto: "Privacy Policy",
    href: "#",
  },
  {
    texto: "Cookie Settings",
    href: "#",
  },
  {
    texto: "Cookie Policy",
    href: "#",
  },
  {
    texto: "Help",
    href: "#",
  },

]

export const showContentInfo = (elementoPadre) => {
  const ulContentInfo = document.createElement("ul")
  ulContentInfo.classList.add("ul-content-info")

  for (const route of contentInfoRoutes) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.classList.add("text")
    a.classList.add("hover-color")
    a.setAttribute('target', '_blank')
    a.textContent = route.texto
    a.href = route.href

    li.append(a)
    ulContentInfo.append(li)
  }
  elementoPadre.append(ulContentInfo)
}