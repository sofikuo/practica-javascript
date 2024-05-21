let pregun_nacionalidad = "¿cual es tu nacionalidad?";
let nacionalidad = prompt(pregun_nacionalidad);

let pregun_profesion = "¿cual es su profesion?";
let profesion = prompt(pregun_profesion);

let pregun_km = "¿cuantos km camina?";
let km = prompt(pregun_km);

function filosofoHipster(nacio, prof, cant) {
    let requisitos = 0;
    if (nacio == "Argentino" || nacio == "argentino") {
        requisitos += 1;
    }
    if (prof == "Músico" || prof == "musico" || prof == "Musico") {
        requisitos += 1;
    }
    if (cant >= 2) {
        requisitos += 1;
    }
    if (requisitos == 3) {
        return "Soy un filosofo hipster"
    }
    else {
        return "Aún no soy filósofo hipster"
    }
}
console.log(filosofoHipster(nacionalidad, profesion, km));
