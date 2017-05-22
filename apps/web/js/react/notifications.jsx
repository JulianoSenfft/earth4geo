
var Notifications = React.createClass({
    
    getInitialState: function() {
        return {data: []};
    },
    
    
    componentDidMount: function() {
        
        PubSub.subscribe('atualiza-lista-posts', function(topico){
            this.getPostList();
        }.bind(this));
    },

    render: function() {
        var self = this;
        return (
            <div>
                Teste
            </div>
        );
    }

});  
