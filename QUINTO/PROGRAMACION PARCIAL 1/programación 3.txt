window.addEventListener('load', (event) => {
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");

b1.onclick = function(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	alert(parseInt (num1) + parseInt(num2));
}

b2.onclick = function(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	alert(parseInt (num1) - parseInt(num2));	
}

b3.onclick = function(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	alert(parseInt (num1) * parseInt(num2));	
}

b4.onclick = function(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	alert(parseInt (num1) / parseInt(num2));	
}

});
