<?php
$folderId = htmlspecialchars($_GET['folderId']);
$folderName = htmlspecialchars($_GET['folderName']);
$content = htmlspecialchars($_GET['content']);
$query = "INSERT INTO files (folderId, folderName, content) VALUES ($folderId,$folderName,'$content')";
$fileInfo = mysqli_query($conn, $query);



mysqli_close($conn);

echo($fileinfo);

?>