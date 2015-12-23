<?php
    require("class.php");
    $keyword = $_GET['keyword'];
    $sql = "select * from tb_affiche where title like '%".$keyword."%' or content like '%".$keyword."%'";
    $result = $admindb->ExecSQL($sql,$conn);
    echo json_encode($result);
?>