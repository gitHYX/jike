<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	//后台更新新闻信息
	if ($link) {
		$newstitle = $_POST['newstitle'];
		$newstype = $_POST['newstype'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newssrc = $_POST['newssrc'];
		$newsid=$_POST['id'];

		$sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`={$newsid}";

		mysqli_query($link,'SET NAMES UTF8');
		$result = mysqli_query($link,$sql);
		echo json_encode(array('success' => $sql ));
	}
?>