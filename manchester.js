
dineroAlejandro = prompt("Cuanto dinero tienes Alejandro?");
 
if (dineroAlejandro >= 0.6 && dineroAlejandro < 1){
    alert("Comprate el helado de mani")
}
else if(dineroAlejandro >= 1 && dineroAlejandro < 1.6){
    alert("Comprate el helado de vainia ")
}
else if(dineroAlejandro >= 1.6 && dineroAlejandro < 1.7){
    alert("Comprate el helado de chocolate ")
}
else if(dineroAlejandro >= 1.7 && dineroAlejandro < 1.8){
    alert("Comprate el helado de menta ")
}
else if(dineroAlejandro >= 1.8 && dineroAlejandro < 2.9){
    alert("Comprate el helado de napolitano ")
}
else if (dineroAlejandro >= 2.9){
alert("Comprate un chocochoco");
} else{
   alert("Lo sentimos no cuentas con suficiente dinero");
}