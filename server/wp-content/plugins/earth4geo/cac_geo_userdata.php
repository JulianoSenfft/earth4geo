<?php
function add_contact_methods( $profile_fields ) {
    $profile_fields['friends']  = "Friends";
    $profile_fields['profile_photo']  = "Profile Photo";

    return $profile_fields;
}
add_filter( 'user_contactmethods', 'add_contact_methods' );

//PARA O REST API
function friend_list_data() {
    register_rest_field( 'user',
        'friends',
        array(
            'get_callback'  => 'rest_get_user_field',
            'update_callback'   => null,
            'schema'            => null,
         )
    );
}
add_action( 'rest_api_init', 'friend_list_data' );

function profile_photo_data() {
    register_rest_field( 'user',
        'profile_photo',
        array(
            'get_callback'  => 'rest_get_user_field',
            'update_callback'   => null,
            'schema'            => null,
         )
    );
}
add_action( 'rest_api_init', 'profile_photo_data' );

function rest_get_user_field( $user, $field_name, $request ) {
    return get_user_meta( $user[ 'id' ], $field_name, true );
}

//BUSCANDO USUARIOS
add_filter( 'rest_user_query' , 'custom_rest_user_query', 10, 2 );
function custom_rest_user_query( $prepared_args, $request ) {
    if($request['filter']['search']){
        /*$prepared_args['search'] = "*" . $request['filter']['search'] . "*";   
        $prepared_args['search_columns'] = array(
            'user_login',
            'user_nicename',
            'user_email',
            'user_url',
        );*/
    }
    
	$filters = $request['filter'];
    
    if($filters){
        $i = 0;
        foreach($filters as $key => $value){
            $prepared_args[$key] = $value;
            $i++;
        }
    }

    
    return $prepared_args;
}












