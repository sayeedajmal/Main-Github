<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>

<body>
    <?php
    if (isset($_POST['username'])) {
        $username = $_POST["username"];
        echo "$username";
        echo '<br>';
    }
    if (isset($_POST['password'])) {
        $password = $_POST["password"];
        echo "$password";
    }
    ?>
    <h1>File Operation</h1>
    <?php
    /* fopen for creating new file or open it with permission like w, w+, r, R+ A, A+ */
    if ($file = fopen("index.txt", "w") or die('File not created')) {
        echo "File Created";
    } else {
        echo "Dont't Do that's Glitch";
    }
    $uname = $username . $password;
    fwrite($file, $uname);
    fclose($file);
    ?>
</body>

</html>