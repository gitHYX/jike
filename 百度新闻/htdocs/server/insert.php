<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');

	if ($link) {
		//后台插入新闻信息
		$newstitle = $_POST['newstitle'];
		$newstype = $_POST['newstype'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newssrc = $_POST['newssrc'];

		$sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";

		mysqli_query($link,'SET NAMES UTF8');
		$result = mysqli_query($link,$sql);
		echo json_encode(array('success' => 'ok' ));
	}
?>