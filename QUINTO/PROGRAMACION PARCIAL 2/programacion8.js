window.addEventListener('load', (event) => {

var media=0;
var suma=0;
var menor=0;
var mayor=0;

var boton= document.getElementById("boton");

boton.onclick= function(){

var num= parseInt(document.getElementById("num")).value;

for(i=1;i<=num;i++){
var numero = parseInt(prompt("Ingresa un nuevo numero"));

if(i==1){
menor=numero;
mayor=menor;
}

if(numero>mayor){
mayor=numero;
}

if(numero < menor){
menor=numero;
}

suma = suma+numero;

}

media=suma/num;

document.getElementById("suma").innerHTML = "La media de los numeros ingresados es: "+ media;

document.getElementById("mayor").innerHTML = "El mayor de los numeros ingresados es: "+ mayor;

document.getElementById("menor").innerHTML = "El menor de los numeros ingresados es: "+ menor;
}

  });
