<?php

$nameErr = $emailErr = $subjectErr =  "";
$name = $email = $subject = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
    }
  }

   if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["subject"])) {
    $subjectErr = "Subject is required";
  } else {
    $subject = test_input($_POST["subject"]);
  }
}

if (isset($_POST['name'])&& isset($_POST['email'])){
  $to = 'patrick@gazugroup.com';
}

//Send
$send = mail($to, $subject, $comment, $name, $email);
if ($send){
  echo '<br>';
  echo 'Thanks for contacting me, I will be with you shortly.';
}else{
  echo 'error';
} 

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<?php
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $message;
echo "<br>";
echo $subject;
?>
