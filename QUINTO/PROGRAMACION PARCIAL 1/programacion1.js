window.addEventListener('load', (event) => {
var boton = document.getElementById("boton");

boton.onclick = function(){
	var numero = parseInt(document.getElementById("num").value);
	console.log(numero);
	if(numero % 2 == 0){
	alert("es par");
}else{
	alert("es impar")
}

}

});
