<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	//后台删除新闻信息
	if ($link) {
		$newsid = $_POST['newsid'];
		mysqli_query($link,'SET NAMES UTF8');
		$sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsid}";

		mysqli_query($link,$sql);
		echo json_encode(array('success' => 'ok'));
	}
	mysqli_close();
?>