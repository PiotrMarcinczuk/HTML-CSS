<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer-master/src/Exception.php';
require 'php/PHPMailer-master/src/PHPMailer.php';
require 'php/PHPMailer-master/src/SMTP.php';

if(isset($_POST['mail_text'])) {
    $adres = $_POST['mail_text'];
    $slowo = $_POST['problem_name'];
    $opis = $_POST['slowo_opis'];

    $email = $_POST['mail_text'];
    $problem_name = $_POST['problem_name'];
    $description = $_POST['description'];

    // Sprawdź, czy pola nie są puste
    if(empty($email) || empty($problem_name) || empty($description)) {
        header("Location: kontakt.html");
        echo "<script>alert('Nie wypełniłeś wszystkich pól.')</script>";
        exit;
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
        $mail->IsHTML(true);
        // treść wiadomości
        $mail->CharSet = 'UTF-8'; 
        $mail->setFrom('sznycer2137@gmail.com', 'Sznycer');
        $mail->addAddress($email);
        $mail->Subject = 'Podziękowania';
        $message = '<html>
        <head>
            <title>Thanks!</title>
        </head>
        <body>
            <h1>Dziękuje za pomoc</h1>
            <hr>
            <p>Bardzo dziękuje za pomoc w tworzeniu kalkulatora</p>
        </body>
        </html>
        ';
        $mail->Body = $message;

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
        $mail1->Subject = $problem_name;
        $mail1->Body = $description;

        // wysłanie wiadomości
        if(!$mail->send()) {
            echo 'Wiadomość nie została wysłana.';
            header("Location: index.html");
        } else {
            echo "<script>alert('Twoje zgłoszenie zostało wysłane.');</script>";
            header("Location: index.html");
        }

        if(!$mail1->send()) {
            echo 'Wiadomość nie została wysłana.';
            header("Location: index.html");
        } else {
            echo "<script>alert('Twoje zgłoszenie zostało wysłane.');</script>";
            header("Location: index.html");
        }
    }
}
?>
