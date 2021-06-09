<?php
$servername = "localhost";
$username = "root";
$password = "PERSONAL";
$database = "Programming";
// Create a connection 
$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die("Connection Error" . mysqli_connect_error());
}
?>
