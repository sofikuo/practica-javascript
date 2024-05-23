let bienvenida = "Bienvenidos a mi sitio.";
alert(bienvenida);
let pregun_avanzar = confirm("¿Está seguro de querer avanzar?");

if (pregun_avanzar == true) {
    let salu = document.querySelector("h2.saludo").innerText += "Qué alegría que quieras continuar tu visita";
    return salu;
    
}
else {
    let salu = document.querySelector("h2.saludo").innerText = "Lamentamos que no quieras continuar tu visita";
    return salu;
    
}

let ingresar_nombre = "Ingrese su nombre: ";
let nombre = ingresar_nombre;

let cambio_h1 = document.querySelector("h1");
let saludin = cambio_h1.innerText(nombre);