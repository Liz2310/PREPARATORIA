window.addEventListener('load', (event) => {

//EJEMPLO DE UNA FUNCION

boton = document.getElementById("");
	boton.onclick = function(){

console.log(agregar(3,5));
console.log(agregar(9,27));

}

function agregar(x,y){//x y y son los parametros de la funcion

return x+y;//regresa el valor de la suma de x+y cuando se le manda a llamar alla arriba

}




});