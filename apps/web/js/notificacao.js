PubSub.subscribe('create-notification', function(topico, data){
    $.ajax({
        url: request + '/server/wp-json/wp/v2/notificacao/',
        method: 'POST',
        data:{
            status: "publish",
            meta_box: {
                user_ref: data.from,
                to_user_ref: data.to,
                tipo_notificacao: data.type,
                status: data.status
            },
        },
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'Basic ' + data.auth );
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            console.log(err.Message);
        },
        success: function(result) {
            //console.log(result)
        }
    });
});