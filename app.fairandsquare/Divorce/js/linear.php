<?php 
$directory = "../ie/";
$file = uniqid(rand(), true) . '.txt';
  
/// The new person to add to the file
$person = $_POST['fname'];

// Write the contents to the file, 
// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
file_put_contents($directory.$file, $person, FILE_APPEND | LOCK_EX); 

//glpsol --model fair2.mod --data problem.dat -o out.txt

//needs to be filename

//$output = shell_exec('/Users/davidcurran/Desktop/glpk-4.9/glpk-4.9/examples/glpsol --model /Applications/MAMP/htdocs/website/fair2.mod --data '.$directory.$file.' --output "/dev/stdout"');
$output = shell_exec('/usr/bin/glpsol --model /home/ec2-user/fair2.mod --data '.$directory.$file.' --output "/dev/stdout"');


if (preg_match("/worst (.*)/", $output, $matches)) {
  echo $matches[1].'|~ ';
}

$output2= preg_match_all("/([\d]+) [xy].*/", $output, $matches);
  $i = 0;
  //echo $matches[0][0];
	while ($i<preg_match_all("/([\d]+) [xy].*/", $output)) {
   	$a .= $matches[0][$i];
   	$a .=" |~ ";
    	$i=$i+1;
	}

$pattern = '/(\s+)/i';
$replacement = ' ';
echo preg_replace($pattern, $replacement, $a);              

?>






