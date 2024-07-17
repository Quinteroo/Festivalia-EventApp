import "./formModifyUserProfile.css"

export const formModifyUserProfile = () => {
  const main = document.querySelector("main")

  const existingFormModifyUserProfile = document.querySelector(".form-modify-user-profile")
  if (existingFormModifyUserProfile) {
    return
  }

  const CLOSEdiv = document.createElement("div")
  CLOSEdiv.classList.add("close-div")
  const CLOSEbutton = document.createElement("button")
  CLOSEbutton.classList.add("close-button", "secondary-button")
  CLOSEbutton.textContent = "X"
  CLOSEdiv.append(CLOSEbutton)

  CLOSEbutton.addEventListener("click", () => formModifyUserProfile.remove())

  const formModifyUserProfile = document.createElement("form")
  formModifyUserProfile.classList.add("form-modify-user-profile")

  const formModifyUserProfileTitle = document.createElement("h3")
  formModifyUserProfileTitle.classList.add("form-modify-user-profile-title", "secondary-title")
  formModifyUserProfileTitle.textContent = "¿Quieres modificar tu perfil?"


  const formModifyUserProfileText = document.createElement("p")
  formModifyUserProfileText.classList.add("form-modify-user-profile-text", "text")
  formModifyUserProfileText.textContent = "hola caracola."


  const modifyButton = document.createElement("button")
  modifyButton.classList.add("modify-button", "primary-button")
  modifyButton.textContent = "Modificar"
  // modifyButton.addEventListener("click", submit)
  modifyButton.addEventListener("click", () => formAttendee.remove())



  formModifyUserProfile.append(CLOSEdiv)
  formModifyUserProfile.append(formModifyUserProfileTitle)
  formModifyUserProfile.append(formModifyUserProfileText)
  formModifyUserProfile.append(modifyButton)

  main.append(formModifyUserProfile)

}



const submit = async (e) => {
  e.preventDefault()
  console.log(e);

  const userID = localStorage.getItem("userID")


  try {
    const opciones = {
      method: "POST",
      body: JSON.stringify({
        eventName: eventTitle.textContent
      }),
      headers: {
        "content-type": "application/json"
      }
    }


    console.log(opciones);

    const res = await fetch(`${URL}attendee/${userID}`, opciones)

    if (!res.ok) {  // (status fuera de rango 200-299)
      const errorMsg = await res.json();
      throw new Error(errorMsg);
    }

    const resFinal = await res.json()

    console.log(resFinal);

    alert("✅ Perfil modificado correctamente.")

  } catch (error) {
    console.log(error);
    alert("❌ Algo falló en la modificación de tu perfil.")
  }
}