function mensagem (string, type, classe) {
    if(!classe){
        classe = "msg-default";
    }
    var alertHTML = "<div class='alert alert-" + type + "'>" + string + "</div>";
    $( "." + classe ).html(alertHTML);
}