//Ejercicio 1//

let misDatos = {
    nombre: "Sofia",
    apellido: "Kuo",
    dni: "12345678",
    comidas_fav: ["pasta", "pizza", "sushi"], //use un array//
}

console.log(misDatos.nombre);
console.log(misDatos.apellido);
console.log(misDatos.dni);
console.log(misDatos.comidas_fav);

//Ejercicio 2//
//pongo el 2 para diferenciar el objeto literal con el anterior //

let misDatos2 = {
    nombre: "Sofia",
    apellido: "Kuo",
    edad: 19,
    comidas_fav: ["pasta", "pizza", "sushi"],
    saludar: function() {
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primera comida favorita es " + this.comidas_fav[0] + "."
    }
}

console.log(misDatos2.saludar());

//Ejercicio 3//

let auto = {
    marca: "TOYOTA",
    modelo: "COROLLA",
    anio: 2022,
    color: "NEGRO",
    posicion: 0,
    avanzar: function(n) {
        if (n > 0) {
            this.posicion += n;
            return this.posicion;
        }
    },
    retroceder: function(n) {
        if (n > 0) {
            this.posicion -= n;
            return this.posicion ;
        }
    }
}

auto.avanzar(3);
auto.retroceder(1);
auto.avanzar(5);
console.log(auto.posicion); //para ver la posicion final del auto//

//Ejercicio 4//

let nuevoAuto = {
    marca: "TOYOTA",
    modelo: "COROLLA",
    anio: 2022,
    color: "NEGRO",
    posicion: 0,
    moverse: function(n) {
        this.posicion += n;
        return this.posicion;
    },
}

nuevoAuto.moverse(5);
nuevoAuto.moverse(-9);
console.log(nuevoAuto.posicion)

//Ejercicio 5//

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(Fn) {
        this.energia -= 10;
        return "Poder elegido de " + this.nombre + ": " + this.poderes[Fn] + ". Energía restante: " + this.energia;
    }
}

let Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(Fn) {
        this.energia -= 10;
        return "Poder elegido de " + this.nombre + ": " + this.poderes[Fn] + ". Energía restante: " + this.energia;
    }
}

ironMan.getPoder();
Hulk.getPoder();
ironMan.getPoder();
ironMan.getPoder();
Hulk.getPoder();
ironMan.getPoder();

//se elige un numero entre el 0 y el 2 porque el array de poderes en ambos casos tienen tres componentes, donde se empieza a contar desde 0//

console.log(ironMan.getPoder(1));
console.log(Hulk.getPoder(0));
