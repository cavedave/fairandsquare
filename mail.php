	<?php
if(isset($_POST['email'])) {
     
    $email_to = "info@fairandsquare.ie";
    $email_subject = "Fair & Square Beta Teting Application";
     
     
     function died($error) {
        echo "sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('sorry, but there appears to be a problem with the form you submitted.');      
    }
     
    $first_name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
  
  if(strlen($message) < 2) {
    $error_message .= 'The message you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "message: ".clean_string($message)."\n";
     
     
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers); 
?>
 
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Fair & Square - Home</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link type="text/css" rel="stylesheet" href="http://fast.fonts.com/cssapi/97f75c60-4894-4c17-ac19-f0225f53ffdb.css"/>

        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <script>
                function inputFocus(i){
            if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
        }
        function inputBlur(i){
            if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
        }       
        </script>


        </head>
        <body>
            <div class="wrapper">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
    <header>
        <a href="index.html"><img src="images/fair_and_square_logo.png" alt="fair and square logo" class="logo"></a>

        <nav>
            <ul>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="index.html" class="border-left active">Home</a></li>
            </ul>
            
        </nav>

    </header>

    <div class="main">

    <aside class="side-form">

        <h3>Thank You</h3>

        <p>We will be in touch with shortly.
            </p>

        

        </fieldset>


        
    </aside>

    <section class="content">

        <h1>Fair and Square</h1>
        <h2><em>Computer aided mediation and negotiation services</em></h2>
        <p>Negotiations over personal effects left in a will or after a seperation can be fraught and time consuming. 
            <strong>Fair and square</strong> is a system to speed up these negotiations in a way that ensures everyone gets a measureably
            just and fair allocation.</p>
        <p>We create mobile and web based applications to assist in calculating these allocations.</p>
        <p>Try out our <a href="#">rent calculator</a> to see our method of fair division in action.


 
    </section>



        
</div>
  </div><!--end wrapper-->

    <footer>
       <div class="copyright">
                                    <a href="privacy_policy.html">Privacy Policy</a></br>
                                    &copy;Fair and Square 2013</div>


        <a href="http://www.facebook.com/pages/Fairandsquare/114887262026881"><img class ="icon" src="images/facebook.png"></a>
        <a href="https://twitter.com/fairandsquareie"><img class ="icon" src="images/twitter.png"></a>

    </footer>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
  
    </body>
</html>
