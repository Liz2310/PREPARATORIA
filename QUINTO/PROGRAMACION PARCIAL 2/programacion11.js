window.addEventListener('load', (event) => {

var tres=0
var cinco=0

var boton= document.getElementById("boton");
boton.onclick=function(){
	
i=15

for(i=15;i<=45;i++){
if(i%3==0){
alert("Multiplo de tres:"+i);
}
if(i%5==0){
	alert("Multiplo de tres:"+i);
}

}

}

});