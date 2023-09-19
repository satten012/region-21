<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email']; // Добавляем получение email
$token = "6676560114:AAEfr4jsoKjMCOnVmZmc_fWNsoFXR7Iiu6Q";
$chat_id = "-1001901056917";

// Получаем информацию о том, какую форму заполнили
$form_type = isset($_POST['form_type']) ? $_POST['form_type'] : '';

// Создаем текст сообщения на основе информации о форме
$message = "Форма: $form_type\n";

if ($form_type == 'Была заполнена первая форма') {
    // Добавляем имя пользователя, email и роль только для первой формы
    $message .= "Имя пользователя: $name\n";
    $message .= "Email: $email\n"; // Включаем email в сообщение
    $message .= "Телефон: $phone\n";
    
    // Получаем выбранные значения чекбоксов только для первой формы
    $player = isset($_POST['player']) ? $_POST['player'] : '';
    $trainer = isset($_POST['trainer']) ? $_POST['trainer'] : '';
    $team = isset($_POST['team']) ? $_POST['team'] : '';
    $tourney = isset($_POST['tourney']) ? $_POST['tourney'] : '';
    $organization = isset($_POST['organization']) ? $_POST['organization'] : '';
    
    $message .= "Роль: ";
    $roles = array();
    
    if ($player) {
        $roles[] = "Гравця";
    }
    
    if ($trainer) {
        $roles[] = "Тренера";
    }
    
    if ($team) {
        $roles[] = "Команду";
    }
    
    if ($tourney) {
        $roles[] = "Турнір";
    }
    
    if ($organization) {
        $roles[] = "Організацію";
    }
    
    if (!empty($roles)) {
        $message .= implode(", ", $roles);
    } else {
        $message .= "Не было заполнено";
    }


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text=" . urlencode($message), "r");
}

else{
   // Добавляем имя пользователя, email и роль только для первой формы
   $message .= "Имя пользователя: $name\n";
   $message .= "Телефон: $phone\n";


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text=" . urlencode($message), "r");
}

?>