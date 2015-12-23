<?php
    require("class.php");
    $sql = "select * from tb_affiche";
    $pagesize = 4; // 每页显示几条信息
    $nowpage = $_GET['page'];
    $result = $setpage->ShowData($sql,$conn,$pagesize,$nowpage);
    $left = $setpage->ShowPage('记录','条',true);
    $right = $setpage->ShowPage('记录','条',false);
    $array = array('list'=>$result,'left'=>$left,'right'=>$right);
    echo json_encode($array);
?>