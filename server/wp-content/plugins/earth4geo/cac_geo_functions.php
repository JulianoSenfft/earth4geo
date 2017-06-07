<?php
if(!function_exists("autentica_usuario")){
    function autentica_usuario(){

        $user = $_REQUEST['email'];
        $pass = $_REQUEST['password'];

        if (!$user) {
            header('HTTP/1.1 503 Service Unavailable');
        } else {
            $login_data = array();
            $login_data['user_login'] = $user;
            $login_data['user_password'] = $pass;
            $login_data['remember'] = $remember;
            $user_verify = wp_signon( $login_data, false );

            if ( is_wp_error($user_verify) ) {
                header('HTTP/1.1 503 Service Unavailable');
            } else {
                echo $user_verify->ID;
            }
            
            wp_logout();
            die();
        }
    }
}
add_action('wp_ajax_autentica_usuario', 'autentica_usuario', 1);
add_action('wp_ajax_nopriv_autentica_usuario', 'autentica_usuario', 1);


if(!function_exists("logout_usuario")){
    function logout_usuario(){
        wp_logout();
    }
}
add_action('wp_ajax_logout_usuario', 'logout_usuario', 1);
add_action('wp_ajax_nopriv_logout_usuario', 'logout_usuario', 1);