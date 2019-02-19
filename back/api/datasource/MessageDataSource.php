<?php
    class MessageDataSource {
        private static function getConnection() {
            $hostname = '';
            $username = '';
            $password = '';
            $dbname   = '';

//            $hostname = '127.0.0.1';
//            $username = 'root';
//            $password = '';
//            $dbname   = 'geotag';

            if($curconn = mysqli_connect($hostname, $username, $password) OR DIE ('Unable to connect to database! Please try again later.'))
            {
                mysqli_select_db($curconn, $dbname);
                return $curconn;
            }
            else {
                echo 'Failed to Connect';
            }
            return $curconn;
        }

        public static function getMessages($lat, $long) {
            $conn = MessageDataSource::getConnection();
            $array = array();
            $latvar = 0.00014*3;
            $longvar = 0.00021*3;
            $latmin = $lat - $latvar;
            $latmax = $lat + $latvar;
            $longmin = $long - $longvar;
            $longmax = $long + $longvar;
            if($conn) {
                $query = 'SELECT message, latitude, longitude, altitude FROM messages where (latitude <= ?) && (latitude >= ?) && (longitude <= ?) && (longitude >= ?)';
                $stmt = mysqli_prepare($conn, $query);
                if ($stmt) {
                    mysqli_stmt_bind_param($stmt, "dddd", $latmax, $latmin, $longmax, $longmin);
                    if (mysqli_stmt_execute($stmt)) {
                         mysqli_stmt_bind_result($stmt, $qmessage, $qlatitude, $qlongitude, $qaltitude);
                        while(mysqli_fetch($stmt)) {
                            $message = new Message($qlatitude, $qlongitude, $qaltitude, $qmessage);
                            //$message = new Message;
                            $array[] = $message;
                        }
                    }
                    mysqli_stmt_close($stmt);

                }
                else {
                    print "Query Failed ";
                }
                mysqli_close($conn);
            }
            else {
                echo 'Failed to Connect';
            }
            return $array;
        }

        public static function saveMessage($message) {
            $conn = MessageDataSource::getConnection();

            if($conn) {
                $query = 'INSERT INTO messages (message, latitude, longitude, altitude, created) VALUES (?, ?, ?, ?, NOW())';
                $stmt = mysqli_prepare($conn, $query);
                if ($stmt) {
                    mysqli_stmt_bind_param($stmt, "sddd", $message->message, $message->latitude, $message->longitude, $message->altitude);

                    mysqli_stmt_execute($stmt);

                    mysqli_stmt_close($stmt);
                    echo json_encode($message);
                }
                else {
                    echo 'statement failed';
                }
                mysqli_close($conn);
            }
            else {
                echo 'Failed to Connect';
            }
        }

        public static function deleteOldMessages() {
            $conn = MessageDataSource::getConnection();

            if($conn) {
                $query = 'delete from messages where created < DATE_SUB(NOW(), INTERVAL 31 DAY)';
                $stmt = mysqli_prepare($conn, $query);
                if ($stmt) {
                    mysqli_stmt_execute($stmt);

                    mysqli_stmt_close($stmt);
                }
                else {
                    echo 'statement failed';
                }
                mysqli_close($conn);
            }
            else {
                echo 'Failed to Connect';
            }


        }
    }

?>