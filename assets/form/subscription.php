<?php // for MailChimp API v3.0

include('mailchimp/MailChimp.php');  // path to API wrapper downloaded from GitHub
include('subscription_config.php');  // mailchimp configurations

use \DrewM\MailChimp\MailChimp;

function storeAddress() {

    $key        = KEY;
    $list_id    = LIST_ID;


    $mc = new MailChimp($key);

    // add the email to your list
    $result = $mc->post('/lists/'.$list_id.'/members', array(
            'email_address' => $_POST['email'],
            'status'        => 'pending'     // double opt-in
            // 'status'     => 'subscribed'  // single opt-in
        )
    );

    return json_encode($result);

}

// If being called via ajax, run the function, else fail

if ($_POST['ajax']) { 
    echo storeAddress(); // send the response back through Ajax
} else {
    echo 'Method not allowed - please ensure JavaScript is enabled in this browser';
}