<?php

// PHPMailer config file

define("HOST",       "smtp.yourdomain.com"); // Specify main and backup SMTP servers
define("USERNAME",   "user@domain.com"); // SMTP username
define("PASSWORD",   "secretpassword"); // SMTP Password
define("SMTPSECURE", "tls"); // Enable TLS encryption, `ssl` also accepted
define("PORT",       "587");  // TCP port to connect to
define("FROM",       "sender@domain.com"); // Add a sender email address
define("F_NAME",     "Sender Name"); // Add a sender name
define("TO",         "recipient@domain.com"); // Add a recipient email address
define("TO_NAME",    "Recipient Name"); // Add a recipient name

?>