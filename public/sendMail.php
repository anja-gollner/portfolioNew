<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $vorname = htmlspecialchars($_POST["vorname"] ?? '');
    $nachname = htmlspecialchars($_POST["nachname"] ?? '');
    $email = filter_var($_POST["email"] ?? '', FILTER_VALIDATE_EMAIL);
    $projekt = htmlspecialchars($_POST["projekt"] ?? '');

    if (!$vorname || !$nachname || !$email) {
        http_response_code(400);
        echo "Ungültige Eingabe.";
        exit;
    }

    $to = "anjakgollner@gmail.com";
    $subject = "Neue Kontaktanfrage von $vorname $nachname";
    $message = "Vorname: $vorname\nNachname: $nachname\nEmail: $email\nProjekt: $projekt";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "OK";
    } else {
        http_response_code(500);
        echo "Senden fehlgeschlagen.";
    }
} else {
    http_response_code(405);
    echo "Nur POST erlaubt.";
}
