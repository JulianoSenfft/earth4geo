jQuery(document).ready(function(){
    deleteCookie( "earth4geo" )
    deleteCookie( "earth4geo_crypt" )
    mensagem("Você foi desconectado.", "danger", "disconnect-message")
    /*$.ajax({
        url: request + '/server/wp-admin/admin-ajax.php',
        method: "POST",
        data: {
            action: "logout_usuario"
        },
        success: function(data) {
            deleteCookie( "earth4geo" )
            deleteCookie( "earth4geo_crypt" )
            mensagem("Você foi desconectado.", "danger", "disconnect-message")
        },
        error: function(xhr, status, error) {
            mensagem("Desculpe, algo deu errado.", "danger", "disconnect-message")
        }
    });*/
});