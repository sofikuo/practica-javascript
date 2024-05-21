console.log('Practica 3: bucles');

//Ejercicio 1//
//a//
for (let i = 0; i <= 5; i++) {
    console.log("Practicando con el bucle for " + i);
}

//b//
for (let i = 0; i <= 10; i++) {
    console.log(`La variable i tiene el valor ${i} `);
}

//c//
for (let i = 0; i < 10; i++) {
    console.log(2 * i);
}

// para que varie de 2 en 2, en el primer renglon, pondria 
for (let i = 0; i < 10; i+=2) {

    console.log(2 * i);
}

for (let i = 0; i <= 50; i++) {
    console.log(5 * i);
}
// para que varie de 5 en 5, en el primer renglon, pondria
for (let i = 5; i <= 250; i += 5) {
    console.log(i);
}

//d//
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//Ejercicio 2//
base = 2;
resultados = [];

for (let i = 1; i <= 10; i ++) {
    resultados.push(i * base);
}

console.log(resultados);

//Ejercicio 3//
ganancias = [1, 2, 3, 4, 5, 6, 7, -8, 9, -10];
suma = 0;

for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i];
}

console.log(suma);

//Ejercicio 4//
//a//
let healinglsDifficult = [
    'Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously'];

for (let i = 0; i <healinglsDifficult.length; i++) {
    console.log(healinglsDifficult[i]);
}

//b//
n = 0
for (let i = 0; i < healinglsDifficult.length; i++) {
    n += 1
    console.log(n + " " + healinglsDifficult[i]);
}

//Ejercicio 5//
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]
for (let i = 0; i < got.length; i++) {
    console.log("Hola " + got[i].nombre + got[i].apellido + "criatura viajera!");
    console.log("Soy "+ got[i].nombre + got[i].apellido + " de la ciudad " + got[i].ciudad);
}