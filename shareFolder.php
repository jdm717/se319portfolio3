<?php
$user = htmlspecialchars($_GET['username']);
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

$query = "SELECT studentId FROM students where sName ='$user'";
$qresult = mysqli_query($conn, $query);
$studentId = mysqli_fetch_row($qresult);

$query = "INSERT INTO access (folderId, studentId) VALUES ($folderId, $studentId[0])";
$qresult = mysqli_query($conn, $query);

mysqli_close($conn);

echo $qresult;

?>