<?php 
$dat = new DateTime('now', new DateTimeZone('Asia/Kolkata'));
$date=$dat->format('H');
if($date < 12) 
  echo "Good morning"; 
else if($date < 17) 
  echo "Good afternoon";
else if($date<20)
  echo "Good evening"; 
else 
  echo "Good night"; 
?>