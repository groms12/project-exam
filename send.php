<?php
    $userName=$_POST['userName'];
    $userPhone=$_POST['userPhone'];
    $userEmail=$_POST['userEmail'];

// Load Composer's autoloader
require_once 'phpMailer/Exception.php';
require_once 'phpMailer/PHPMailer.php';
require_once 'phpMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'groms470@gmail.com';                     // SMTP username
    $mail->Password   = 'Fybhfv1204';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;   
    $mail->CharSet = "UTF-8";                                 // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('groms470@gmail.com', 'Марина');
    $mail->addAddress('gms1204@mail.ru'); 

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка сайта';
    $mail->Body    = "Пользователь оставил данные $(userName)";

    if ($mail->send())  {
        echo "ok";
    }  
    else {
        echo "Письмо не отправлено. Код ошибки: {$mail->ErrorInfo}";
    }

} catch (Exception $e) {
    echo "Ошибка: {$mail->ErrorInfo}";
}
?>