<?php
$folderId = htmlspecialchars($_GET['folderId']);
$fileName = htmlspecialchars($_GET['fileName']);
$content = htmlspecialchars($_GET['content']);

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
	
$query = "INSERT INTO files (folderId, fileName, content) VALUES ($folderId,'$fileName','$content')";
$fileInfo = mysqli_query($conn, $query);

mysqli_close($conn);

echo($fileInfo);

?>