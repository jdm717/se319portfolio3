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

$query = "SELECT studentId FROM students where sName ='$user' and sPassword ='$pw'";
$qresult = mysqli_query($conn, $query);
$studentId = mysqli_fetch_row($qresult);

$query = "SELECT folders.folderId, folders.folderName FROM folders JOIN access ON access.folderId=folders.folderId WHERE access.studentId = $studentId[0]";

$qresult = mysqli_query($conn, $query);
$result = array();
while($folderInfo = mysqli_fetch_row($qresult)){
	$obj = (object) array('id' => $folderInfo[0], 'name' => $folderInfo[1], 'type' => 'folder');
	array_push($result, $obj);
}

mysqli_close($conn);

$retval = json_encode($result);
echo($retval);

?>