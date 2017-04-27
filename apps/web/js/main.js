function getCurrentUserFeed(){
    $.ajax({
        url: 'http://macbook-pro-de-juliano.local/earth4geo/server/wp-json/wp/v2/publicacao',
        method: 'GET',
        error: function(xhr, status, error) {
          var err = eval("(" + xhr.responseText + ")");
          console.log(err.Message);
        },
        success: function(result) {
            return result;
        }.bind(this)
    });
}