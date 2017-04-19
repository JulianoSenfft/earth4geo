<?php
/*
Plugin Name: Earth 4 Geo
Plugin URI: www.creartcode.com
Description: Sistema base do Earth4Geo
Version: 1.0
Author: Juliano Senfft
Author URI: http://www.creartcode.com
License: GPLv2 or later
*/


define ('RADICALGEO','cac_geo');
require_once dirname(__FILE__) . "/cac_geo_meta_boxe.php";
require_once dirname(__FILE__) . "/cac_geo_post_type.php";
require_once dirname(__FILE__) . "/cac_geo_role.php";


// Aqui você pode carregar variáveis globais, que podem ser usados em qualquer arquivo ou plugin

global $geo;
//$earthgeo['plugin_url'] = plugin_dir_url('cac_creche') . "cac_creche";
?>
