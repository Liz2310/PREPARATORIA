window.addEventListener('load', (event) => {
var b1 = document.getElementById("b1");

b1.onclick = function(){
var edad = document.getElementById("edad").value;
if (edad > 30){
	console.log("Tu edad es mayor a 30");
}else{
	console.log("Tu edad es menor a 30");
}
}

});