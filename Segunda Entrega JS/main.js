//ENTREGA 1
// 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).
// 👉 Crear una función que acepte ese array como parámetro. 
// Dentro de la función, debemos lograr lo siguiente: 
// 👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
// 👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
// 👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
// Los ingredientes impares son: (ingredientes en array impares)."

// let arrayIngredientes = ["harina", "agua", "salsa", "muzzarella", "cebolla", "aceite", "levadura", "jamón", "morrones", "palmitos"];
// function paridadArray(ingredientes) {
//     let pares = [];
//     let impares = [];
//     for (let i = 0; i < ingredientes.length; i++) {
//         let count = ingredientes[i].length;
//         if (count % 2 === 0) {
//             pares.push(ingredientes[i]);
//         }
//         else {
//             impares.push(ingredientes[i]);
//         }
//     }
//     return (
//         console.log(`Los ingredientes PARES son ${pares} y los ingredientes IMPARES son ${impares}`)
//     );
// }
// paridadArray(arrayIngredientes);
//



//ENTREGA 2
// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸


const arrayPizzas =[
     {id:1,nombre:'Muzza',ingredientes:['agua','harina','sal','levadura','aceite','salsa de tomate','queso'],precio:590},
     {id:2,nombre:'Fugazza con queso',ingredientes:['agua','harina','sal','levadura','aceite','cebolla','queso'],precio:800},
     {id:3,nombre:'Calabresa',ingredientes:['agua','harina','sal','levadura','aceite','salsa de tomate','queso','salame'],precio:900},
     {id:4,nombre:'Provolone',ingredientes:['agua','harina','sal','levadura','aceite','salsa de tomate','queso','provolone'],precio:1000},
     {id:5,nombre:'Capresse',ingredientes:['agua','harina','sal','levadura','aceite','salsa de tomate','queso','tomates cherry','rucula'],precio:900},
     {id:6,nombre:'Palmitos',ingredientes:['agua','harina','sal','levadura','aceite','salsa de tomate','queso','palmitos','salsa golf'],precio:1100},
]



//  arrayPizzas.forEach(element => console.log(element.id));

// a)
console.log("A");
arrayPizzas.forEach(element => {
    if((element.id%2)!=0){
        // console.log(element);
        console.log(`La pizza de ${element.nombre} tiene el id ${element.id}`);
    }
});

// b)
console.log("B");
arrayPizzas.forEach(element => {
    if(element.precio<600){
        console.log(`La pizza de ${element.nombre} tiene un precio de $${element.precio}`);
    }
});

// c)
console.log("C");
arrayPizzas.forEach(element =>{
    console.log(`Esta pizza se llama ${element.nombre}`);
});

// d)
console.log("D");
arrayPizzas.forEach(element =>{
    console.log(`Esta tiene el id ${element.id} y tiene un precio de $${element.precio}`);
});

// e)
console.log("E");
arrayPizzas.forEach(element =>{
    console.log(`Esta pizza se llama ${element.nombre} y tiene un precio de $${element.precio}`);
});