<?php
require_once 'class.user.php';
$user_class = new USER();


    // Take action based on the score returned:ø
        if (isset($_REQUEST['name']) && isset($_REQUEST['email']) && isset($_REQUEST['message'])) {

            $email_to = "info@alchemysolutions.rs";
            $email_subject = "Message from site.";


            $name = $_REQUEST['name'];
            $email = $_REQUEST['email'];
            $message = $_REQUEST['message'];


            function clean_string($string)
            {
                $bad = array("content-type", "bcc:", "to:", "cc:", "href");
                return str_replace($bad, "", $string);
            }

            $email_message = "Name: " . clean_string($name) . "\n";
            $email_message .= "E-mail: " . clean_string($email) . "\n";
            $email_message .= "Message: " . clean_string($message) . "\n";


            $headers = 'From: ' . $email . "\r\n" .
                'Reply-To: ' . $email . "\r\n" .
                'X-Mailer: PHP/' . phpversion();
            if (@mail($email_to, $email_subject, $email_message, $headers)) {
                $user_class->returnJSON("OK","Successfully sent the mail.", 
                "We will answer as soon as possible.");
                return;
            } else {
                $user_class->returnJSON("ERROR","Something is wrong.", 
                "Please try again later.");
                return;
            };
        }else
        {
            //echo "nije sve setovanoi";
            $user_class->returnJSON("ERROR","Something is wrong.", 
            "You have not filled in all fields.");
            return;
        }
   
