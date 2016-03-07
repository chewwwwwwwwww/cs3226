<?php require_once 'connect.php';
session_start();

$elapsed = 0;
if (empty($_SESSION['count'])) {
  $_SESSION['count'] = 1;
  $_SESSION['visittime'] = time();
}
else {
  $elapsed = time()-$_SESSION['visittime'];
  $_SESSION['visittime'] = time();
  session_destroy();
}

function selectFromTable($id) {  
	global $db;
	$query = "SELECT EDGES.N, EDGES.M, EDGES.score FROM GRAPHS INNER JOIN GRAPHS_EDGES ON GRAPHS.g_id = GRAPHS_EDGES.graph_id INNER JOIN EDGES ON GRAPHS_EDGES.edge_id = EDGES.e_id WHERE g_id = " . $id;
	$res = $db->query($query);
	if (!$res) exit("There is a MySQL error, exiting this script");
	$array = array();
	while( $row = mysqli_fetch_array( $res, MYSQL_NUM ) )
	{
		array_push($array, $row	);
	}
	return $array;
}

function selectEdges($id) {  
	global $db;
	$query = "SELECT EDGES.N, EDGES.M FROM GRAPHS INNER JOIN GRAPHS_EDGES ON GRAPHS.g_id = GRAPHS_EDGES.graph_id INNER JOIN EDGES ON GRAPHS_EDGES.edge_id = EDGES.e_id WHERE g_id = " . $id;
	$res = $db->query($query);
	if (!$res) exit("There is a MySQL error, exiting this script");
	$array = array();
	while( $row = mysqli_fetch_array( $res, MYSQL_NUM ) )
	{
		array_push($array, $row	);
	}
	return $array;
}

function computeScore($id, $matchArray) {  
	global $db;
	global $elapsed;
	$score = 0;
	$details = array();
	for($i=0; $i<count($matchArray); $i++) {
		$query = "SELECT EDGES.score FROM GRAPHS INNER JOIN GRAPHS_EDGES ON GRAPHS.g_id = GRAPHS_EDGES.graph_id INNER JOIN EDGES ON GRAPHS_EDGES.edge_id = EDGES.e_id WHERE EDGES.N = " . $matchArray[$i][0] . 
				" AND EDGES.M = " . $matchArray[$i][1] . " AND g_id = " . $id;
		$res = $db->query($query);
		if (!$res) exit("There is a MySQL error, exiting this script");
		$value = mysqli_fetch_object($res);
		$score += intval($value->score);

	}
	$query = "SELECT highscore,optimal,matches,timetaken FROM GRAPHS WHERE g_id = " . $id;
	$res = $db->query($query);
	if (!$res) exit("There is a MySQL error, exiting this script");
	$row = mysqli_fetch_array( $res, MYSQL_NUM );
	array_push($details, $row);	
	
	if($score > intval($details[0][0]) && $elapsed < intval($details[0][3])) { //new high score
		$query = "UPDATE GRAPHS SET highscore = " . $score . " WHERE g_id = " . $id;
		$res = $db->query($query);
		if (!$res) exit("There is a MySQL error, exiting this script");
		$query = "UPDATE GRAPHS SET timetaken = " . $elapsed . " WHERE g_id = " . $id;
		$res = $db->query($query);
		if (!$res) exit("There is a MySQL error, exiting this script");
		return $finalArray = array('graph_id' => $id, 'new_best' => $score, 'num_match' => $details[0][2], 'match_score' => $details[0][1], 'time_elapsed' => $elapsed, 'new_best_time' => $elapsed);
	}
	if($score > intval($details[0][0]) && $elapsed >= intval($details[0][3])) { //new high score but time
		$query = "UPDATE GRAPHS SET highscore = " . $score . " WHERE g_id = " . $id;
		$res = $db->query($query);
		if (!$res) exit("There is a MySQL error, exiting this script");
		return $finalArray = array('graph_id' => $id, 'new_best' => $score, 'num_match' => $details[0][2], 'match_score' => $details[0][1], 'time_elapsed' => $elapsed, 'new_best_time' => NULL);
	}
	if($score == intval($details[0][0]) && $elapsed < intval($details[0][3])) { //not new high score but time
		$query = "UPDATE GRAPHS SET timetaken = " . $elapsed . " WHERE g_id = " . $id;
		$res = $db->query($query);
		if (!$res) exit("There is a MySQL error, exiting this script");
	    return $finalArray = array('graph_id' => $id, 'new_best' => NULL, 'num_match' => $details[0][2], 'match_score' => $details[0][1], 'time_elapsed' => $elapsed, 'new_best_time' => $elapsed);
	}
	if($score == intval($details[0][0]) && $elapsed >= intval($details[0][3])) { //not new high score
	    return $finalArray = array('graph_id' => $id, 'new_best' => NULL, 'num_match' => $details[0][2], 'match_score' => $details[0][1], 'time_elapsed' => $elapsed, 'new_best_time' => NULL);
	}
	if($score < intval($details[0][0])) { //not new high score
	    return $finalArray = array('graph_id' => $id, 'new_best' => NULL, 'num_match' => $details[0][2], 'match_score' => $details[0][1], 'time_elapsed' => $elapsed, 'new_best_time' => NULL);
	}
	
	return $finalArray;
}

if (isset($_GET['cmd'])) {
	$command = $_GET['cmd'];
}

if($command == 'generate') {
	$id = $_GET["graph_id"];
	switch($id) {
		case 1:
		case 2:
		case 3:
		$n = 2;
		$m = 3;
		break;
		case 4:
		$n = 4;
		$m = 5;
		break;
		case 5:
		$n = 5;
		$m = 6;
		break;
		case 6:
		$n = 6;
		$m = 7;
		break;
		case 7:
		$n = 8;
		$m = 8;
		break;
		case 8:
		$n = 9;
		$m = 9;
		break;
		case 9:
		$n = 10;
		$m = 10;
		break;
	}
	$e = selectFromTable($id);
	$finalArray = array('N' => $n, 'M' => $m, 'E' => $e);
	echo json_encode($finalArray);
}

if($command == 'submit') {
	$id = $_GET["graph_id"];
	$matchArray = json_decode($_GET['solution']);
	$e = selectEdges($id);
	$diff = array();
	for($i=0; $i<count($matchArray); $i++) {
		if(!in_array($matchArray[$i], $e)) {
			array_push($diff, $matchArray[$i]);
		}
	}
	if(!empty($diff)) {
		$finalArray = array('graph_id' => $id, 'new_best' => NULL, 'num_match' => 'DNE', 'match_score' => $diff);
		echo json_encode($finalArray);
	}
	else {
		echo json_encode(computeScore($id, $matchArray));
	}

}

$db->close(); 

?>