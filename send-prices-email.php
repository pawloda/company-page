<?php
  $to = "info@aurametall.de";
  $subject = "Zapytanie o wycene - AuraMetall";
  $fromEmail = $_POST['email'];
  $boundary = md5(uniqid(time())); // Create a unique boundary

  // Email headers
  $headers = "From: $fromEmail\r\n";
  $headers .= "Reply-To: $fromEmail\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $headers .= "Content-Type: multipart/mixed; charset=\"utf-8\"\r\n";
  $headers .= "Content-Transfer-Encoding: 8bit\r\n";

  // Email body (multipart)
  $body = "--$boundary\r\n";
  $body .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
  $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";

  $body .= "Dane kontaktowe:\n";
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

  $body .= "Dodatkowe informacje:\n" . $_POST['message'] . "\n\n";

  // Attach multiple images
  if (isset($_FILES['images'])) {
    foreach ($_FILES['images']['tmp_name'] as $key => $tmp_name) {
        if ($_FILES['images']['error'][$key] === UPLOAD_ERR_OK) {
            $fileTmpPath = $tmp_name;
            $fileName = basename($_FILES['images']['name'][$key]);
            $fileType = mime_content_type($fileTmpPath);
            $fileData = chunk_split(base64_encode(file_get_contents($fileTmpPath)));

            $body .= "--$boundary\r\n";
            $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n";
            $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
            $body .= $fileData . "\r\n";
        }
    }
  }

  $body .= "--$boundary--";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
      echo "success";
  } else {
      echo "fail";
  }
?>