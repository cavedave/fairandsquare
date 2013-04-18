<?php
session_start();  
$directory = "./logger/";

if(isset($_SESSION['file']))
    $_SESSION['views'] = $_SESSION['views']+ 1;
else	{
    $_SESSION['views'] = 1;
    
    $_SESSION['file'] = uniqid(rand(), true) . '.txt';
    }
 //   $file = uniqid(rand(), true) . '.txt';
 	


$file = $_SESSION['file'];//$_SESSION['file']; 

// Open the file and erase the contents if any
//$fp = fopen($directory.$file, "w");


// The new person to add to the file
$person = $_POST['fname']. " ";

// Write the contents to the file, 
// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
//file_put_contents($file, $person, FILE_APPEND | LOCK_EX);

file_put_contents($directory.$file, $person, FILE_APPEND | LOCK_EX);

?>
