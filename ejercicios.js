// ejercicio #1

let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Podes pasar gratis porque sos la primer persona despues de las 2 Am");
            free = true;
        } else {
            alert(`son las ${time}:00Hs Puede pasar, pero tenes que pagar la entrada`);
        }

    } else {
        alert("Lo sentimos eres menor de edad no puedes entrar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3); 

// Ejercicio #2

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];
for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del Alumno " + (i + 1)), 0]

}
const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
alumnosTotales[i][1]++;
    }
}

for(i = 0; i <30; i++) {
   for (alumno in alumnosTotales) {
tomarAsistencia(alumnosTotales[alumno])
   }
}