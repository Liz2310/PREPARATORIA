<?
include("bd.php");
session_start();

if(isset($_POST["CURP"])){
$nombres=$_POST["nombres"];
$apellidos=$_POST["apellidos"];
$CURP=strtoupper($_POST["CURP"]);

$sql = "INSERT INTO Alumno(matricula,nombreAlumno,apellidosAlumno,CURP) VALUES (NULL,'".$nombres."','".$apellidos."','".$CURP."')";

if(mysqli_query($conn,$sql)){
	echo "Guardado exitosamente";
	header('Location:index.php?data=1');
}else{
	header('Location:index.php?data=0');
}

}



?>