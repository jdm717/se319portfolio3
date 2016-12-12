<?php
$fileId = htmlspecialchars($_GET['fileId']);

$query = "SELECT content FROM files where fileId =$fileId";
$fileInfo = mysqli_query($conn, $query);
file = mysqli_fetch_row($fileInfo);
$result = $file[0];

mysqli_close($conn);

json_encode($result);
echo($result);


?>