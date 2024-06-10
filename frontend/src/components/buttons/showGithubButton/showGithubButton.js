import "./showGithubButton.css"

export const showGithubButton = (elementoPadre) => {
  const githubButton = document.createElement("a")
  githubButton.classList.add("github-button")
  githubButton.classList.add("secondary-button")
  githubButton.href = "https://github.com/Quinteroo"
  githubButton.setAttribute('target', '_blank')
  githubButton.textContent = "github"
  elementoPadre.append(githubButton)
}