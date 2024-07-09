
<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';

$admin_mail = "hello@alwaysinplus.com";
$mail = new PHPMailer(true);
//From email address and name
$mail->CharSet = 'utf-8';
$mail->From = "hello@alwaysinplus.com";
$mail->FromName = "Message from alwaysin plus";
//To address and name

$mail->addAddress($admin_mail);

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Message from Feedbackform";
$mail->Body = '
        <p><i>Name</i> : <b>' . $_POST["name"] . '</b></p>
        <p><i>Company</i> : <b>' . $_POST["company"] . '</b></p>
        <p><i>Phone number</i> : <b>' . $_POST["phone-number"] . '</b></p>
        <p><i>Email</i> : <b>' . $_POST["email"] . '</b></p>
        <p><i> Preferred communication method Email</i> : <b>' . $_POST["energy-email"] . '</b></p>
        <p><i> Preferred communication method Phone</i> : <b>' . $_POST["energy-phone"] . '</b></p>
        <p><i>Preferred communication method </i> : <b>' . $_POST["energy-offline"] . '</b></p>


        <p><i>Introduction to New Project: Briefly describe the new project to provide context</i> : <b>' . $_POST["introduction"] . '</b></p>
        <p><i>Location: Write the country in which the object will be substituted</i> : <b>' . $_POST["country"] . '</b></p>
        <p><i>Planned power</i> : <b>' . $_POST["power"] . '</b></p>
        <p><i>Who are the projects main stakeholders? Yes?</i> : <b>' . $_POST["energy-yes"] . '</b></p>
        <p><i>Who are the projects main stakeholders? No?</i> : <b>' . $_POST["energy-no"] . '</b></p>
        <p><i> Planned start date of facility operation</i> : <b>' . $_POST["date"] . '</b></p>
        <br/>
        <sub>Send : ' . date("d-m-Y H:i:s") . '</sub>';
$mail->AltBody = ' E-mail : ' . $_POST["email4"];

try {
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

