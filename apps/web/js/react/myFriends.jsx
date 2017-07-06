var MyFriends = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
            solicitacoes: [],
        };
    },
    
    componentDidMount: function() {
        this.getSolicitacoes();
        PubSub.subscribe('remove-solicitacao', function(topico, data){
            this.getSolicitacoes();
        }.bind(this));
        PubSub.subscribe('remove-solicitacao', function(topico, data){
            this.getSolicitacoes();
        }.bind(this));
    },
    
    getSolicitacoes: function(){
                
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/solicitacao?_embed&filter[order]=ASC&filter[meta_key]=to_user_ref&filter[meta_value]=' + user_id,
            method: 'GET',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            },
            success: function(result) {
                this.setState({solicitacoes: result});
            }.bind(this)
        });
    },
    
    render: function() {
        
        var solicitacoes = this.state.solicitacoes;
        
        return (
            <div>
                <Solicitacoes data={solicitacoes} />
            </div>
        );
    }

});  

var Solicitacoes = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    aceitaAmizade: function(id){
        
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/solicitacao/' + id,
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
                console.log(result)
                //PubSub.publish('', data);
            }
        });
    },
    
    recusaAmizade: function(id){
        
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/solicitacao/' + id,
            method: 'DELETE',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            },
            success: function(result) {
                PubSub.publish('remove-solicitacao', result);
            }
        });
    },
    
    render: function() {
        
        var self = this;
        return (
            <div>
                <div className='solicitacao-amizade'>
                    <h4>Solicitações</h4>
                    {this.props.data.map(function(data, i) {

                        var styles = {
                            backgroundImage: "url(" + data._embedded.author[0].description + ")",
                        };

                        var componentId = "user-" + data._embedded.author[0].id;

                        return (
                            <div>
                                <div className='list-friends'>
                                    <div className='info-post-author'>
                                        <div className='author-photo photo-default-feed'>
                                            <span style={styles} className="normal-user-photo"></span>
                                        </div>
                                        <div className='author-name'>
                                            {data._embedded.author[0].name}
                                        </div>
                                    </div>
                                    <div className="add-has-friend">
                                        <div className="add-has-friend-button" id={componentId} onClick={function(){self.aceitaAmizade(data.id)}}>
                                            <i className="fa fa-user-plus"></i>
                                        </div>
                                    </div>
                                    <div className="cancela-solicitacao">
                                        <div className="cancela-solicitacao-button" id={componentId} onClick={function(){self.recusaAmizade(data.id)}}>
                                            <i className="fa fa-times"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
});
