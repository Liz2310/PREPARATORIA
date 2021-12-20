window.addEventListener('load', (event) => {
	i=100
	while(i>10){
		console.log(i);
		i=i-10;
	}

var boton = document.getElementById("boton");
boton.onclick=function(){
	var i=0;
	var msg="";

	while(true){
		i++;
		msg=msg+"\t"+i+"\n";
		if(i==9){
			break;
		}
	}

	alert("Ciclo while: \n"+msg);

}
});