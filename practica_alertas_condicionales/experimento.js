let pregunt_nombre = "¿Cual es su nombre?";
let nombre = prompt(pregunt_nombre);
console.log(nombre);

let pregunt_edad = "Cuantos años tenes?";
let edad = prompt(pregunt_edad);
console.log(edad);

let pregunt_depo = "¿Te gustan los deportes?";
let fanDeportes = confirm(pregunt_depo);
console.log(fanDeportes);

let alerta = alert("Muchas gracias " + nombre + " por responder nuestras preguntas");

let rta = "";
let usuario = {
    nombre: nombre,
    edad: edad,
    deportistaProfesional: function(x) {
        if (x == true) {
            return rta = ("Si, soy fan de los deportes");
        }
        else {
            return rta = ("No soy fan de los deportes");
        }
    }
}

console.log(usuario.deportistaProfesional(fanDeportes));