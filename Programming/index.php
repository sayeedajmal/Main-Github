<!DOCTYPE html>
<html lang="en" class="root">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Coding Website</title>
  <link rel="stylesheet" href="css/index.css" type="text/css" />
</head>

<body>
  <form method="POST" action="retrieve.php">
    <h1 class="login">Login</h1>
    <div class="container">
      <img src="images/Test.jpg" class="avatar" />
      <br />
      <!-- USERNAME -->
      <br />
      <label class="label">Email ID</label>
      <input class="input" type="email" placeholder="Enter Your Email" name="email" required />
      <br />
      <br />
      <!-- PASSWORD -->
      <label class="label">Password</label>
      <input class="input" type="password" placeholder="Enter Your Password" name="password" required />
      <!-- Submit Button -->
      <input class="submit" type="submit" name="submit" value="Login" />
      <a href="#" class="forgot">Forgot password?</a>
      <br />
      <a class="signup" href="signup.php" style="margin-top: 10px;">Signup</a>
    </div>
  </form>
</body>

</html>