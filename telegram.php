


<?php

$name = $_POST['name'];
$phone = $_POST['phone'];


// Получаем выбранные значения чекбоксов
$player = isset($_POST['player']) ? $_POST['player'] : '';
$trainer = isset($_POST['trainer']) ? $_POST['trainer'] : '';
$team = isset($_POST['team']) ? $_POST['team'] : '';
$tourney = isset($_POST['tourney']) ? $_POST['tourney'] : '';
$organization = isset($_POST['organization']) ? $_POST['organization'] : '';

// Получаем информацию о том, какую форму заполнили
$form_type = isset($_POST['form_type']) ? $_POST['form_type'] : '';

// Создаем текст сообщения на основе выбранных значений и информации о форме
$message = "Форма: $form_type\n";
$message .= "Имя пользователя: $name\n";
$message .= "Телефон: $phone\n";
$message .= "Роль: ";
if ($player) $message .= "Гравця, ";
if ($trainer) $message .= "Тренера, ";
if ($team) $message .= "Команду, ";
if ($tourney) $message .= "Турнір, ";
if ($organization) $message .= "Організацію, ";
$message = rtrim($message, ", "); // Удаляем последнюю запятую и пробел

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text=" . urlencode($message), "r");





?>