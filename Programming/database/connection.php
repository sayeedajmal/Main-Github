<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body class="text-center">
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "PERSONAL";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $name = $_POST['username'];
    $pass = $_POST['password'];
    echo '$name';
    echo '$pass';
    echo "Connected successfully";
    ?>
</body>

</html>