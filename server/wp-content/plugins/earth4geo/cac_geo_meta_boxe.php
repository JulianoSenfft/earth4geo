<?php
/*-----------------------------------------------------------------------------------*/  
/*------------------	          Criação de Meta Boxe                 --------------*/
/*-----------------------------------------------------------------------------------*/
add_filter( 'rwmb_meta_boxes', 'cac_geo_meta_boxes' );
function cac_geo_meta_boxes( $meta_boxes ) {
    $meta_boxes[] = array(
        'title'      => 'Dados da publicação',
        'post_types' => 'publicacao',
        'fields'     => array(
            array(
                'id'   => 'name',
                'name' => __( 'Name', 'textdomain' ),
                'type' => 'text',
            ),
        ),
    );
    $meta_boxes[] = array(
        'title'      => 'Dados da publicação2',
        'post_types' => 'publicacao',
        'fields'     => array(
            array(
                'id'   => 'name',
                'name' => __( 'Name', 'textdomain' ),
                'type' => 'text',
            ),
        ),
    );
    return $meta_boxes;
}
?>