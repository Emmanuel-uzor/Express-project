let bar = document.getElementById("lastt")
let barChild = document.querySelector(".lastt-child")

const siblings = document.getElementById("siblings")
const siblingsChild = document.querySelector(".siblings-child")


bar.addEventListener("click", function (event) {

    if (barChild.style.display === "none") {
        barChild.style.display = "flex"

    } else {
        barChild.style.display = "none"
    }

})

siblings.onclick = function (event) {

    if (siblingsChild.style.display === "none") {
        siblingsChild.style.display = "flex"
    } else {
        siblingsChild.style.display = "none"
    }

}


const dropdown = document.getElementById("link")
const dropdownSonn = document.getElementById("sonn")
const dropdownIcon = document.getElementById("i")

dropdown.onmouseenter = function (params) {
    dropdown.style.color = "white"
    
        dropdownIcon.style.transform = "rotate(180deg)"
        dropdownIcon.style.color = "white"
}
dropdown.onmouseleave = function (params) {

    dropdown.style.color = "rgb(255, 255, 255,0.7)"

    dropdownIcon.style.transform = "rotate(0deg)"
    dropdownIcon.style.color = "rgb(255, 255, 255,0.7)"
}

dropdownSonn.onmouseenter = function (params) {

        dropdown.style.color = "white"
    
        dropdownIcon.style.transform = "rotate(180deg)"
        dropdownIcon.style.color = "white"
}

dropdownSonn.onmouseleave = function (params) {

        dropdown.style.color = "rgb(255, 255, 255,0.7)"

        dropdownIcon.style.transform = "rotate(0deg)"
        dropdownIcon.style.color = "rgb(255, 255, 255,0.7)"
}


const menuTwo = document.getElementById("link2")
const menuTwoSonn = document.getElementById("sonn2")
const menuTwoIcon = document.getElementById("in")

menuTwo.onmouseenter  = function (params) {
    menuTwo.style.color = " rgb(33, 33, 253)"
    menuTwo.style.fontWeight = "bolder"
    menuTwoIcon.style.color = "blue"
}

menuTwo.onmouseleave = function (params) {
    menuTwo.style.color = "black"
    menuTwo.style.fontWeight = "normal"
    menuTwoIcon.style.color = "black"

}

menuTwoSonn.onmouseenter = function (params) {
    menuTwo.style.color = " rgb(33, 33, 253)"
    menuTwo.style.fontWeight = "bolder"
    menuTwoIcon.style.color = "blue"
}

menuTwoSonn.onmouseleave = function (params) {
    menuTwo.style.color = "black"
    menuTwo.style.fontWeight = "normal"
    menuTwoIcon.style.color = "black"
}
