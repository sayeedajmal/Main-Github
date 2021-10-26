<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object of Php</title>
</head>

<body>
    <p>
        <?php
        /* Class  */
        class Person
        {
            /* Create Properties of the Class */
            public $firstname;
            public $lastname;
            public $age;

            /* Assigning the Value of Variables/Peoperties */
            public function construct($firstname, $lastname, $age)
            {
                $this->firstname = $firstname;
                $this->lastname = $lastname;
                $this->age = $age;
            }
            /* Create A method (Function tied to the Object) */
            public function hello()
            {
                return "I Am " . $this->firstname . " " . $this->lastname . ", This is My age " . $this->age . " ";
            }

            /* Creating An Object */
        }
        $person1 = new Person('Sayeed ', 'Ajmal', 19);
        $person2 = new Person('Shoaib', 'Akhtar', 16);

        echo $person1->hello();
        echo "<br>";
        echo $person2->hello();

        ?>
    </p>
</body>

</html>