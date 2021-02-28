<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    // Post data
    $postdata = file_get_contents("php://input");
    $result = json_decode($postdata);
  
    $toEmail = 'ahmedgozif@localhost';
    $subject = 'Contact Request From' . $result->name;
    $body = '<h2> Conatct Request</h2>
        <h4>Name</h4><p> ' . $result->name . '</p>
        <h4>E-MAil</h4><p> ' . $result->email . '</p>
        <h4>Message</h4><p> ' . $result->message . '</p>';

    // Email Headers
    $headers = 'MIME-Version: 1.0 ' . '\r\n';
    $headers .= 'Content-Type:text/html;charset=UTF-8' . '\r\n';

    // Additional Headers
    $headers .= 'From: ' .$result->name . "< " . $result->email . " > "  . '\r\n';
    $response = mail($toEmail,$subject,$body,$headers) ? 'Sent' : 'Error';


    echo json_encode($response);

?>