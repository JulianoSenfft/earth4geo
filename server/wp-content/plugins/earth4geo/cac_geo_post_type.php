<?php
/*-----------------------------------------------------------------------------------*/
/*------------------	          Criação de Post type                 --------------*/
/*-----------------------------------------------------------------------------------*/
if(!function_exists("create_cac_geo_post_types")){
    function create_cac_geo_post_types() {
        /*------------------       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx      --------------*/
        $caps_model = array(
            'read_post'             => null,
            'edit_post'             => null,
            'edit_posts'            => null,
            'delete_post'           => null,
            'delete_posts'          => null,
            'publish_posts'         => null,
            'edit_published_posts'  => null,
            'delete_published_posts'=> null,
            'read_private_posts'    => null,
            'edit_private_posts'    => null,
            'delete_private_posts'  => null,
            'edit_others_posts'     => null,
            'delete_others_posts'   => null,
        );
    }
    add_action( 'init', 'create_' . RADICALGEO . '_post_types' );
}

/*------------------       Post type PUBLICACOES    --------------*/
/*add_action('init', 'create_publicacoes');
function create_publicacoes() {
    $fin_args = array(
        'label' => __('Publicações'),
        'singular_label' => __('Publicações'),
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'post',
        'exclude_from_search' => false,
        'hierarchical' => false,
        'rewrite' => true,
        'show_in_rest' => true,
        'supports' => array('none')
    );
    register_post_type(RADICALGEO.'_publicacoes', $fin_args);
}*/
?>
