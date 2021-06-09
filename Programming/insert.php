<?php
include 'database/connection.php';
session_start();
if (isset($_POST['submit'])) {
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $dob = $_POST['dob'];
    $expertise = $_POST['expertise'];
    $tempemail = $_POST['email'];
    $email = strtolower($tempemail);
    $password = $_POST['password'];
    $sql = "INSERT INTO signup VALUES ('$first_name','$last_name','$dob','$expertise','$email','$password')";
    if (mysqli_query($conn, $sql)) {
        //header("Location: Programming.Dashboard.php?status=success");
        header('Location: Dashboard.html');
    } else {
        echo "Error: " . $mysqli_error($conn);
    }
    mysqli_close($conn);
}
