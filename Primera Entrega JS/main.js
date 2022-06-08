// 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

// 👉 Crear una función que acepte ese array como parámetro. 

// Dentro de la función, debemos lograr lo siguiente: 
// 👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
// 👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
// 👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
// Los ingredientes impares son: (ingredientes en array impares)."



let arrayIngredientes = ["harina", "agua", "salsa", "muzzarella", "cebolla", "aceite", "levadura", "jamón", "morrones", "palmitos"];




function paridadArray(ingredientes) {
    let pares = [];
    let impares = [];
    for (let i = 0; i < ingredientes.length; i++) {
        let count = ingredientes[i].length;
        if (count % 2 === 0) {
            pares.push(ingredientes[i]);
        }
        else {
            impares.push(ingredientes[i]);
        }
    }
    return (
        console.log(`Los ingredientes PARES son ${pares} y los ingredientes IMPARES son ${impares}`)
    );
}

paridadArray(arrayIngredientes);