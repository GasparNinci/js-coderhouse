


function  Producto (id, prod, precio, fechaVencimiento, descripcion, categoria, oferta) {
    this.id = id
    this.prod = prod
    this.precio = precio
    this.fechaVencimiento = fechaVencimiento
    this.descripcion = descripcion
    this.categoria = categoria
    this.oferta = oferta
}

const zanahoria = new Producto (200, "zanahoria", 300, "01/23", "Zanahoria fresca de cosecha propia. Precio por kilo", "verduras", true)
const lechuga = new Producto (201, "lechuga", 200, "none", "Lechuga mantecosa de cosecha propia. Precio por unidad (agotado)", "verduras", false)
const tomate = new Producto (202, "tomate", 250, "02/23", "Tomates frescos. Precio por kilo. ", "frutas", true)
const palta = new Producto (203, "palta", 800, "none", "Paltas. Precio por kilo (agotado)", "verduras", false)
const kiwi = new Producto (204, "kiwi", 1000, "02/23", "Kiwis traidos de importacion. Precio por kilo", "frutas", true)
const huevos = new Producto (205, "huevos", 650, "none", "Precio por maple de 30 huevos", "otros", true)
const pan = new Producto (206, "pan", 300, "01/23", "Pan de mignon en tiras. Precio por kilo", "otros", true)

const verduleria = [zanahoria, lechuga, tomate, palta, kiwi, huevos, pan]

console.table(verduleria)

// 2)

verduleria.map((p) => {
    if (p.oferta === true) {
        p.precio = p.precio * 0.9
    }
})

console.table(verduleria)

// 3) Verdura ordenada alfabeticamente por categoria

const verduleriaOrdenadaCategoria = [...verduleria].sort((a, b) => {
    if (a.categoria < b.categoria) {
        return -1
    } else if (a.categoria > b.categoria){       
        return 1
    } else {
        return 0
    }
})

console.table(verduleriaOrdenadaCategoria) 

//4)

let verOfertas = confirm("¿Desea ver las ofertas de la verduleria Frexcurax?")

while (verOfertas === false) {
    alert("Entonces usted se lo pierde")
    alert("Mentira, las verá si o si.")
    verOfertas = true 
}



while (verOfertas) {
    alert("Perfecto. Las ofertas se imprimiran en consola.")
    const filtrarProductos = verduleria.filter(p => p.oferta === true)
    console.table(filtrarProductos)
    break
}

//5)A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().

const buscarProducto = prompt("Ingrese el producto de la verduleria que quiera buscar {zanahoria - lechuga - tomate - kiwi - palta - huevos - pan}")

verduleria.find((element) => {
    if (buscarProducto === element.prod) {
        alert("Producto: " + buscarProducto +"\nPrecio: " + `${element.precio}` + "\nCategoria: " + `${element.categoria}` + "\nFecha de vencimiento: " + `${element.fechaVencimiento}` + "\n" + `${element.descripcion}`)
    }
})