<?php
session_start();
include_once 'connect.php';

if(!isset($_SESSION['user']))
{
	header("Location: login.php");
}

$query = 'SELECT uid,role FROM USERS';
$resOne=$db->query($query);
$query = 'SELECT g_id, highscore, timetaken, user  FROM GRAPHS';
$resTwo=$db->query($query);
$db->close(); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=McLaren'>
	<link rel="stylesheet" href="css/admin.css">
	<title>Admin Dashboard</title>
</head>
<body>

	<div class='row'>
		<div class='navbar navbar-default navbar-static-top'>
			<div class='container'>
				<div class='navbar-header'>
					<a href='#' class='navbar-brand'>Dashboard</a>
					<button type='button' id='navbutton' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
						<span class='sr-only'>Toggle Navigation</span>
						<span class='icon-bar'></span>
						<span class='icon-bar'></span>
						<span class='icon-bar'></span>
					</button>
				</div>
				<ul class='nav navbar-nav navbar-right collapse navbar-collapse'>
					<li><a href="reset.php?reset" class="btn btn-info" role="button">Reset</a></li>
					<li><a href="logout.php?logout" class="btn btn-info" role="button">Logout</a></li>
				</ul>

			</div>
		</div>
	</div>

	<h1>Welcome <?php print $_SESSION['user']?>!</h1>
	<div class='users'>
		<div class='col-sm-offset-4 col-sm-1'>
			<h2 class='userheader'>Users</h2>
			<table>
				<tr>
					<th>User</th>
					<th>Role</th>
				</tr>

				<?php
				while($userRow=mysqli_fetch_array($resOne, MYSQL_ASSOC)) {
					foreach($userRow as $name => $value) {
						if($value == '0' || $value == '1') {
							print "<td>$value</td></tr>";

						}
						else{
							print "<tr><td>$value</td>";	
						}
					}
				}
				?>
			</table>
		</div>

		<div class='col-sm-offset-1 col-sm-3'>
			<h2 class='graphsheader'>Graphs</h2>
			<table>
				<tr>
					<th>Graph ID</th>
					<th>High Score</th>
					<th>Time Taken</th>
					<th>User</th>
				</tr>
				<?php
				while($graphRow=mysqli_fetch_array($resTwo, MYSQL_ASSOC)) {
					foreach($graphRow as $name => $value) {
						if($name == 'g_id') {
							print "<tr><td>$value</td>";	

						}
						else if($name == 'user'){
							print "<td>$value</td></tr>";
						}
						else {
							print "<td>$value</td>";
						}
					}
				}
				?>

			</div>

			<script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
			<script src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		</body>
		</html>