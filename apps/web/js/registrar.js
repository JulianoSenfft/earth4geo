jQuery(document).ready(function(){
    jQuery("#submeter").click(function() {
        var nome = jQuery("#name").val();
        var email = jQuery("#email").val();
        var password = jQuery("#password").val();
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/users',
            method: 'POST',
            data:{
                username: nome,
                email: email,
                password: password,
                description: "http://hnserver.com.br/~earth4geo/server/wp-content/uploads/f3.png",
                roles: "editor"
            },
            error: function(xhr, status, error) {
                var response = JSON.parse(xhr.responseText)
                if(!response.message){
                    response.message = "Ocorreu um erro, por favor tente novamente mais tarde."
                }
                mensagem(response.message, "danger", "register-message")
            },
            success: function(result) {
                
                var string = email + ":" + password;
                var crypt = btoa(string);
                
                setCookie("earth4geo", result.id, 7);
                setCookie("earth4geo_crypt", crypt, 7);
                checkCookie();
                
                mensagem("Registro efetuado com sucesso. Redirecionando...", "success", "login-message")
                window.setTimeout(function(){
                    window.location.href = request + "/apps/web/index-user.php";
                }, 500);
                
            }.bind(this)
        });
    }); 
});