const contCartas = document.querySelector(".contenedor-yugi")


const cartas = (array ) => {
    const nodos = array.reduce((acc, element) => {
        return acc + `
        <div class="carta" id="carta-${element.id}">
            <div class="container-img">
                <img src=${element.image_url} alt=${element.name}>
            </div>
            <h1> 
                <b>${element.name} </b>
            </h1>
            <button class="button-fav" id="button-${element.id}" title="Añadir a favoritos">
                <i class="estrella fa-regular fa-star" ></i>
            </button>
        </div>
        ` 
    }, "")
    contCartas.innerHTML = nodos
}

cartas(yugi)


//      SUBIR A FAVORITOS

let favoritos = []

const pushArray= (array, valor) => {
    array.push(valor)
}

const subirLs = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

const traerLs = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const pushCartasFavoritas = () => {
    const botonesFav = document.querySelectorAll(".button-fav")
    botonesFav.forEach(boton => {
        boton.onclick = () => {
            const extraerId = boton.id.slice(7)
            const catchCarta = yugi.find(carta => {
                return carta.id == Number(extraerId)
            })
            pushArray(favoritos, catchCarta)
            subirLs("añadido a favoritos", favoritos)
        }
    
    })
}

pushCartasFavoritas()



const mantenerFavoritos = traerLs("añadido a favoritos") || []
favoritos = mantenerFavoritos















