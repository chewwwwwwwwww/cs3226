<?php
session_start();
include_once 'connect.php';

if(!isset($_SESSION['user']))
{
	header("Location: login.php");
}

if(isset($_GET['reset']))
{
	$query = 'UPDATE GRAPHS SET highscore=0, timetaken=999, user=NULL';
	$res=$db->query($query);
	if (!$res) exit("There is a MySQL error, exiting this script " . $db->error);
	header("Location: admin.php");
}
?>