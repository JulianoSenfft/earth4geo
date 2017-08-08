var Map = React.createClass({
    
    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function() {
        this.chamaAjax();
        
        PubSub.subscribe('atualiza-lista-posts', function(topico){
            this.chamaAjax();
        }.bind(this));
        
        PubSub.subscribe('filtra-mapa', function(topico, id){
            this.chamaAjax(id, 1)
        }.bind(this));
    },
    
    chamaAjax: function(id, isFilter){
        
        var filter = "";
        if(id){
            filter = "&filter[meta_key]=tipo&filter[meta_value]=" + id
        }
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/publicacao?_embed' + filter,
            method: 'GET',
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              console.log(err.Message);
            },
            success: function(result) {
                renderMap(result)
                this.setState({data: result});
                var posts = result;
            }.bind(this)
        });
    },
    
    render: function() {
        return (
            <div>
                <div id="map"></div>
            </div>
        )
    }
});