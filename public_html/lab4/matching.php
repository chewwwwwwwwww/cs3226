<html>
<body>

<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$n = $m = $edgeNumber = "";
$e = array();

$finalArray = array('N' => $n, 'M' => $m, 'E' => $e);

if (isset($_POST['generate'])) {
	$n = $_POST["n"];
	$m = $_POST["m"];
	generateEdges();
	echo json_encode($finalArray);
}

function generateEdges() {
	$edgeNumber = rand($n,$n*2);
	for($i=0; i<$edgeNumber; i++) {
		array_push($e, array(rand(0,$n), rand(0,$m), rand(1,100)));
	}
}

?>

<script src="js/lab4.js"></script>
</body>
</html>