<?php
$user = htmlspecialchars($_GET['username']);
$pw = htmlspecialchars($_GET['pw']);

$server = "mysql.cs.iastate.edu";
$databasename = "db319t05";
$username = "dbu319t05";
$password = "*u7Egusp";
$port = "3306";

$conn = mysqli_connect($server, $username, $password, $databasename, $port);

$errno = mysqli_connect_errno();

if($errno) {
   die("Connection failed:" . $errno);
}

$query = "SELECT * FROM students WHERE sName = '$user' and sPassword = '$pw'";


$result = mysqli_query($conn, $query);
$something = mysqli_fetch_array( $result );

mysqli_close($conn);

echo($result);
//echo($something);


?>