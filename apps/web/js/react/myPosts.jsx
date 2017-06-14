var MyPosts = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
            loading: true,
        };
    },
    
    getPostList: function(){
        
        var user_id = checkCookie();
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/publicacao?_embed&filter[author]=' + user_id,
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
    
    viewMore: function(data) {
        PubSub.publish('carrega-ver-mais', data);
    },

    render: function() {
        var self = this;
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
