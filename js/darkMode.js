
const labelDarkmode = document.querySelector("#label-dark-mode")
const inputDarkmode = document.querySelector(`#dark-mode`)
const main = document.querySelector("main")
const tituloMain = document.querySelector("#titulo-main")



inputDarkmode.addEventListener( "click", (event) => {
    event.preventDefault()
    
    tituloMain.classList.toggle("bordes-dark")
    main.classList.toggle(`main-dark-mode`)
    
    if (main.classList.contains("main-dark-mode")) {
        labelDarkmode.innerHTML = `Modo Claro <i class="fa-regular fa-sun"></i>`
        const sol = document.querySelector(".fa-sun")    
        sol.style.color = "yellow"
        localStorage.setItem("modoOscuro" , "on")
    } else{
        labelDarkmode.innerHTML = `Modo Oscuro <i class="fa-regular fa-moon"></i>`
        localStorage.setItem("modoOscuro" , "off")
    }
})

if (localStorage.getItem(`modoOscuro`) === `on`) {
    main.classList.add(`main-dark-mode`)
    tituloMain.classList.add(`bordes-dark`)
    labelDarkmode.innerHTML = `Modo Claro <i class="fa-regular fa-sun"></i>`
        const sol = document.querySelector(".fa-sun")    
        sol.style.color= "yellow"
    
} else {
    main.classList.remove(`main-dark-mode`)
    tituloMain.classList.remove(`bordes-dark`)
}