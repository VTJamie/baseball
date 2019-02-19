<?php
include_once '../libs/epiphany/Epi.php';
include_once 'domain/Message.php';
include_once 'datasource/MessageDataSource.php';

Epi::init('route');
getRoute()->post('/addmessage', 'saveMessage');
getRoute()->get('/messages/([\\-0-9.]+)/([\\-0-9.]+)', 'messages');
getRoute()->run();

function saveMessage() {
    header('Content-Type: application/json', true);
    MessageDataSource::deleteOldMessages();
    MessageDataSource::saveMessage(new Message(json_decode(file_get_contents('php://input'))));
}

function messages($lat, $long) {
    header('Content-Type: application/json', true);
    MessageDataSource::deleteOldMessages();
    echo json_encode(MessageDataSource::getMessages($lat, $long));
}


?>
