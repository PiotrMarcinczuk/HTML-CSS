<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer-master/src/Exception.php';
require 'php/PHPMailer-master/src/PHPMailer.php';
require 'php/PHPMailer-master/src/SMTP.php';

if (isset($_POST['mail_text_bugi'])) {
    $adres_bug = $_POST['mail_text_bugi'];
    $bugi = $_POST['mail_opis'];

    if(empty($adres_bug) || empty($bugi)) {
        echo "<script>alert('Nie wypełniłeś wszystkich pól.');</script>";
    }else {
        // ustawienia SMTP
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // adres serwera SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'sznycer2137@gmail.com'; // adres email
        $mail->Password = 'mqrqzesdoqgbommd'; // hasło do emaila
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // treść wiadomości
        $mail->CharSet = 'UTF-8'; 
        $mail->setFrom('sznycer2137@gmail.com', 'Sznycer');
        $mail->addAddress($adres);
        $mail->Subject = 'Podziękowanie';
        $mail->Body = 'Dziękuję za podsunięcie słowa, niech Sznyc będzie z tobą';

        // wysłanie wiadomości
        if(!$mail->send()) {
            echo 'Wiadomość nie została wysłana.';
            echo 'Błąd: ' . $mail->ErrorInfo;
        } else {
            echo "<script>alert('Twoje zgłoszenie zostało wysłane.');</script>";
        }
    }
}



?>