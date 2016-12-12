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

$query = "INSERT INTO students (sName, sPassword) VALUES ('$user','$pw')";


$result = mysqli_query($conn, $query);
$query = "SELECT studentId FROM students where sName ='$user' and sPassword ='$pw'";
$qresult = mysqli_query($conn, $query);
$studentId = mysqli_fetch_row($qresult);


$query = "INSERT INTO folders (folderName, studentId) VALUES ('HOME',$studentId[0])";
$intresult = mysqli_query($conn, $query);

$query = "SELECT folderId FROM folders where folderName ='HOME' and studentId ='$studentId[0]'";
$qresult = mysqli_query($conn, $query);
$folderId = mysqli_fetch_row($qresult);

$query = "INSERT INTO access (folderId, studentId) VALUES ($folderId[0],$studentId[0])";
$intresult = mysqli_query($conn, $query);
mysqli_close($conn);


echo($result);

?>