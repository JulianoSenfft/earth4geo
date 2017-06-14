var MyAccount = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    componentDidMount: function() {
        this.getUserAccount();
        
        PubSub.subscribe('update-user-account', function(topico){
            this.getUserAccount();
        }.bind(this));
    },
    
    uploadImage: function(imageData, postID){
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/media/',
            method: 'POST',
            data: imageData,
            contentType: false,
            processData: false,
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(error) {
                console.log(error)
            },
            success: function(result) {
                $.ajax({
                    url: request + '/server/wp-json/wp/v2/users/' + user_id,
                    method: 'POST',
                    data:{
                        description: result.source_url,
                        name: "Juliano Senfft"
                    },
                    beforeSend: function ( xhr ) {
                        xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
                    },
                    error: function(error) {
                        console.log(error.responseJSON.message)
                    },
                    success: function(result) {
                        PubSub.publish('update-user-account');
                    }.bind(this)
                });
            }.bind(this)
        }); 
    },
    
    updateUser: function(){
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        var imageData = new FormData();
        imageData.append( "file", $('input#user-photo-file')[0].files[0] );
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/users/' + user_id,
            method: 'POST',
            data:{
                name: jQuery("#name").val(),
            },
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(error) {
                console.log(error.responseJSON.message)
            },
            success: function(result) {
                if($('input#user-photo-file').val()){
                    this.uploadImage(imageData, result.id);
                }else{
                    PubSub.publish('update-user-account');
                }
            }.bind(this)
        });
    },
    
    getUserAccount: function(){
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/users/' + user_id,
            method: 'GET',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(xhr, status, error) {
              console.log(xhr);
            },
            success: function(result) {
                this.setState({data: result});
            }.bind(this)
        });
    },

    render: function() {
        return (
            <div>
                
                <form className="form-horizontal2" method="post" action="#">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <div className="user-photo">
                                    
                                    {this.state.data.description ? (
                                        <img src={this.state.data.description} className="current-user-photo" />
                                    ):( <img src="http://hnserver.com.br/~earth4geo/server/wp-content/uploads/f3.png" className="current-user-photo" /> )}
                                </div>
                                <input type="file" id="user-photo-file" className="custom-file-input" />
                                <span className="custom-file-control"></span>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="name" className="cols-sm-2 control-label">Seu nome</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="name" id="name"  placeholder="Digite seu nome" value={this.state.data.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="email" className="cols-sm-2 control-label">E-mail</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></span>
                                            <input type="email" className="form-control" name="email" id="email"  placeholder="Digite seu e-mail" value={this.state.data.email} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="password" className="cols-sm-2 control-label">Senha</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" className="form-control" name="password" id="password"  placeholder="Digite sua senha"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="confirm" className="cols-sm-2 control-label">Confirmar Senha</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Digite sua senha"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <button onClick={this.updateUser} id="submeter" type="button" className="btn btn-primary btn-lg btn-block perfil-button">Atualizar perfil</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <MyAccount data={[]} />,
    document.getElementById('my-account')
);