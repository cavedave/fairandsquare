<?php 
$directory = "../ie/";
$file = uniqid(rand(), true) . '.txt';
 	

echo "Hello ";
echo $file;
/// The new person to add to the file
$person = "Hello world";//$_POST['fname'];

// Write the contents to the file, 
// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
file_put_contents($directory.$file, $person, FILE_APPEND | LOCK_EX); 

//glpsol --model fair2.mod --data problem.dat -o out.txt

//needs to be filename

//$output = shell_exec('/Users/davidcurran/Desktop/glpk-4.9/glpk-4.9/examples/glpsol --model /Applications/MAMP/htdocs/website/fair2.mod --data /Applications/MAMP/htdocs/website/problem.dat --output "/dev/stdout"');
//server version /usr/bin/glpsol
//$output = shell_exec('/usr/bin/glpsol --model /home/ec2-user/fair2.mod --data /home/ec2-user/problem.dat --output "/dev/stdout"');


//$output = shell_exec('/Users/davidcurran/Desktop/glpk-4.9/glpk-4.9/examples/glpsol --model /Applications/MAMP/htdocs/website/fair2.mod --data /Applications/MAMP/htdocs/fairandsquare-master/app.fairandsquare/ie/561679707516c2ad4c74601.34102307.txt --output "/dev/stdout"');
//$output = shell_exec('/Users/davidcurran/Desktop/glpk-4.9/glpk-4.9/examples/glpsol --model /Applications/MAMP/htdocs/website/fair2.mod --data /Applications/MAMP/htdocs/fairandsquare-master/app.fairandsquare/ie/'.$file.' --output "/dev/stdout"');


//echo $output;

//if (preg_match("/worst (.*)/", $output, $matches)) {
//echo preg_replace("/worst (.*)/", "<br />Minimum satisfaction is: $1", $matches[0]);

  //echo " |~ ".$matches[1]."<br />";//.`${1}0`;
//}

//if (preg_match("/.*x.*/", $output, $matches)) {
//echo "<br />The FairAndSquare allocation is:";
//$output2= preg_match_all("/([\d]+) [xy].*/", $output, $matches);
  //echo "<br />Match was found <br />";
  //$i = 0;
  //echo $matches[0][0];
//	while ($i<preg_match_all("/([\d]+) [xy].*/", $output)) {
  // 	echo $matches[0][$i];
  // echo " |~ ";
   	//$a .= $matches[0][$i];
    //	$i=$i+1;
//	}

// 2 x[1,1] 1 0 
//  echo $matches[0][0];
//  echo $matches[0][1];
//}


?>


