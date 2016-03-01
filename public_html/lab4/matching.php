<?php

if (isset($_GET['cmd'])) {
	$n = $_GET["N"];
	$m = $_GET["M"];
	echo json_encode(generateEdges($n, $m));
}

function generateEdges($n, $m) {
	$edgeNumber = rand($n,$n+2);
	$e = array();
	for($i=0; $i<$edgeNumber; $i++) {
		array_push($e, array(rand(0,$n-1), rand(0,$m-1), rand(1,100)));
	}
	return $finalArray = array('N' => $n, 'M' => $m, 'E' => $e);
}

?>