window.addEventListener('load', (event) => {
	var boton = document.getElementById("boton");
boton.onclick = function(){
	var numero = document.getElementById("num").value;
	alert(numero);
}
});