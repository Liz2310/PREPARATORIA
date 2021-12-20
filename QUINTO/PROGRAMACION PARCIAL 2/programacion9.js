window.addEventListener('load', (event) => {
  
var mayores=0;
var menores=0;
var rango=0;
var cont=0;

var boton= document.getElementById("boton");

boton.onclick=function(){

var num=parseInt(document.getElementById("num").value);

do{

numero= parseInt(prompt("Ingresa el numero"+(cont+1)));

if(numero>60){
mayores++;
}

if(numero<18){
menores++;
}

if(numero>24 && numero<36){
rango++;
}
cont=cont+1;

}while(cont<num);

document.getElementById("mayores").innerHTML = "La cantidad de numeros mayores a 60 es:"+mayores; 
document.getElementById("menores").innerHTML = "La cantidad de numeros menores a 18 es:"+menores;
document.getElementById("rango").innerHTML = "La cantidad de numeros entre 25 y 35 son:"+rango;

}
});
