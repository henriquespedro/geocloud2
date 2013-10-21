<?php
namespace app\conf;

class App
{
    static $param = array(
        "host" => "http://local2.mapcentia.com",
        "userHostName" => "http://local2.mapcentia.com",
        "domain" => "mapcentia.com",
        "path" => "/mnt/hgfs/Documents/www/geocloud2/",
        "sessionName" => "PHPSESSID",
        "databaseTemplate" => "hjahjs",
        "useWktToGmlInPHP" => false,
        "gMapsApiKey" => "ABQIAAAAixUaqWcOfE1cqF2LJyDYCdTww2B3bmOd5Of57BUV-HZKowzURRTDiOeJ4A8o-OZoiMfdrJzdG3POiw"
    );
    function __construct(){
        spl_autoload_register(function ($className) {
            $ds = DIRECTORY_SEPARATOR;
            $dir = App::$param['path'];
            $className = strtr($className, '\\', $ds);
            $file = "{$dir}{$className}.php";
            //echo $file . "<br>";
            //die();
            if (is_readable($file)) {
                require_once $file;
            }
        });
        set_include_path(get_include_path() . PATH_SEPARATOR . App::$param['path'] . PATH_SEPARATOR . App::$param['path'] . "app" . PATH_SEPARATOR . App::$param['path'] . "app/libs/PEAR/");
    }
}