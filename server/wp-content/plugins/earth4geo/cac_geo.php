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
require_once dirname(__FILE__) . "/cac_geo_functions.php";
require_once dirname(__FILE__) . "/cac_geo_post_type.php";
require_once dirname(__FILE__) . "/cac_geo_role.php";


add_filter( 'rest_prepare_user', function( $response, $user, $request ) {
    
    $user_info = get_userdata($user->ID);

    $response->data[ 'email' ] = $user_info->user_email;

    return $response;

}, 10, 3 );

add_action( 'rest_api_init', 'mb_rest_add_filters' );

function mb_rest_add_filters() {
	foreach ( get_post_types( array( 'show_in_rest' => true ), 'objects' ) as $post_type ) {
		add_filter( 'rest_' . $post_type->name . '_query', 'mb_rest_add_filters_param', 10, 2 );
	}
}

function mb_rest_add_filters_param( $args, $request ) {
	if ( empty( $request['filter'] ) || ! is_array( $request['filter'] ) ) {
		return $args;
	}
	$filter = $request['filter'];
    if ( isset($filter['meta_key']) && isset($filter['meta_value']) ){
        $meta_key = $filter['meta_key'];
        $meta_value = $filter['meta_value'];
        $compare = $filter['compare'];
        $args['meta_query'] = array(
            array(
                'key'     => $meta_key,
                'value'   => $meta_value,
                'compare' => $compare,
            )
        );
    }
    if ( is_array( $request['meta_key'] ) && is_array( $request['meta_value'] ) ){
        $args['posts_per_page'] = 1;
    }
	global $wp;
	$vars = apply_filters( 'query_vars', $wp->public_query_vars );
	foreach ( $vars as $var ) {
		if ( isset( $filter[ $var ] ) ) {
			$args[ $var ] = $filter[ $var ];
		}
	}
	return $args;
}

// Aqui você pode carregar variáveis globais, que podem ser usados em qualquer arquivo ou plugin

global $geo;
//$earthgeo['plugin_url'] = plugin_dir_url('cac_creche') . "cac_creche";
?>
