<?php
$title = "UserDefine Function";
include 'include/header.php';
?>

<body style="text-align: center;">
    <h3>User Defined Function</h3>
    <?php
    function username($user)
    {
        print "My name is : " . $user . "<br>";
    }
    username("sayeed");
    username("ajmal");
    username("S.S.");
    ?>
</body>
<?php
require 'include/footer.php';
?>