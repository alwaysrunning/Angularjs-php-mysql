<?php
    require("class.php");
    $content = $_POST['content'];
    $title = $_POST['title'];
    $id = $_POST['id'];
    $update = "update tb_affiche set title='$title',content='$content' where id='$id'";
    $tb = $admindb->ExecSQL($update,$conn);
    echo $tb;
?>