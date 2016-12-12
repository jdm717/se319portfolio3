<?php
$folderId = htmlspecialchars($_GET['folderId']);

$query = "SELECT fileId, fileName FROM files where folderId =$folderId";
$fileInfo = mysqli_query($conn, $query);

$result = array([]);
while($file = mysqli_fetch_row($fileInfo)){
		array_push($result,array('folderId' => $file[0], 'folderName' => '$fileName[1]'));

}


mysqli_close($conn);

json_encode($result);
echo($result);

?>