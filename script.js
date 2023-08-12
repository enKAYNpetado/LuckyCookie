const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
]

imgTry.addEventListener("click", clickBtn)
btnReset.addEventListener("click", resetBtn)

function clickBtn() {
  event.preventDefault()
  const inputImg = document.querySelector("#btnTry")

  screen1.classList.add("hide")
  screen2.classList.remove("hide")

  phrases = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  ]
  const randomPhrase = Math.floor(Math.random() * phrases.length)
  screen2.querySelector("#phrase").innerText = phrases[randomPhrase]
}

function resetBtn() {
  event.preventDefault()
  const inputBtn = document.querySelector("#btnReset")

  screen1.classList.remove("hide")
  screen2.classList.add("hide")
}
