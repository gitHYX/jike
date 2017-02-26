<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	if ($link) {
		if ($_GET['newstype']) //根据新闻类型切换内容
		{
			$newstype = $_GET['newstype'];
			$sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}'";
			mysqli_query($link,'SET NAMES UTF8');
			$result = mysqli_query($link,$sql);

			$senddata = array();
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata, array(
					'id' => $row['id'],
					'newstype' => $row['newstype'],
					'newstitle' => $row['newstitle'],
					'newsimg' => $row['newsimg'],
					'newstime' => $row['newstime'],
					'newssrc' => $row['newssrc']
				));
			}
			echo json_encode($senddata);
		}
		else{//后台界面进入此处
			$sql = "SELECT * FROM news";
			mysqli_query($link,'SET NAMES UTF8');
			$result = mysqli_query($link,$sql);

			$senddata = array();
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata, array(
					'id' => $row['id'],
					'newstype' => $row['newstype'],
					'newstitle' => $row['newstitle'],
					'newsimg' => $row['newsimg'],
					'newstime' => $row['newstime'],
					'newssrc' => $row['newssrc']
				));
			}
			echo json_encode($senddata);
		}
	}
	else{
		echo json_encode(array('success' => 'none'));
	}
	mysqli_close($link);
?>