let pedir_num1 = "Ingrese un numero: ";
let numero1 = prompt(pedir_num1);

let pedir_num2 = "Ingrese otro numero: ";
let numero2 = prompt(pedir_num2);

function multiplicar(a, b) {
    return "El resultado de multiplicar " + a + " y " + b + " es: " + (a * b);
}

console.log(multiplicar(numero1, numero2));

