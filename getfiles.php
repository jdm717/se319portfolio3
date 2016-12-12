<?php
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

$query = "SELECT fileId, fileName FROM files where folderId =$folderId";
$fileInfo = mysqli_query($conn, $query);

$result = array();
while($file = mysqli_fetch_row($fileInfo)){
		$obj = (object) array('id' => $file[0], 'name' => $file[1], 'type' => 'file');
		array_push($result, $obj);
}


mysqli_close($conn);

$json = json_encode($result);
echo($json);

?>