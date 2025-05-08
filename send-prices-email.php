<?php
  $to = "info@aurametall.de";
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

  // Attach image if uploaded
  if (isset($_FILES['image']) && $_FILES['image']['error'] == UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['image']['tmp_name'];
    $fileName = basename($_FILES['image']['name']);
    $fileType = mime_content_type($fileTmpPath);
    $fileData = chunk_split(base64_encode(file_get_contents($fileTmpPath)));

    $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
    $body .= $fileData . "\r\n";
  }

  $body .= "Dodatkowe informacje:\n" . $_POST['message'] . "\n";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    echo "fail";
  }
?>