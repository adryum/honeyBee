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
<?php session_start(); ?>
    <h1>Helllow!</h1>
    <h2><?php echo $_SESSION['email']?></h2>
    <h2><?php echo $_SESSION['password']?></h2>
</body>
</html>
