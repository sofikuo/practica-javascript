// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    titulo.addEventListener("mouseover", function() {
        let nombre = prompt("¿CÓMO TE LLAMÁS?")
        
    })
 
    saludo.addEventListener("submit", function() {
        if (nombre == false || nombre === " ") {
            let saludo = document.querySelector("#saludo").innerText = "BIENVENID@ USUARIO";

        }
        else {
            document.querySelector.innerText = "BIENVENIDO " + nombre;
        }
    })

   // let span = ;
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    //let boton = ;
 
 
 }) 