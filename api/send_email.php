<?php
    $to = $_POST['to'];
    $subject = $_POST['subject'];
    $msg = $_POST['msg'];
    $headers = 'From: iamtalib8010@gmail.com';

    if (!$to && !$subject && !$msg) {
        echo "missing_fields";
        // header("Location: index.php?msg= all field are required!");
    } else {
        if (mail($to, $subject, $msg, $headers)) {
            echo "success";
            // header("Location: index.php?msg= successfully send!");
        } else {
            echo "error";
            // header("Location: index.php?msg= something wen wrong!");
        }
    }
?>