let bienvenida = "Bienvenidos a mi sitio.";
let pregun_avanzar = confirm("¿Está seguro de querer avanzar?");

if (pregun_avanzar == true) {
    let salu = document.querySelector("h2.saludo").innerText += "Qué alegría que quieras continuar tu visita";
}
else {
    let salu = document.querySelector("h2.saludo").innerText = "Lamentamos que no quieras continuar tu visita";
}

let ingresar_nombre = "Ingrese su nombre: ";
let nombre = ingresar_nombre;

let cambio_h1 = document.querySelector("h1");
let saludin = cambio_h1.innerText(nombre);