const envioForm = document.querySelector("#form-contacto")

const checkbox = document.querySelector
    ("#checkbox-newsletter")

const inputNombre = document.querySelector("#input-nombre")

const inputEmail = document.querySelector("#input-email")

const inputSelect = document.querySelector("#input-select")

const inputUsername = document.querySelector("#input-username")

const pushImg = document.querySelector(".contenedor-select-img")

const alerta = document.querySelector(".alerta-incorrect")



checkbox.addEventListener("change", (e) => {

    const agregarInput = document.querySelector(".agregar-input")

    if (e.target.checked) {
        agregarInput.innerHTML = `
        <div class= "contenedor-inputs">
        <label for="username" id="label-username"> Introduce tu username de Yu-Gi-Oh! Duel Links:</label>
        <input type="text" value="" id="input-username" required placeholder="Introducir username:">
        <div>
        `} else {
        agregarInput.innerHTML = ""
    }
})

envioForm.onsubmit = (event) => {
    event.preventDefault()
    if (inputNombre.value === "") {
        alerta.style.display = "block"
        inputNombre.style.backgroundColor = "gold"
    }
    else if (inputEmail.value === "") {
        alerta.style.display = "block"
        inputEmail.style.backgroundColor = "gold"
    }
    else {
        swal({
            title: "¡Formulario Enviado Correctamente!",
            icon: "../multimedia/imagenes_pagina/yamigif.gif",
            timer: 1280,
            buttons: false
        })

        inputNombre.style.backgroundColor = "#fefefe"
        inputNombre.value = ""

        inputEmail.style.backgroundColor = "#fefefe"
        inputEmail.value = ""

        inputSelect.value = ""
        inputSelect.style.backgroundColor = "white"

        alerta.style.display = "none"
        pushImg.innerHTML = ``
    }
}


inputSelect.addEventListener("change", () => {

    if (inputSelect.value === "slifer") {
        inputSelect.style.backgroundColor = "red"
        pushImg.innerHTML = `<img src="../multimedia/imagenes_pagina/slifer.png">`
    }
    else if (inputSelect.value === "obelisk") {
        inputSelect.style.backgroundColor = "lightblue"
        pushImg.innerHTML = `<img src="../multimedia/imagenes_pagina/obelisk.png">`
    }
    else if (inputSelect.value === "exodia") {
        inputSelect.style.backgroundColor = "gold"
        pushImg.innerHTML = `<img src="../multimedia/imagenes_pagina/exodia2.png">`
    }
    else if (inputSelect.value === "ra") {
        inputSelect.style.backgroundColor = "yellow"
        pushImg.innerHTML = `<img src="../multimedia/imagenes_pagina/ra.png">`
    }
})
