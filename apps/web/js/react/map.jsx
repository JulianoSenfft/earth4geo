var Map = React.createClass({
    
    getInitialState: function() {
        return {data: []};
    },
    
    chamaAjax: function(){
        $.ajax({
            url: request + '/server/wp-json/wp/v2/publicacao?_embed',
            method: 'GET',
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              console.log(err.Message);
            },
            success: function(result) {
                renderMap(result);
                this.setState({data: result});
                var posts = result;
            }.bind(this)
        });
    },
    
    componentDidMount: function() {
        this.chamaAjax();
        
        PubSub.subscribe('atualiza-lista-posts', function(topico){
            this.chamaAjax();
        }.bind(this));
    },
    
    render: function() {
        return (
            <div>
                <div id="map"></div>
            </div>
        )
    }
});