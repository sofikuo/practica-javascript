// CON CONSOLE LOG ME FIJO LOS RESULTADOS //
console.log('Practica 1: funciones');

//Ejercicio 1// 

function rectangulo(altura, ancho) {
    return ancho * altura;
}

console.log(rectangulo(5,5));

//Ejercicio 2//

function triangulo(base, altura) {
    return (base * altura)/2;
}

console.log(triangulo(2,3));

//Ejercicio 3//

function largoDelArray(array) {
    return array.length;
}

console.log(largoDelArray([1, 2, 4, 31, 43]));

//Ejercicio 4//

function cantidadDeLetras(palabra) {
    return palabra.length;
}

console.log(cantidadDeLetras('holaaaa'));

//Ejercicio 5//

function dolarHoy(peso_arg) {
    return peso_arg / 1000;
}

console.log(dolarHoy(50000));

//Ejercicio 6//

function mitad(num) {
    return num / 2;
}

console.log(mitad(10));

//Ejercicio 8// 

function diaSegunNumero(array_dia, num) {
    return array_dia[num - 1];
}

console.log(diaSegunNumero(['LUNES',"MARTES",'MIERCOLES','JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'], 4));

//Ejercicio de ejecutando funciones//

function siguiente(numero) {
    return numero + 1;
}
  
function doble(numero) {
    return 2 * numero;
}
  
function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
}
  
console.log(siguiente(2));
console.log(doble(2));
console.log(siguienteDelDoble(2));

function anterior(numero) {
    return numero - 1;
}

function triple(numero) {
    return numero * 3;
}

function anteriorDelTriple(numero) {
    return triple(numero) - anterior(numero);
}

console.log(anterior(1));
console.log(triple(1));
console.log(anteriorDelTriple(2));
