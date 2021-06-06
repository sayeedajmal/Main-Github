<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Php</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>

<body class="text-center">
    <?php
    if (isset($_POST['firstname'])) {
        $firstname = $_POST["firstname"];
        echo $firstname . "<br>";
    }
    if (isset($_POST['lastname'])) {
        $lastname = $_POST["lastname"];
        echo $lastname . "<br>";
    }
    if (isset($_POST['dob'])) {
        $dob = $_POST["dob"];
        echo $dob . "<br>";
    }
    if (isset($_POST['input'])) {
        $input = $_POST["input"];
        echo $input . "<br>";
    }
    if (isset($_POST['email'])) {
        $email = $_POST["email"];
        echo $email . "<br>";
    }
    if (isset($_POST['password'])) {
        $password = $_POST["password"];
        echo $password . "<br>";
    }
    echo  "<h1>File Operation</h1>";

    /* fopen for creating new file or open it with permission like w, w+, r, R+ A, A+ */
    if ($file = fopen("signup.txt", "w") or die('File not created')) {
        echo "File Created";
    } else {
        echo "Dont't Do that's Glitch";
    }
    $uname = $firstname . $dob . $input . $email . $password;
    $lastname = $lastname;
    fwrite($file, $uname);
    fclose($file);
    ?>
</body>

</html>