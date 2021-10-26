<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database || with Mysql</title>
    <link rel="stylesheet" type="text/css" href="style.css">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <h1 style="text-align: center;">Database || LOGIN</h1>
    <div id="container">
        <form action="sucess.php" method="POST">
            <text>UserName</text>
            <input type="text" name="username" required>
            <br>
            <text>BirthDate</text>
            <input type="date" name="date" required>
            <br>
            <text>Profession</text>
            <select id="Profession" required>
                <option value="software">Civil Engineer</option>
                <option value="software">Mechanical Engineer</option>
                <option value="software">Software Engineer</option>
                <option>Select Your Profession</option>
            </select>
            <br>
            <text>Password</text>
            <input type="password" name="password" required>
            <br>
            <button>Submit</button>
        </form>
    </div>

</body>

</html>