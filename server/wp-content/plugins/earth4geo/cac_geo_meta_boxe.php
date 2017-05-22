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
            //TEXT
            array(
                'name' => 'Titulo',
                'id'   => 'titulo',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'Imagem',
                'id'   => 'imagem',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'Conteúdo',
                'id'   => 'conteudo',
                'type' => 'textarea',
            ),
            //TEXT
            array(
                'name' => 'Latitude',
                'id'   => 'latitude',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'Longitude',
                'id'   => 'longitude',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'País',
                'id'   => 'pais',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'Estado',
                'id'   => 'estado',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'Likes',
                'id'   => 'likes',
                'type' => 'text',
            ),
        ),
    );
    $meta_boxes[] = array(
        'title'      => 'Dados do comentario',
        'post_types' => 'comentarios',
        'fields'     => array(
            //TEXT
            array(
                'name' => 'Post ID',
                'id'   => 'post_id',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'Imagem',
                'id'   => 'imagem',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'Conteúdo',
                'id'   => 'conteudo',
                'type' => 'textarea',
            ),
            //TEXT
            array(
                'name' => 'Likes',
                'id'   => 'likes',
                'type' => 'textarea',
            ),
        ),
    );
    $meta_boxes[] = array(
        'title'      => 'Dados da notificação',
        'post_types' => 'notificacao',
        'fields'     => array(
            //TEXT
            array(
                'name' => 'Post ID',
                'id'   => 'post_id',
                'type' => 'text',
            ),
            //TEXT
            array(
                'name' => 'Tipo de notificação',
                'id'   => 'tipo_notificacao',
                'type' => 'text',
            ),
        ),
    );
    return $meta_boxes;
}
?>