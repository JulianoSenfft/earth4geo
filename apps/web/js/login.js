jQuery(document).ready(function(){
    jQuery("#submeter").click(function() {
        var email = jQuery("#email").val();
        var password = jQuery("#password").val();
        $.ajax({
            url: request + '/server/wp-admin/admin-ajax.php',
            method: "POST",
            data: {
                action: "autentica_usuario",
                email: email,
                password: password
            },
            success: function(data) {
                
                var string = email + ":" + password;
                var crypt = btoa(string);

                setCookie("earth4geo", data, 7);
                setCookie("earth4geo_crypt", crypt, 7);
                checkCookie();
                mensagem("Login efetuado com sucesso", "success", "login-message")
            },
            error: function(xhr, status, error) {
                mensagem("Usuário ou senha inválidos", "danger", "login-message")
                console.log("usuário ou senha inválidos");
            }
        });
    }); 
});
