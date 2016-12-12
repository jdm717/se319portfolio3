<?php
$fileId = htmlspecialchars($_GET['fileId']);

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

$query = "SELECT content FROM files where fileId =$fileId";
$fileInfo = mysqli_query($conn, $query);
$file = mysqli_fetch_row($fileInfo);
$result = $file[0];

mysqli_close($conn);

echo($result);


?>