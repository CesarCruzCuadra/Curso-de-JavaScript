
let dineroCesar = prompt("Cuanto dinero tienes Cesar?");
//let dineroMario = prompt("Cuanto dinero tienes Mario?");
//let dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCesar  =parseFloat(dineroCesar);
 
if (dineroCesar >= 1 && dineroCesar < 3){
    alert("Cesar: Comprate el helado de mani");
    alert("Cesar: Su vuelto es " + (dineroCesar - 3));
}
else if(dineroCesar >= 3 && dineroCesar < 6){
    alert("Cesar: Comprate el helado de vainia ");
    alert("Cesar: Su vuelto es " + (dineroCesar - 6));
}
else if(dineroCesar >= 6 && dineroCesar < 8){
    alert("Cesar: Comprate el helado de chocolate ");
    alert("Cesar: Su vuelto es " + (dineroCesar - 8));
}
else if(dineroCesar >= 8 && dineroCesar < 10){
    alert("Cesar: Comprate el helado de menta ");
    alert("Cesar: Su vuelto es " + (dineroCesar - 10));
}
else if(dineroCesar >= 10 && dineroCesar < 12){
    alert("Cesar: Comprate el helado de napolitano ");
    alert("Cesar: Su vuelto es " + (dineroCesar - 12));
}
else if (dineroCesar >= 12){
alert("Cesar: Comprate un chocochoco ");
alert("Cesar: Su vuelto es: " + (dineroCesar - 12));

} else{
   alert("Lo sentimos no cuentas con suficiente dinero Cesar ");
}



if (dineroMario >= 0.6 && dineroMario < 1){
    alert("Mario: Comprate el helado de mani ")
    alert("Mario: Su vuelto es: " + (dineroMario - 0.6));
}
else if(dineroMario >= 1 && dineroMario < 1.6){
    alert("Mario: Comprate el helado de vainia ")
    alert("Mario: Su vuelto es " + (dineroMario - 1));
}
else if(dineroMario >= 1.6 && dineroMario < 1.7){
    alert("Mario: Comprate el helado de chocolate ")
    alert("Mario: Su vuelto es: " + (dineroMario - 1.7));
}
else if(dineroMario >= 1.7 && dineroMario < 1.8){
    alert("Mario: Comprate el helado de menta ")
    alert("Mario: Su vuelto es: " + (dineroMario - 1.8));
}
else if(dineroMario >= 1.8 && dineroMario < 2.9){
    alert("Mario: Comprate el helado de napolitano ")
    alert("Mario: Su vuelto es: " + (dineroMario - 2.9));
}
else if (dineroMario >= 2.9){
alert("Mario: Comprate un chocochoco ");
alert("Mario: Su vuelto es: " + (dineroMario - 2.9));
} else{
   alert("Lo sentimos no cuentas con suficiente dinero Mario");
}



if (dineroPedro >= 0.6 && dineroPedro < 1){
  alert("Pedro: Comprate el helado de mani Mario ")
  alert("Pedro: Su vuelto es: " + (dineroPedro - 0.6));
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro: Comprate el helado de vainia ")
    alert("Pedro: Su vuelto es: " + (dineroPedro - 1));
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro: Comprate el helado de chocolate ")
    alert("Pedro: Su vuelto es: " + (dineroPedro - 1.6));
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro: Comprate el helado de menta ")
    alert("Pedro: Su vuelto es: " + (dineroPedro - 1.7));
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro: Comprate el helado de napolitano ")
    alert("Pedro: Su vuelto es: " + (dineroPedro - 2.9));
}
else if (dineroPedro >= 2.9){
alert("Pedro: Comprate un chocochoco  ");
alert("Pedro: Su vuelto es: " + (dineroPedro - 2.9));
} else{
   alert("Lo sentimos no cuentas con suficiente dinero Pedro");
}

document.write("");