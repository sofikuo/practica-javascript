let bienvenida = "Bienvenidos a mi sitio.";
alert(bienvenida);

let pregun_avanzar = confirm("¿Está seguro de querer avanzar?");
let salu = document.querySelector("h2.saludo");


if (salu == true) {
    let respuesta = salu.innerText("Qué alegría que quieras continuar tu visita")
    return
    
}
else {
    let salu = document.querySelector("h2.saludo").innerText = "Lamentamos que no quieras continuar tu visita"
    return
    
}

let ingresar_nombre = "Ingrese su nombre: ";
let nombre = ingresar_nombre;

let cambio_h1 = document.querySelector("h1");
let saludin = cambio_h1.innerText(nombre);