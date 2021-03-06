var Feed = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
            loading: true,
        };
    },
    
    getPostList: function(){
        $.ajax({
            url: request + '/server/wp-json/wp/v2/publicacao?_embed',
            method: 'GET',
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              console.log(err.Message);
            },
            success: function(result) {
                this.setState({data: result});
            }.bind(this)
        });
    },
    
    componentDidMount: function() {
        
        this.getPostList();
        
        PubSub.subscribe('atualiza-lista-posts', function(topico){
            this.getPostList();
        }.bind(this));
        
    },
    
    render: function() {
        return (
            <div>
                {this.state.data.map(function(data, i) {
                    return (
                        <InfoFeed data={data} />
                    )
                })}
            </div>
        );
    }

});  
