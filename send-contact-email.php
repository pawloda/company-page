<?php
    $name = strip_tags($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = strip_tags($_POST["phone"]);
    $message = strip_tags($_POST["message"]);

    $to = "aurametallpl@gmail.com";
    $subject = "Nowa wiadomość z formularza kontaktowego";
    $body = "Imię i nazwisko: $name\nEmail: $email\nTelefon: $phone\n\nWiadomość:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "fail";
    }
?>