<?php
$folderId = htmlspecialchars($_GET['folderId']);
$folderName = htmlspecialchars($_GET['folderName']);

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

$query = "UPDATE folders SET folderName='$folderName' WHERE folderId=$folderId";
$fileInfo = mysqli_query($conn, $query);

mysqli_close($conn);

echo($fileInfo);


?>