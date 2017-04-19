<?php
/*-----------------------------------------------------------------------------------*/  
/*------------------	            Criação de Role                    --------------*/
/*-----------------------------------------------------------------------------------*/
if(!function_exists("create_".RADICALGEO."_roles")){
    function create_cac_geo_roles()
    {
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
        /*------------------             Role administrator                --------------*/
        
        $caps = array();
        
        $post_type_name = RADICALGEO . '_publicacoes';
        
        foreach($caps_model as $capk => $capi){
            $caps[] = str_replace('post', $post_type_name, $capk);
        }
        
        $taxonomy_name = RADICALGEO."_txy_cat_cliente";
        
        
        $caps[] = "manage_{$taxonomy_name}";
        $caps[] = "edit_{$taxonomy_name}";
        $caps[] = "delete_{$taxonomy_name}";
        $caps[] = "assign_{$taxonomy_name}";
        $caps[] = 'level_0';
        $caps[] = 'read';
	
        
        $role = get_role('administrator');
        
        if(is_object( $role )){
            foreach($caps as $item){
                $role->add_cap($item);
            }
        }
    }
    add_action( 'init', 'create_'.RADICALGEO.'_roles' );
} else {
    die("função create_".RADICALGEO."_roles já existe");
}
?>