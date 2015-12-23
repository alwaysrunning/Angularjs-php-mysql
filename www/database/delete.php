<?php
    require("class.php");
    $id = $_POST['id'];
    $delete = "delete from tb_affiche where id='$id'";
    $tb = $admindb->ExecSQL($delete,$conn);
    echo $tb;
?>