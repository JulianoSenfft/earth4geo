var PostInfo = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
            comments: [],
            likes: [],
        };
    },
    
    componentDidMount: function() {
        
        PubSub.subscribe('carrega-ver-mais', function(topico, data){
            $("#view-post-modal").modal()
            this.setState({
                data: data,
                comments: [],
                likes: []
            });
            this.getComments(data.id);
            this.getLikes(data.id);
        }.bind(this));
        PubSub.subscribe('comments-has-change', function(topico, data){
            jQuery("#comentario").val("");
            this.getComments(data.meta_box.post_id);
        }.bind(this));
        PubSub.subscribe('loading-comments', function(topico, data){
            if(data == "init"){
                jQuery(".loading-comment").show();
            }else{
                jQuery(".loading-comment").hide();
            }
        }.bind(this));
        
    },
    
    getLikes: function(post_id){
        $.ajax({
            url: request + '/server/wp-json/wp/v2/publicacao/' + post_id,
            method: 'GET',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic aG5hZG1pbjptajAzMDYwMQ==' );
            },
            error: function(error) {
                console.log(error.responseJSON.message)
            },
            success: function(result) {
                this.setState({likes: result.meta_box.likes});
            }.bind(this)
        });
        
    },
    
    verificaParaCurtir: function(post_id, user_id){
        
        var users_liked = [];
        
        var curtiu = 0;
        for (i = 0; i < this.state.likes.length; i++) {
            users_liked[i] = this.state.likes[i];
            if(this.state.likes[i] == user_id){
                curtiu = 1;
            }
        }
        
        //AINDA NAO CURTIU
        if(curtiu == 0){
            users_liked.push(user_id)
            this.curtir(post_id, users_liked)
            this.setState({likes: users_liked});
        }
        
        //JA CURTIU, QUER DESCURTIR
        if(curtiu == 1){
            for (i = 0; i < this.state.likes.length; i++) {
                if(this.state.likes[i] == user_id){
                    users_liked.splice(i, 1);
                }
            }
            
            this.desCurtir(post_id, users_liked)
            this.setState({likes: users_liked});
        }
    },
    
    curtir: function(post_id, users_liked) {
        $.ajax({
            url: request + '/server/wp-json/wp/v2/publicacao/' + post_id,
            method: 'POST',
            data:{
                meta_box: {
                    likes: users_liked,
                },
            },
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic aG5hZG1pbjptajAzMDYwMQ==' );
            },
            error: function(error) {
                console.log(error.responseJSON.message)
            },
            success: function(result) {
                console.log("curtiu")
            }.bind(this)
        }); 
    },
    
    desCurtir: function(post_id, users_liked){
        
        if(users_liked.length <= 0){
            console.log("array_vazia")
            users_liked = "";
        }
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/publicacao/' + post_id,
            method: 'POST',
            data:{
                meta_box: {
                    likes: users_liked,
                },
            },
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic aG5hZG1pbjptajAzMDYwMQ==' );
            },
            error: function(error) {
                console.log(error.responseJSON.message)
            },
            success: function(result) {
                console.log(result)
            }.bind(this)
        });
    },
    
    addComment: function(post_id) {
       
        PubSub.publish('loading-comments', "init");
        
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/comentarios',
            method: 'POST',
            data:{
                status: "publish",
                title: "Comentário",
                meta_box: { 
                    post_id: jQuery("#comentario").attr('data-post-id'),
                    conteudo: jQuery("#comentario").val()
                },
            },
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(error) {
                console.log(error.responseJSON.message)
            },
            success: function(result) {
                PubSub.publish('comments-has-change', result);
            }.bind(this)
        });
    },
    
    getComments: function(post_id) {
        PubSub.publish('loading-comments', "init");
        $.ajax({
            url: request + '/server/wp-json/wp/v2/comentarios?_embed&filter[order]=ASC&filter[meta_key]=post_id&filter[meta_value]=' + post_id,
            //url: request + '/server/wp-json/wp/v2/comentarios?filter[order]=ASC',
            method: 'GET',
            error: function(error) {
                console.log(error.responseJSON.message)
            },
            success: function(result) {
                this.setState({comments: result});
                PubSub.publish('loading-comments', "end");
            }.bind(this)
        });
    },
    
    removerComments: function(id) {
        PubSub.publish('loading-comments', "init");
        
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/comentarios/' + id,
            method: 'DELETE',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(error) {
                console.log(error.responseJSON.message)
            },
            success: function(result) {
                PubSub.publish('comments-has-change', result);
            }.bind(this)
        });
    },
    
    isPostAuthor: function(post_author_id){
        var user_id = checkCookie()
        if(post_author_id == user_id){
            return true;
        }else{
            return false;
        }
    },
    
    isCommentAuthor: function(comment_author_id){
        var user_id = checkCookie()
        if(comment_author_id == user_id){
            return true;
        }else{
            return false;
        }
    },
    
    render: function() {
        
        var self = this;
        
        var dados = this.state.data;
        
        var isPostAuthor = self.isPostAuthor(dados.author);
        
        
        if(dados.length != 0){
            var styles = {
                backgroundImage: "url(" + dados._embedded.author[0].description + ")",
            };
        }
        
        return (
            <div>
                {dados.length != 0 &&
                <div id="view-post-modal" className="full-post-info modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                
                                <div className='info-post-author'>
                                    <div className='author-photo photo-default-feed'>
                                        <span style={styles} className="normal-user-photo"></span>
                                    </div>
                                    <div className='author-name'>
                                        {dados._embedded.author[0].name}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12 author">
                                        <div className='info-post-title'>
                                            <h4>{this.state.data.meta_box.titulo}</h4>
                                        </div>
                                        <div className="conteudo">  
                                            {this.state.data.meta_box.conteudo}
                                        </div>
                                        <div className='info-post'> 
                                            <i className='fa fa-map-marker' />
                                            <span className='pais'>
                                                {this.state.data.meta_box.pais}
                                            </span> 
                                            <span className='estado'>
                                                {this.state.data.meta_box.estado}
                                            </span>
                                        </div>
                                        <div className="featured-photo">
                                            <img src={this.state.data.meta_box.imagem} /> 
                                        </div>
                                        <div className="custom-infos">
                                            <div className="action-custom-infos">
                                                <div className="like">
                                                    <i onClick={function(){self.verificaParaCurtir(dados.id, current_user)}} className="fa fa-thumbs-o-up" aria-hidden="true" data-action="like"></i>
                                                    
                                                    <span className="likes-number">
                                                        <span>{this.state.likes.length} curtidas</span>
                                                    </span>
                                                </div>
                                                <div className="comment" data-action="view-comments">
                                                    <span className="comments-number">
                                                        <span>{this.state.comments.length} comentários</span>
                                                    </span>
                                                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comentarios">
                                            {this.state.comments.map(function(data, i) {
                                                
                                                var styles = {
                                                    backgroundImage: "url(" + data._embedded.author[0].description + ")",
                                                };
                                                return (
                                                    <div>
                                                        {self.isCommentAuthor(data.author) ? ( 
                                                            <span className="exclude" onClick={function(){self.removerComments(data.id)}}><i className="fa fa-times"></i></span>
                                                        ):( <span></span> )}
                                                        <div className="comentario">
                                                            <div className='info-post-author'>
                                                                <div className='author-photo photo-default-feed'>
                                                                    <span style={styles} className="normal-user-photo"></span>
                                                                </div>
                                                                <div className='author-name'>
                                                                    {data._embedded.author[0].name}
                                                                </div>
                                                            </div>
                                                            <div className="date-hour">
                                                                {new Date(data.date).toLocaleDateString()} às {new Date(data.date).toLocaleTimeString()}
                                                            </div>
                                                            <div className="conteudo-comentarios">
                                                                {data.meta_box.conteudo}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div className="loader loading-comment">
                                                <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                                            </div>
                                        </div>
                                        <div className="new-comment">
                                            <form className="comment-form">
                                                <div className="form-group">
                                                    <textarea className="form-control comment-area" id="comentario" name="conteudo" data-post-id={this.state.data.id} ></textarea>
                                                    <button onClick={self.addComment} id="button-add-post" type="button" className="btn btn-default align-left">Comentar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
    
});