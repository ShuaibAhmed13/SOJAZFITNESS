<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

//Collects post data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

var_dump($request);

//Cleans data
$firstName = $request->firstName;
$lastName = $request->lastName;
$email = $request->email;
$message = $request->message;
$name = $firstName." ".$lastName;

$to = "jonc9011@gmail.com";
$email_subject="Message from contact form on Sojaz Fitness website: ".$name;
$email_body= "This is an automated email from Sojaz Fitness with the following message \n\n".
  "Name of the person:".$name.
  "\n\n Email Address:". $email.
  "\n\n Message:".$message;
$headers = "From: jonc9011@gmail.com";

//mail($to, $email_subject, $email_body, $headers );

if(mail($to, $email_subject, $email_body, $headers )) {
  echo json_encode("success");
}else {
  echo json_encode("failure");
}
?>
