import "./avatar.css";
// import { URL } from "../../utils/url.js"

const token = localStorage.getItem('loginToken');

export const avatar = async (token) => {
  const response = await fetch('http://localhost:4001/api/v1/user/avatar', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Error fetching avatar');
  }

  const avatar = await response.json();

  console.log(avatar);

};


// export const avatar = async (elementoPadre) => {
//   const imgContainer = document.createElement("div");
//   imgContainer.classList.add("img-container");

//   const imgAvatar = document.createElement("img");
//   imgAvatar.classList.add("img-avatar");

//   const avatarUrl = await showUserAvatar();
//   imgAvatar.src = avatarUrl || "./src/assets/images/usuario.png";

//   imgAvatar.alt = "avatar image"


//   imgContainer.append(imgAvatar)
//   elementoPadre.append(imgContainer)
// };

