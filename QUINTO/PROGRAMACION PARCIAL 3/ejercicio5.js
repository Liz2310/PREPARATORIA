
window.addEventListener('load', (event) => {

var array = [];
var cont = 0

boton = document.getElementById('num')
boton.onclick= function(){

	var total=parseInt(prompt("Ingrese el total de numeros aleatorios"));
	var rango1=parseInt(prompt("Ingrese el numero inicial del rango"));
	var rango2=parseInt(prompt("Ingrese el numero final del rango"));

	console.log(total);

	do{
		
		//var total=parseInt(prompt("Ingrese el total de numeros aleatorios"));
		var randomt = random(rango1,rango2);
		array.push(randomt);
		console.log(array);
		console.log(total);



	}while (total!=0);
}


function random (rango1,rango2) {

	numero = Math.floor(Math.random() * (rango2-rango1) + (rango1));
	console.log(numero);
	return numero; 
}


//lleva contador 

});