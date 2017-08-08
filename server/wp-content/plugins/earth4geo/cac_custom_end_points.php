<?php

function amizade( $data ) {
    
    $retorno = array();
    $already_friends = 0;
    
    $friend_list_user_1 = get_user_meta($data['user1'], 'friends', 1);
    $friend_list_user_2 = get_user_meta($data['user2'], 'friends', 1);
    
    
    //USER 1
    if( is_array($friend_list_user_1) ){
        if (in_array($data['user2'], $friend_list_user_1)) {
            $already_friends = 1;
        }else{
            $update_user_1 = $friend_list_user_1;
            array_push($update_user_1, $data['user2']);
        }
    }else{
        $update_user_1 = array();
        $update_user_1[0] = $data['user2'];
    }
    
    //USER 2
    if( is_array($friend_list_user_2) ){
        if (in_array($data['user1'], $friend_list_user_2)) {
            $already_friends = 1;
        }else{
            $update_user_2 = $friend_list_user_2;
            array_push($update_user_2, $data['user1']);   
        }
    }else{
        $update_user_2 = array();
        $update_user_2[0] = $data['user1'];
    }
    
    if($already_friends == 1){
        return new WP_Error( 'already_friends', 'Already Friends', array( 'status' => 404 ) );
    }else{
        
        update_user_meta($data['user1'], 'friends', $update_user_1);
        update_user_meta($data['user2'], 'friends', $update_user_2);
        
        $retorno['friend_list_user_1'] = get_user_meta($data['user1'], 'friends', 1);
        $retorno['friend_list_user_2'] = get_user_meta($data['user2'], 'friends', 1);
        return $retorno; 
    }
}
add_action( 'rest_api_init', function () {
	register_rest_route( 'wp/v2/amizade', '/user/(?P<id>\d+)', array(
		'methods' => 'POST',
		'callback' => 'amizade',
        'args' => array(
			'id' => array(
				'validate_callback' => function($param, $request, $key) {
					return is_numeric( $param );
				}
			),
		),
	));
});



function desfaz_amizade( $data ) {
    
    $user1 = $data["user1"];
    $user2 = $data["user2"];
    
    $friends_1 = get_user_meta($user1, 'friends', 1);
    $friends_2 = get_user_meta($user2, 'friends', 1);
    
    /*foreach (array_keys($friends_1, $user2) as $key) {
        unset($friends_1[$key]);
    }
    
    foreach (array_keys($friends_2, $user1) as $key) {
        unset($friends_2[$key]);
    }*/
    
    if(($key = array_search($user1, $friends_2)) !== false) {
        unset($friends_2[$key]);
    }
    
    if(($key2 = array_search($user2, $friends_1)) !== false) {
        unset($friends_1[$key2]);
    }
    
    update_user_meta($user1, "friends", array_values($friends_1));
    update_user_meta($user2, "friends", array_values($friends_2));
    
    //update_user_meta(1, "friends", "");
    //update_user_meta(11, "friends", "");
    //update_user_meta(13, "friends", "");
    
    return 1;
}
add_action( 'rest_api_init', function () {
	register_rest_route( 'wp/v2/desfaz_amizade', '/user/(?P<id>\d+)', array(
		'methods' => 'POST',
		'callback' => 'desfaz_amizade',
	));
});

