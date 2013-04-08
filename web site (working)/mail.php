	<?php
if(isset($_POST['email'])) {
     
    $email_to = "info@fairandsquare.ie";
    $email_subject = "fairandsquare.ie contact query";
     
     
    function died($error) {
        echo "sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    if(!isset($_POST['name']) ||
        !isset($_POST['email'])) {
        died('sorry, but there appears to be a problem with the form you submitted.');      
    }
     
    $first_name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
  
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
     
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
        <link rel="stylesheet" href="http://www.fairandsquare.ie/css/reset.css">
        <link rel="stylesheet" href="http://www.fairandsquare.ie/css/main.css">
        <link href='http://fonts.googleapis.com/css?family=Questrial|Open+Sans:400,700,600' rel='stylesheet' type='text/css'>

        <script src="http://www.fairandsquare.ie/js/vendor/modernizr-2.6.2.min.js"></script>
        <script>
                function inputFocus(i){
            if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
        }
        function inputBlur(i){
            if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
        }       
        </script>
        <script>
                $('input[placeholder]').focus(function(ev){ 
          var $this = $(this);
          if ($this.val() === $this.attr('placeholder')) $this.val('');
        }).blur(function(ev){
          var $this = $(this);      
          if ($this.val() === '') $this.val($this.attr('placeholder'));
        });
        </script>

    </head>

    <body>
            <div class="wrapper">
            <!--[if lt IE 7]>
                <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
            <![endif]-->
                    <header>

                            <a href="index.html"><img src="http://www.fairandsquare.ie/images/fair_and_square_logo.png" alt="fair and square logo" class="logo"></a>
                            <nav>
                                <ul>
                                    <li><a href="http://www.blog.fairandsquare.ie">Blog</a></li>
                                    <li><a href="http://www.fairandsquare.ie/FAQ.html">FAQ</a></li>
                                    <li><a href="http://www.fairandsquare.ie/products/shared_property_division_tool.html">Tools</a></li>
                                    <li><a href="http://www.fairandsquare.ie/index.html" class="border-left active">Home</a></li>
                                </ul>
                                
                            </nav>

                    </header>

                    <div class="main-body">

                            <section class="content">
                            <article>
                                <h1>Fair and Square</h1>
                                <h2>At fair and square we make Computer Aided Negotiation tools for online dispute resolution.
</h2>
                                <p>Negotiations over personal effects after a separation or after someone has passed away can be fraught and time consuming. Fair and square facilitates a process that gives each person as much as possible.</p>
                                <p>This process speeds up these negotiations in a way that is easily understood, transparent and fair.</p>
                            </article>

                            <article>
                                <h2>Shared Property Division Tool</h2>
                                        <p>The Fair and Square division tool allows couples to divide assets in the event that they breakup.</p>
            <p>The stages in the process involve taking in:</p>                           
            <ol> 
                <li>the peoples names</li>
                <li>the items to be divided up.</li>
                <li>how much each person wants each item. Each person has 100 total points they can share between all of the items</li>
            </ol> 

           <p> Based on this information fair and square calculates an allocation of items. This allocation is the one that gives each person as much as possible.</p><br>
                                <p>Try out our <a href="http://www.fairandsquare.ie/products/shared_property_division_tool.html">shared property division tool</a> to see our method of fair division in action.</p>
                            </article>

                            <article>
                                <h2>Property division use case</h2>
                                <img src="http://www.fairandsquare.ie/images/together.jpg" alt="photo of Alice & Bob" ><br>
                                <p>See how the <a href="http://www.fairandsquare.ie/products/shared_property_division_tool.html">
                                shared property division tool</a> is used in practice in our <a href="http://www.fairandsquare.ie/products/example.html">illustrated use case. </a> Go through the process from start to finish with an illustrated explaination of each step.</p>

                            </article>

                             </section>


                            <aside class="side-bar">
                                <div class="side-content">
                                    <h3>Thank You</h3>
                                    <p>We will contact you shortly</p>

                                </div>
                                <div class="side-content">    
                                  
                                    <p class="hands">
                                    <img src="http://www.fairandsquare.ie/images/hands.jpg" alt="picture of a hand shake" />
                                    <a href="http://54.228.192.228/">Using fairandsquare.ie on the Croke Park agreements</a></p>
                                </div>
                                <div class="side-content no-border">    
                                    <h3>FAQ</h3>
                                    <p>Visit our <a href="http://www.fairandsquare.ie/FAQ.html">FAQ section</a> to find out what fairandsquare.ie does and how it works</p>
                                </div>
                            </aside>



                    </div><!--End Main Body-->
            </div><!--end wrapper-->

             <footer>

                    <div class="copyright">
                            <p><a href="http://www.fairandsquare.ie/privacy_policy.html">Privacy Policy</a><br>
                            &copy;Fair and Square 2013</p>
                    </div>


                    <a href="http://www.facebook.com/pages/Fairandsquare/114887262026881"><img class ="icon" src="http://www.fairandsquare.ie/images/facebook.png" alt="facebook icon"></a>
                    <a href="https://twitter.com/fairandsquareie"><img class ="icon" src="http://www.fairandsquare.ie/images/twitter.png" alt="twitter icon"></a>

             </footer>

             <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
            <script type="text/javascript">

              var _gaq = _gaq || [];
              _gaq.push(['_setAccount', 'UA-38593415-1']);
              _gaq.push(['_trackPageview']);

              (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
              })();

            </script>
    </body>
</html>
<?php
}
?>
