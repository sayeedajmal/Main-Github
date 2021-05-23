<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <title>Php Learning</title>
</head>

<body>
    <h1 style="text-align: center;">PHP LEARNING</h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
    </svg>
    <br>
    <?php
    echo ("I am Learning Php");
    echo '<br>';
    echo '<h4>Writing here Html Contents will call it. hehehehe and adding with css.<br></h4>';
    echo '<hr><p>This is A paraGraph</p>';
    $username = 'Sayeed Ahmed';
    $college = 'K.C.T. Polytechnic';
    $Age = 19.5;
    echo ' <br> <h3> Your name is :' . $username . '</h3><hr>';
    echo ' <br> <h3> I am Studying in :' . $college . '</h3><hr>';
    echo '<h4>My Age is :' . $Age . ' </h4>';
    /* Here we write the print statement with calling value by reference and remember Double Quotation */
    print "<br><h4>I am writing with print statemet. my age is $Age";
    echo '<br><br><hr>';
    ?>
    <dev>
        <ul>
            <li><a href="true.php"> True or False</a></li>
            <li><a href="ifelse.php"> If & Else</a></li>
            <li><a href="whiledowhile.php">While Do While</a></li>
            <li><a href="for.php">For </a> </li>
        </ul>
    </dev>
</body>

</html>