import "./showAllEvents.css"

export const showAllEvents = async () => {

  const main = document.querySelector("main")
  main.innerHTML = "";


  const res = await fetch('http://localhost:4001/api/v1/event')

  const events = await res.json()
  console.log(events);



}