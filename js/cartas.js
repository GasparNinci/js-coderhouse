const contCartas = document.querySelector(".contenedor-yugi")


fetch("https://www.ygohub.com/api/card_info?name=card_name")
.then((response) => response.json())
.then ((data) => console.log(data))

const cartas = (array ) => {
    const nodos = array.reduce((acc, element) => {
        return acc + `
        <div class="card">
        <div class="container-img">
            <img src=${element.image_url} alt=${element.name}>
        </div>
        <h1>${element.name}</h1>
        <b><h2>${element.species}</h2></b>
        <h3>${element.status}</h3>
        </div>
        `
    }, "")
    contCartas.innerHTML = nodos
}


const mostrarCartas = async () => {   
    const respuesta = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php") 
    const data = await respuesta.json()
    return cartas(data.results)
}

mostrarCartas()
