<?php
    require("class.php");
    $content = $_POST['content'];
    $title = $_POST['title'];
    $createtime = date("Y-m-d H:i:s");
    $insert = "insert into tb_affiche(title,content,createtime) values('$title','$content','$createtime')";
    $tb = $admindb->ExecSQL($insert,$conn);
    if(!$tb){
    	return false;
    }
    echo $tb;
?>