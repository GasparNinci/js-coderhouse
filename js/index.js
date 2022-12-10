let prestamo = confirm("¿Desea sacar un credito? Recuerde que nuestra tasa es del 15% mensual.")


function potencia (credito, exponente) {
    return credito * (Math.pow(1.15, exponente))
}

if (prestamo == false){
    alert ("No sea amargo :((")
    alert("Tocar en HOME para reiniciar")
}



while (prestamo) {
    const creditos = parseInt(prompt("Elija el plan de creditos que desea sacar: {1000 ; 2000; 3000}"))
    
    if  (creditos === 1000 || creditos === 2000 || creditos === 3000) {
       const cuotas = parseInt(prompt("Seleccione en cuantas cuotas desea pagar su prestamo"))
       
        alert("El total a pagar en " + cuotas + " cuotas es igual a " + potencia(creditos, cuotas))

        prestamo = false
} else if (creditos !== 1000 || creditos !== 2000 || creditos !==3000){
    alert("Credito no existente. Intentelo de nuevo")
    }
} 

