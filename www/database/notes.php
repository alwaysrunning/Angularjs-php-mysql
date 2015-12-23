<?php
    require("class.php");
    $sql = "select * from tb_affiche order by id desc limit 5";
    $result = $admindb->ExecSQL($sql,$conn);
    echo json_encode($result);
?>