<?php
  $to = "info@aurametall.de";
  $subject = "Skontaktuj się z nami - AuraMetall";
  $fromEmail = $_POST['email'];

  // Email headers
  $headers = "From: $fromEmail\r\n";
  $headers .= "Reply-To: $fromEmail\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $headers .= "Content-Transfer-Encoding: 8bit\r\n";

  // Email body
  $body = "Dane kontaktowe:\n";
  $body .= "Imię i nazwisko: " . $_POST['name'] . "\n";
  $body .= "Telefon: " . $_POST['phone'] . "\n";
  $body .= "Email: " . $_POST['email'] . "\n\n";
  $body .= "Dodatkowe informacje:\n" . $_POST['message'] . "\n";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
      echo "success";
  } else {
      echo "fail";
  }
?>