import "./loading.css";

export const showLoading = () => {
  console.log("loading fetch 🚀");
  const main = document.querySelector("main");
  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add("loading-div");

  const loadingGif = document.createElement("img");
  loadingGif.classList.add("loading-gif");
  loadingGif.src = "src/assets/images/711.gif";

  loadingDiv.append(loadingGif);
  main.append(loadingDiv);
};

export const hideLoading = () => {
  const loadingDiv = document.querySelector(".loading-div");
  if (loadingDiv) {
    loadingDiv.remove();
  }
};