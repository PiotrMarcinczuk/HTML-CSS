<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer-master/src/Exception.php';
require 'php/PHPMailer-master/src/PHPMailer.php';
require 'php/PHPMailer-master/src/SMTP.php';

if (isset($_POST['bug_title'])) {
    $adres_bug = $_POST['bug_title'];
    $bugi = $_POST['mail_opis'];

    if(empty($adres_bug) || empty($bugi)) {
        echo "<script>alert('Nie wypełniłeś wszystkich pól.');</script>";
        header("Location: http://localhost/SznycWiki/kontakt.html");
    }else {
        // ustawienia SMTP
        $mail1 = new PHPMailer(true);
        $mail1->isSMTP();
        $mail1->Host = 'smtp.gmail.com';  // adres serwera SMTP
        $mail1->SMTPAuth = true;
        $mail1->Username = 'sznycer2137@gmail.com'; // adres email
        $mail1->Password = 'mqrqzesdoqgbommd'; // hasło do emaila
        $mail1->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail1->Port = 587;

        // treść wiadomości
        $mail1->CharSet = 'UTF-8'; 
        $mail1->setFrom('sznycer2137@gmail.com', 'Sznycer');
        $mail1->addAddress('sznycer2137@gmail.com');
        $mail1->Subject = $adres_bug;
        $mail1->Body = $bugi;
       
        // wysłanie wiadomości
        if(!$mail1->send()) {
            header("Location: http://localhost/SznycWiki/thanks.html");
            echo "<script>alert('Twoje zgłoszenie zostało wysłane.');</script>";
        } else {
            echo "<script>alert('Twoje zgłoszenie zostało wysłane.');</script>";
            header("Location: http://localhost/SznycWiki/thanks.html");
        }
    }
}



?>