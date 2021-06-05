<?php
$title = "File Operation";
include 'include/header.php';
?>

<body class="text-center">
    <?php
    echo "<h1>File Operation</h1>";
    $file = fopen("File.txt", 'w') or die('file not Created');
    $text = "Hello world\n";
    fwrite($file, $text)
    ?>
</body>
<?php
require 'include/footer.php';
?>