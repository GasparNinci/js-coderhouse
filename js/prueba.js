const contCartas = document.querySelector(".contenedor-yugi")



                    /* YU GI OH  */

const cartas = (array ) => {
    const nodos = array.reduce((acc, element) => {
        return acc + `
        <div class="carta">
        <div class="container-img">
            <img src="${element.image_url}">
        </div>
        <h1> <b>${element.name}</b>
        <label for="favear" id="label-favear">
        <i class="fa-regular fa-star" ></i>
        <input type="checkbox" id="input-favear" name="favear"></input>
        </label>
        </h1>
        </div>
        ` 
    }, "")
    contCartas.innerHTML = nodos
}


const personajes = async () => {
    const respuesta = await fetch(`cartas_info.json`) 
    const data = await respuesta.json()
    cartas(data.data)
}

personajes()
