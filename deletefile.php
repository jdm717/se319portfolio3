<?php
$fileId = htmlspecialchars($_GET['fileId']);
$folderId = htmlspecialchars($_GET['folderId']);

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

$query = "DELETE FROM files WHERE folderId=$folderId AND fileId=$fileId";
$qresult = mysqli_query($conn, $query);

mysqli_close($conn);

echo($qresult);

?>