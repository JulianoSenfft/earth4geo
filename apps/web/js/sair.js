jQuery(document).ready(function(){
    deleteCookie( "earth4geo" )
    deleteCookie( "earth4geo_crypt" )
    mensagem("Você foi desconectado. Redirecionando...", "danger", "disconnect-message")
    window.setTimeout(function(){
        window.location.href = request + "/apps/web/";
    }, 600);
});