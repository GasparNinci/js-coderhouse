const form = document.querySelector("form")
const montoCredito = document.querySelector("#monto-credito")
const cantCuotas = document.querySelector("#cantidad-cuotas")
const interesMensual = document.querySelector("#interes-cuotas")
const enviarForm = document.querySelector("#envio-form")
const alerta = document.querySelector(".alerta-incorrect")
const inputMonto = document.querySelector(".span-montoCredito")
const inputCuotas = document.querySelector(".span-cuotas")
const inputInt = document.querySelector(".span-interes")

function credAPagar (credito, interes, exponente) {
    return credito * (Math.pow((1+(interes/100)), exponente))
}

function resta (numerador, sustraendo) {
    return numerador - sustraendo
}


function pasarHtml (array) {
    const contenedorEventos = document.querySelector(".contenedor-eventos")
    const arrayToString = array.reduce( (acc, element, i) => {
        return acc + ` 
        <div class="titulo-prestamo"> Préstamo número ${i} </div>
        <div class="div-eventos">
            <p> 
                Si saca un <u>préstamo</u> de <b>$${element.montoCredito}</b> a <b>${element.cantidadCuotas} meses</b>, el total a pagar con un <u>interés</u> del <b>${element.interes}% mensual</b> será de <b>$${credAPagar(element.montoCredito, element.interes, element.cantidadCuotas).toFixed(2)}</b> y su <u>pérdida</u> sera de <b>$${resta(credAPagar(element.montoCredito, element.interes, element.cantidadCuotas), element.montoCredito).toFixed(2)}</b>
            </p>
        </div>
        `
    }, "")
    contenedorEventos.innerHTML = arrayToString
    console.log(contenedorEventos)
}



let datos = []


form.onsubmit = (event) => {
    event.preventDefault()
    if (montoCredito.value === "") {
        alerta.style.display = "block"
        inputMonto.style.backgroundColor = "red"
    }
     else if (cantCuotas.value === ""){
        alerta.style.display = "block"
        inputCuotas.style.backgroundColor = "red"
    } 
    else if (interesMensual.value === ""){
        alerta.style.display = "block"
        inputInt.style.backgroundColor = "red"
    } 
    else {
        datos.push({
            montoCredito: montoCredito.value,
            cantidadCuotas: cantCuotas.value,
            interes: interesMensual.value,
        })
        pasarHtml(datos)
        inputCuotas.style.backgroundColor
    }
    
}
























