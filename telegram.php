<?php


/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

/* 6263733031:AAEw7bj3aV1OehsB63wSK04hsJpkLIXRP08 */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "6263733031:AAEw7bj3aV1OehsB63wSK04hsJpkLIXRP08";
$chat_id = "-1001881224029";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: gratitude.html');
} else {
  echo "Error";
}


?>