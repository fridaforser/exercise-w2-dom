console.log("Start Here 😉");
const radioDark = document.getElementById("dark")
const radioLight = document.getElementById("light")
const radioCrazy = document.getElementById("crazy")
const box = document.getElementById("box")
const boxText = document.getElementById("boxText")

radioDark.onclick = () => {
    box.style.backgroundColor = "black"
    boxText.style.color = "white"
}
radioLight.onclick = () => {
    box.style.backgroundColor = "lightgreen"
    boxText.style.color = "black"
}
radioCrazy.onclick = () => {
    box.style.backgroundColor = "red"
    boxText.style.color = "yellow"
}

