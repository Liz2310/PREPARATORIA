window.addEventListener('load', (event) => {

var ciudades=["Tijuana","Rosarito","Tecate","Ensenada","Mexicali"];

boton = document.getElementById('agregar');
boton.onclick = function(){
	valorCiudad=document.getElementById("ciudad").value;
	console.log(valorCiudad);
	if(valorCiudad!=""){
		ciudades.push(valorCiudad);
		actualizaSelect(ciudades);
	}else{
		alert("Ingresa una ciudad valida");
	}
	console.log(ciudades);
}

	
function actualizaSelect(arrayCiudades){
	selectElement=document.getElementById("ciudades");
	selectElement.options.length=0;
	for(i=0;i<arrayCiudades.length;i++){

	var opcion=document.createElement("option");
	opcion.value=arrayCiudades[i];//va a mostrar el valor
	opcion.text=arrayCiudades[i];//va a mostrar el texto
	selectElement.appendChild(opcion);//se agrega una valor hijo al valor padrw
}

}

var arrayNombres=["jorge","ivan","esteban",15,25,34];
console.log(arrayNombres[1]);
arrayNombres.push("Olivia","Axel");//AGREGA UN ELEMENTO AL FINAL DEL ARREGLO
arrayNombres.push(1800);
console.log(arrayNombres);
arrayNombres.pop();//ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO
console.log(arrayNombres);

var indice = arrayNombres.indexOf("Olivia");//INDEX OF ES PARA ENCONTRAR LA POSICION DE UN ELEMENTO EN ESPECIFICO  
console.log(indice);
indice = arrayNombres.indexOf("1800");
console.log(indice);



});