window.addEventListener('load', (event) => {

var colores = ["azul","amarillo","rojo","verde","cafe","rosa"];

boton = document.getElementById("color");
boton.onclick = function(){
var color=prompt("Ingresa un color");
console.log(color);
console.log(colores);
indice=colores.indexOf(color);

if(indice==-1){
	alert("No existe ese color");	
}else{
	colores.splice(indice,1);//ELIMINA 1 ELEMENTO A PARTIR DE LA POSICION GUARDADA EN INDICE
	alert("El color " +color+ " se encuentra en la posicion " + (indice+1));
	console.log(colores);
}
}

});