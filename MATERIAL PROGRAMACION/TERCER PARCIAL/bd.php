<?
$servername = "localhost";
$username = "santillana";
$password = "12345";
$dbname = "escuela";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>