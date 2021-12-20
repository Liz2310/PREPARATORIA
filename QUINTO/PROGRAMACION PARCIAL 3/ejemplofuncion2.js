window.addEventListener('load', (event) => {

//EJEMPLO DE UNA FUNCION

boton = document.getElementById("");
	boton.onclick = function(){

nombre="Jorge";
nombre=cambiarNombre(nombre);//aqui sobreescribimos la variable de nombre
console.log(nombre);

}

function cambiaNombre(nombre){
	nombre="Ivan";
	return nombre;//aqui es para mandar Ivan a reemplazar Jorge
}



});