<?php require_once 'connect.php';
session_start();

if(isset($_SESSION['user'])!="") {
	header("Location: admin.php");
}
if(isset($_POST['login'])) {
	global $db;
	$salt = '$2a$07$usesomadasdsadsadsadasdasdasdsadesillystringfors';
	$uid = $db->escape_string($_POST['uid']);
	$pw = $db->escape_string($_POST['pw']);
	$query = "SELECT * FROM USERS WHERE uid= '" . $uid . "'";
	$res= $db->query($query);
	if (!$res) exit("There is a MySQL error, exiting this script " . $db->error);

	else {
		$row=mysqli_fetch_array($res, MYSQL_ASSOC);
		if($row['hashed_pw']==crypt($pw, $salt) && $row['role'] == 0)
		{
			$msg = 'success bitch';
			$_SESSION['user'] = $row['uid'];
			header("Location: admin.php");
		}
		else if($row['role'] != 0) {
			$msg = "You are not an authorized user";
		}
		else
		{
			$msg = "The username/password that you've entered is incorrect.";

		}
	}
}

$db->close(); 
?>	

<!DOCTYPE html>

<html lang="en">

<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=McLaren'>
	<title>Admin Login</title>
</head>
<style>
	body {
		font-family: 'McLaren', cursive;
		background-image: url("images/dashboard.jpg");
	}
	.msg {color:red;}
	.login {
		vertical-align: 50%;
		text-align:center;
	}
	p {
		font-size: x-large;
	}
</style>

<body>
<div class='login col-sm-12'>
</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>
		<form method="post"> 
			<p>Username : <input type="text" name="uid" required></p>
			<p>Password : <input type="password" name="pw" required></br></br>
				<input class="btn-lg btn-info" type="submit" name="login" value="Login">
			</p>
		</form>
		<p class='msg'><?php echo $msg?></p>
	</div>
	<script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
	<script src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>
</html>