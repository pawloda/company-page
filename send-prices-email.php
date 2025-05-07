<?php
  $to = "aurametallpl@gmail.com";
  $subject = "Zapytanie o wycenę - AuraMetall";

  $headers = "From: " . $_POST['email'] . "\r\n";
  $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

  $body = "Dane kontaktowe:\n";
  $body .= "Imię i nazwisko: " . $_POST['name'] . "\n";
  $body .= "Adres: " . $_POST['address'] . ", " . $_POST['zip'] . " " . $_POST['city'] . "\n";
  $body .= "Telefon: " . $_POST['phone'] . "\n";
  $body .= "Email: " . $_POST['email'] . "\n\n";

  $body .= "Wymiary:\n";
  $body .= "A: " . $_POST['dimension-a'] . " m\n";
  $body .= "B: " . $_POST['dimension-b'] . " m\n";
  $body .= "C: " . $_POST['dimension-c'] . " m\n";
  $body .= "D: " . $_POST['dimension-d'] . " m\n";
  $body .= "H: " . $_POST['dimension-h'] . " m\n\n";

  $body .= "Rodzaj materiału: " . $_POST['material'] . "\n";
  $body .= "Brama: " . $_POST['brama'] . "\n";
  $body .= "Furtka: " . $_POST['furtka'] . "\n";
  $body .= "Płot: " . $_POST['plot'] . "\n";
  $body .= "Automat: " . $_POST['automat'] . "\n\n";

  $body .= "Dodatkowe informacje:\n" . $_POST['message'] . "\n";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    echo "fail";
  }
?>