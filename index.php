<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <h1>Pieraksties!</h1>
        <p>e-pasts</p> <input type='email' placeholder='...' name='email'>
        <p>password</p> <input type='password' placeholder='...' name='password'>
        <button type='submit' onclick=''><a href="secondPage.php">Submit</a></button>
    </form>
<?php
session_start();
if (isset($_POST["email"]) && isset($_POST['password'])) {
    $_SESSION['email'] = $_POST["email"];
    $_SESSION['password'] = $_POST['password'];
}
?>
</body>
</html>
