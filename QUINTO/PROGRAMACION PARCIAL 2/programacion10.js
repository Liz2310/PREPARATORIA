window.addEventListener('load', (event) => {
var cont=0;
var promedio=0;
var suma=0;

var boton= document.getElementById("boton");
boton.onclick=function(){
	
var num=parseInt(document.getElementById("num").value);

	do{
		numero= parseInt(prompt("Ingresa el numero"+(cont+1)));
if(numero==0){
	break;
}
	cont=cont+1;

	}while(cont<num);

suma=suma+numero

promedio=suma/num


document.getElementById("promedio").innerHTML = "El promedio es:"+promedio; 

}
});
