window.addEventListener('load', (event) => {
var b1 = document.getElementById("b1");

b1.onclick = function(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
if (num1 > num2){
	alert("El numero mayor es:" + num1);
}if(num2 > num1){
	alert("El numero mayor es:" + num2);
}else{
	alert("Los numeros son iguales")
}
}
});