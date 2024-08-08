<?php 
    // Import PHPMailer classes into the global namespace
    // These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'vendor/autoload.php';
    require 'sendmail_config.php';

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);

    $mail = new PHPMailer;
    $mail->isSMTP();                                      
    $mail->Host = HOST;  
    $mail->SMTPAuth = true;                              
    $mail->Username = USERNAME;                 
    $mail->Password = PASSWORD;                           
    $mail->SMTPSecure = SMTPSECURE;                            
    $mail->Port = PORT;   
    $mail->SMTPDebug = 0;                                
    
    $mail->setFrom(FROM, F_NAME);
    $mail->addAddress(TO, TO_NAME);     
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);                                 
    $mail->Subject = 'From Aonomy contact form by '. $name;
    $mail->Body    = '<strong> Name: </strong>'.$name.' <br /><strong>Message: </strong>'.$message ;

    $mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

    if(!empty($phone)) {
        $mail->Body .= '<br/><strong>Phone: </strong>'. $phone;
    }
    
    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        $signal = 'ok';
        $msg = 'Thank you for contacting us. We will get back to you shortly.';
    }
    $data = array(
        'signal' => $signal,
        'msg' => $msg
    );
    echo json_encode($data);
?>