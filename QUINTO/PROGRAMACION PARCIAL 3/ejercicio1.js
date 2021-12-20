window.addEventListener('load', (event) => {

var arrayNombres=["jorge","ivan","esteban",15,25,34];
console.log(arrayNombres[1]);
arrayNombres.push("Olivia","Axel");//AGREGA UN ELEMENTO AL FINAL DEL ARREGLO
console.log(arrayNombres);
arrayNombres.pop();//ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO
console.log(arrayNombres);

var indice = arrayNombres.indexOf("Olivia");//INDEX OF ES PARA ENCONTRAR LA POSICION DE UN ELEMENTO EN ESPECIFICO  
console.log(indice);
indice = arrayNombres.indexOf("1800");
console.log(indice);

});