<?php
    require("class.php");
    $id = $_GET['id'];
    if(!$id) return false;
    $sql = "select * from tb_affiche where id=$id ";
    $result = $admindb->ExecSQL($sql,$conn);
    echo json_encode($result);
?>