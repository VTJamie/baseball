<?php
   class Message {

       public function __construct($objorlat = 0, $long = 0, $alt = 0, $mess = '') {
            if(gettype($objorlat) == "object") {
                $this->message = $objorlat->message;
                $this->latitude = $objorlat->latitude;
                $this->longitude = $objorlat->longitude;
                $this->altitude = $objorlat->altitude;
            }
            else {
                $this->message = $mess;
                $this->latitude = $objorlat;
                $this->longitude = $long;
                $this->altitude = $alt;
            }
       }

       public $message = '';
       public $latitude = 0.0;
       public $longitude = 0.0;
       public $altitude = 0.0;
   }
?>