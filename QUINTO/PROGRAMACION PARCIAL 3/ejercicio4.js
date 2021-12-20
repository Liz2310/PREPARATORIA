window.addEventListener('load', (event) => {
	var numeros = [];
	var cont = 0

	boton = document.getElementById("num");
	boton.onclick = function(){

	do{
		numero = parseInt(prompt("Ingresa el numero "+(cont+1)));
		numeros.push(numero);
		cont++;

	}while(cont<10);

	console.log(numeros);


	for(i=0;i<numeros.length;i++){

		if(numeros[i]%2==0){
			console.log(numeros[i]);
		}

	}

	}

});