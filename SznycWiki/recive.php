<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer-master/src/Exception.php';
require 'php/PHPMailer-master/src/PHPMailer.php';
require 'php/PHPMailer-master/src/SMTP.php';

if(isset($_POST['mail_text'])) {
    $adres = $_POST['mail_text'];
    $slowo = $_POST['slowo_nazwa'];
    $opis = $_POST['slowo_opis'];

    // Sprawdź, czy pola nie są puste
    if(empty($adres) || empty($slowo) || empty($opis)) {
        echo "<script>alert('Nie wypełniłeś wszystkich pól.');</script>";
        header("Location: http://localhost/SznycWiki/kontakt.html");
    } else {
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
        $mail1->Subject = $slowo;
        $mail1->Body = $opis;

        // wysłanie wiadomości
        if(!$mail->send()) {
            echo 'Wiadomość nie została wysłana.';
            header("Location: http://localhost/SznycWiki/thanks.html");
        } else {
            echo "<script>alert('Twoje zgłoszenie zostało wysłane.');</script>";
            header("Location: http://localhost/SznycWiki/thanks.html");
        }
    }
}
?>
