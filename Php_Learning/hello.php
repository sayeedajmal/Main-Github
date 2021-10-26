<?php
$title = "Hello";
include 'include/header.php';
?>

<body style="text-align: center; background-color: lightgray;">
    <h3 style="text-align: center;">Hello World</h3>
    <p style="text-align: center;">Here we Are Testing All things About PHP and HTML</p>
    <h4>Date formation</h4>
    <?php
    echo "Today is " . date("Y/m/d") . "<br>";
    echo "Today is " . date("Y.m.d") . "<br>";
    echo "Today is " . date("Y-m-d") . "<br>";
    echo "Today is " . date("l");
    echo "<br><br><h4>Time Formation</h4>";
    echo "The time is " . date("h:i:sa");
    ?>
    
    <?php
    require 'include/footer.php';
    ?>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
</body>