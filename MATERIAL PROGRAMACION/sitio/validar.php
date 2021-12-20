<?
session_start();

if(isset($_POST["email"])){
	
$correo= $_POST["email"];
$pswd= md5($_POST["pswd"]);
//contraseña= 6cbf63ffac0df04d35ad89ac481cf265

if($correo=="informatica@ibsm.edu.mx" && $pswd=="6cbf63ffac0df04d35ad89ac481cf265"){
	//variable de sesion:
	 $_SESSION["email"] = $correo;
	
	header('Location:index.php');

	/*

	header('Location:urlDestino');

	pueden ser
	urlDestino: archivo.php
	urlDestino: carpeta/archivo.php
	urlDestino: www.santillanadelmar.edu.mx/index.php


	*/

}


}


?>