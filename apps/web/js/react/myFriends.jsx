var MyFriends = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
            solicitacoes: [],
            amigos: [],
        };
    },
    
    componentDidMount: function() {
        this.getSolicitacoes();
        this.getAmigos();
        PubSub.subscribe('remove-solicitacao', function(topico, data){
            this.getSolicitacoes();
        }.bind(this));
        PubSub.subscribe('lista-amigos', function(topico, data){
            this.getAmigos();
        }.bind(this));
    },
    
    getSolicitacoes: function(){
                
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/solicitacao?_embed&filter[order]=DESC&filter[meta_key]=to_user_ref&filter[meta_value]=' + user_id,
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
    
    getAmigos: function(){
        
        console.log("getAmigos")
                
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/users/' + user_id,
            method: 'GET',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            },
            success: function(result) {
                if(result.friends.length > 0){
                    $.ajax({
                        url: request + '/server/wp-json/wp/v2/users?filter[include]=' + result.friends,
                        method: 'GET',
                        beforeSend: function ( xhr ) {
                            xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
                        },
                        error: function(xhr, status, error) {
                            var err = eval("(" + xhr.responseText + ")");
                            console.log(err.Message);
                        },
                        success: function(amigos) {
                            this.setState({amigos: amigos});
                        }.bind(this)
                    }); 
                }else{
                    this.setState({amigos: []});
                }
            }.bind(this)
        });
    },
    
    render: function() {
        
        var solicitacoes = this.state.solicitacoes;
        var amigos = this.state.amigos;
        
        return (
            <div>
                <Solicitacoes data={solicitacoes} />
                <ListaUsuarios data={amigos} />
            </div>
        );
    }

});  

var ListaUsuarios = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    componentDidMount: function() {
    },
    
    desfazAmizade: function(id){
        
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/desfaz_amizade/user/11',
            method: 'POST',
            data: {
                user1: user_id,
                user2: id,
            },
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            },
            success: function(result) {
                console.log(result)
                PubSub.publish('lista-amigos', 'data');
            }
        });
    },
    
    render: function() {
        
        var self = this;
        return (
            <div>
                <div className='lista-amigos'>
                    <h4>Seus amigos</h4>
                    {this.props.data.map(function(data, i) {

                        var styles = {
                            backgroundImage: "url(" + data.description + ")",
                        };

                        var componentId = "user-" + data.id;

                        return (
                            <div>
                                <div className='list-friends'>
                                    <div className='info-post-author'>
                                        <div className='author-photo photo-default-feed'>
                                            <span style={styles} className="normal-user-photo"></span>
                                        </div>
                                        <div className='author-name'>
                                            {data.name}
                                        </div>
                                    </div>
                                    <div className="desfaz-amizade">
                                        <div className="desfaz-amizade-button" onClick={function(){self.desfazAmizade(data.id)}}>
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

var Solicitacoes = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    componentDidMount: function() {
        PubSub.subscribe('cria-laco-amizade', function(topico, users, solicitacaoId){
            this.criaLacoAmizade(users.user1, users.user2, users.solicitacaoId);
        }.bind(this));
        PubSub.subscribe('deleta-solicitacao', function(topico, solicitacaoId){
            this.deletaSolicitacao(solicitacaoId);
        }.bind(this));
    },
    
    aceitaAmizade: function(id){
        
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        //getting users
        $.ajax({
            url: request + '/server/wp-json/wp/v2/solicitacao/' + id,
            method: 'GET',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            },
            success: function(result) {
                var users = {
                    user1: result.meta_box.to_user_ref,
                    user2: result.meta_box.user_ref,
                    solicitacaoId: id
                }
                PubSub.publish('cria-laco-amizade', users);
            }
        });
    },
    
    criaLacoAmizade: function(user1, user2, solicitacaoId){
        
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/amizade/user/1',
            method: 'POST',
            data: {
                user1: user1,  
                user2: user2,  
            },
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            },
            success: function(result) {
                PubSub.publish('deleta-solicitacao', solicitacaoId);
                PubSub.publish('lista-amigos', 'data');
            }
        });
    },
    
    deletaSolicitacao: function(id){
        
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
        console.log("this.props.data")
        console.log(this.props.data.length)
        if(this.props.data.length > 0){
            return (
                <div>
                    <div className='solicitacao-amizade'>
                        <h5>Solicitações</h5>
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
                                            <div className="cancela-solicitacao-button" id={componentId} onClick={function(){self.deletaSolicitacao(data.id)}}>
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
        }else{
            return(<div></div>)
        }
    }
});
