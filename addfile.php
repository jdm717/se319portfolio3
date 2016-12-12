<?php
$folderId = htmlspecialchars($_GET['folderId']);
$fileName = htmlspecialchars($_GET['fileName']);
$content = htmlspecialchars($_GET['content']);
$query = "INSERT INTO files (folderId, fileName, content) VALUES ($folderId,$fileName,'$content')";
$fileInfo = mysqli_query($conn, $query);



mysqli_close($conn);

echo($fileinfo);

?>