<?php
$title = "For Loop";
include 'include/header.php';
?>

<body style="text-align: center;">
    <h3 style="text-align: center;">Here For Loop</h3>
    <?php
    for ($i = 1; $i <= 10; $i++) {
        print "Count :" . $i . "<br>";
    }
    ?>
    
</body>

<?php
require 'include/footer.php'
?>