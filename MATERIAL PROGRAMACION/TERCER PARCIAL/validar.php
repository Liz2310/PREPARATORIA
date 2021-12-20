<?
include("bd.php");
session_start();

if(isset($_POST["email"])){

	$sql="select * from Alumno";
	$resultado =  mysqli_query($conn,$sql);

	if($resultado -> num_rows > 0){
		//$fila= array("nombreAlumno" => "Jorge Ivan", "apellidosAlumno"...)
		while($fila = $resultado -> fetch_assoc()){
			echo "nombre: ".$fila["nombreAlumno"]. " CURP:".$fila["CURP"]."<br>";
		}
	}else{
		echo "No hay resultados";
	}


}	





?>