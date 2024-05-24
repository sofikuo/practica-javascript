document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenidos a mi sitio.");
 
    let continuar = confirm("¿Está seguro de querer avanzar?");
    let saludo = document.querySelector("h2.saludo");
    let bienvenida = document.querySelector("h1");
 
    if (!continuar) {
        saludo.textContent = "Lamentamos que no quieras continuar tu visita";
        return;
    }

    let nombre = prompt("Por favor, ingrese su nombre:");
    if (nombre) {
        bienvenida.textContent = `Bienvenido ${nombre}`;
    } else {
        bienvenida.textContent = "Bienvenido Invitado";
    }
 
    let edad = prompt("¿Cuántos años tenés?");
    if (parseInt(edad) >= 18) {
        let programacion = confirm("¿Te gusta la programación?");
        let backgroundImg = document.querySelector('.background-img');
 
        if (programacion) {
            backgroundImg.innerHTML = '<img src="img/programmer.jpeg" alt="Programador">';
        } else {
            backgroundImg.innerHTML = '<img src="img/gatito.jpeg" alt="Gatito">';
        }
    } else {
        document.querySelector('.container-general').style.display = 'none';
        document.getElementById('accesoDenegado').style.display = 'block';
        return; 
    }

    let avatarUrl = prompt("Por favor, ingresa la URL de una imagen para tu avatar:");
    if (avatarUrl) {
        let avatar = document.querySelector('.avatar');
        avatar.src = avatarUrl;
    } else {
        alert("No se ingresó ninguna URL. La imagen del avatar no se cambiará.");
    }

    let pelicula = {
        nombre: prompt("Ingresa el nombre de tu película favorita:"),
        director: prompt("Ingresa el nombre del director de la película:"),
        duracion: parseInt(prompt("Ingresa la duración de la película en minutos:")),
        actor: prompt("Ingresa el nombre del actor principal de la película:")
    };

    if (pelicula.nombre && pelicula.director && pelicula.duracion && pelicula.actor) {
        document.getElementById("nombre").textContent = `Nombre: ${pelicula.nombre}`;
        document.getElementById("director").textContent = `Director: ${pelicula.director}`;
        document.getElementById("duracion").textContent = `Duración: ${pelicula.duracion} minutos`;
        document.getElementById("actor").textContent = `Actor Principal: ${pelicula.actor}`;
        document.getElementById("pelicula").style.display = "block";
    } else {
        alert("No se ingresaron todos los datos de la película. No se mostrarán los datos.");
    }
});
