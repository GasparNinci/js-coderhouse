const contFavoritos = document.querySelector("#generador-favoritos")



const traerLs = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const pushArray = (array, valor) => {
    array.push(valor)
}

let favoritos = (traerLs("añadido a favoritos"))

const cartas = (array) => {
    const nodos = array.reduce((acc, element) => {
        return acc + `
        <div class="carta" id="carta-${element.id}">
            <div class="container-img">
                <img src=${element.image_url} alt=${element.name}>
            </div>
            <h1> 
                <b>${element.name} </b>
            </h1>
            <button class="button-fav-quitar" id="borrar-${element.id}" title="Quitar de favoritos">
                <i class="estrella fa-solid fa-star" ></i>
            </button>
        </div>
        `
    }, "")
    contFavoritos.innerHTML = nodos
}

cartas(favoritos)

const quitarFavs = () => {
    const botonQuitar = document.querySelectorAll(".carta")
    for (let i = 0; i < botonQuitar.length; i++) {
        botonQuitar.onclick = () => {
            const extraerId = botonQuitar.id.slice(7)
            const borrarCarta = favoritos.filter((carta, i) => {
                return carta.id != Number(extraerId)
            })
            favoritos = borrarCarta
            localStorage.setItem("añadir a favoritos", JSON.stringify(favoritos))
            contFavoritos.innerHTML = cartas(favoritos)
            quitarFavs()
        }
    }
}
quitarFavs()




