var Findfriends = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
            tipopost: []
        };
    },
    
    componentDidMount: function() {
        
    },
    
    alteraTipoPost: function(tipo){
        this.setState({tipopost: tipo});
    },
    
    searchFriends: function(){
        
        var key = jQuery("#search").val()
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/users?filter[search]=' + key,
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
    
    render: function() {
        
        var data = this.state.data;
        
        var tipopost = <Peoples />;
        
        if(this.state.tipopost == "peoples"){
            tipopost = <Peoples />;
        }
        if(this.state.tipopost == "groups"){
            tipopost = <Groups />;
        }
        
        return (
            <div>
                <div id="find-friends-modal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Details</h4>
                            </div>
                            <div className="modal-body">
                                
                                <div className="form-group">
                                    <fieldset>
                                        <label for="inlineRadio">Type</label><br />
                                        <label className="radio-inline">
                                            <input defaultChecked={true} onClick={this.alteraTipoPost.bind(this, "peoples")} type="radio" name="type" id="peoples" value="peoples"></input> Peoples 
                                        </label>
                                        <label className="radio-inline">
                                            <input onClick={this.alteraTipoPost.bind(this, "groups")} type="radio" name="type" id="groups" value="groups"></input> Groups
                                        </label>
                                    </fieldset>
                                </div>
                                
                                {tipopost}
                                <Listusers data={data} />
                                
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.searchFriends} id="button-search-friends" type="submit" className="btn btn-default align-left">Search <span className="loader-button search-post"><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i></span></button>
                                
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Peoples = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    componentDidMount: function() {
    },
    
    render: function() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="endereco">Name or email</label>
                        <input type="text" className="form-control" id="search" placeholder="" ></input>
                    </div>
                </form>
            </div>
        );
    }
});

var Groups = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    componentDidMount: function() {
    },
    
    render: function() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="endereco">Group name</label>
                        <input type="text" className="form-control" id="search" placeholder="" ></input>
                    </div>
                </form>
            </div>
        );
    }
});

var Listusers = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
            solicitacao_status: []
        };
    },
    
    componentDidMount: function() {
        
    },
    
    solicitaAmizade: function(id){
        
        //this.setState({data: result});
        
        jQuery("#user-" + id).html("<i class='fa fa-circle-o-notch fa-spin fa-fw'></i>")
        
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/solicitacao/',
            method: 'POST',
            data:{
                status: "publish",
                meta_box: {
                    user_ref: user_id,
                    to_user_ref: id,
                    tipo_solicitacao: "amizade",
                    status: "aguardando"
                },
            },
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
                jQuery("#user-" + id).html("<i class='fa fa-user-plus></i>")
            },
            success: function(result) {
                var notificationData = {
                    from: user_id,
                    to: id,
                    type: "amizade",
                    status: "naolida",
                    auth: auth,
                }
                PubSub.publish('create-notification', notificationData);
                jQuery("#user-" + id).html("<i class='fa fa-check'></i>")
            }.bind(this)
        });
    },
    
    render: function() {
        
        var self = this;
        return (
            <div>
                <div className='search-friends'>
                {this.props.data.map(function(data, i) {
                        
                    var styles = {
                        backgroundImage: "url(" + data.description + ")",
                    };
                        
                    var placeholderText = "Add " + data.name + " has friend."
                     
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
                                <div className="add-has-friend">
                                    <div className="add-has-friend-button" id={componentId} onClick={function(){self.solicitaAmizade(data.id)}}>
                                        <i className="fa fa-user-plus"></i>
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

ReactDOM.render(
    <Findfriends data={[]} />,
    document.getElementById('find-friends')
);