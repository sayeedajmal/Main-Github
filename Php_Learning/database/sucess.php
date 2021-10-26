<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUCESSFULL</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <h1 style="text-align: center; font-size: 2rem; color:blue; ">SUCESSFULLY LOGIN</h1>
    <?php
    $USERNAME = $_POST["username"];
    $DATE = $_POST["date"];
    $PROFESSION = $_POST["Profession"];
    $PASSWORD = $_POST["password"];
    ?>
    <div id="container">
        <?php
        print("<h4>USERNAME IS:  $USERNAME</h4>");
        print("<h4>DATE OF BIRTH IS: $DATE</h4>");
        print("<h4>THE PROFESSION IS: $PROFESSION</h4>");
        print("<h4>PASSWORD IS: $PASSWORD</h4>");
        ?>
    </div>

</body>

</html>