<?php
require_once '../config.php';
$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno)
  die("Failed to connect to MySQL, exiting this script");
?>