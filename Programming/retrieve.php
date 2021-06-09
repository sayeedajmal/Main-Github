<?php
include_once 'database/connection.php';
$result = mysqli_query($conn, "SELECT * FROM signup");
?>
<?php
session_start();
if (isset($_POST['submit'])) {
    $row  = mysqli_fetch_array($result);
    if (is_array($row)) {
        $email = $row['email'];
        $password = $row['password'];
        /* tolowercase  */
        $email_tolower = $_POST['email'];
        $temp_email = strtolower($email);
        $temp_pass = $_POST['password'];
        if ($temp_email == $email && $temp_pass == $password) {
            header("Location: Dashboard.html");
        } else {
            header("Location:index.php");
            echo "Invalid";
        }
    }
}
?>