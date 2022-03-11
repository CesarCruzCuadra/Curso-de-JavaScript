let numero = 0;


while ( nuemro < 1000){
    numero++;
  

}

document.write(numero );

// for break

for (let i = 0; i < 20; i++){

    if (i ==12){
        break;
    }

    document.write(i + "<br>");
}

// for continue

for (let i = 0; i < 20; i++){

    if (i ==12){
        continue;
    }

    document.write(i + "<br>");
}


let animales = ["gato","perro","serpiente"];

for (animal in animales){
   document.write(animales[animal] + "<br>");
}

document.write("<br>");


for (animal of animales){
    document.write(animal + "<br>")
}

//Funciones 

function saludar(){
    repuesta = prompt("¡Hola Cesar! ¿Como estas el dia de hoy?");
if (repuesta == "bien"){
    alert("Genial")
} else {
    alert("Oh que mal")
}

}
saludar()

function suma(num1,num2){
    let res = num1 + num2;
   return res  
}
suma(12,28)

suma(12,8)

// scope

function saludar (nombre){
    let frase = '¡Hola! ${nombre} Como estas?';
    document.write(frase)
}
saludar("Cesar")