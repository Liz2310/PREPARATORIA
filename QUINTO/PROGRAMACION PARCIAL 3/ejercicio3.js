window.addEventListener('load', (event) => {

var colores = ["azul","amarillo","rojo","verde","cafe","rosa"];

boton = document.getElementById("color");
boton.onclick = function(){

	var color=prompt("Ingresa un color");
	console.log(color);
	indice=colores.indexOf(color);

	if(indice==-1){
		alert("No existe ese color");	
	}else{
		alert("El color " +color+ " se encuentra en la posicion " + (indice+1));
		}
}

	});