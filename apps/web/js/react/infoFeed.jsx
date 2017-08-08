var InfoFeed = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
        };
    },
    
    viewMore: function(data) {
        PubSub.publish('carrega-ver-mais', data);
        PubSub.publish('carrega-ver-mais', data);
    },
    
    isPostAuthor: function(comment_author_id){
        var user_id = checkCookie()
        if(comment_author_id == user_id){
            return true;
        }else{
            return false;
        }
    },
    
    removerPost: function(id) {
        var user_id = checkCookie()
        var auth = checkCookie("earth4geo_crypt")
        
        console.log("#exclude-" + id)
        
        jQuery("#exclude-" + id).html("<i class='fa fa-circle-o-notch fa-spin'></i>")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/publicacao/' + id,
            method: 'DELETE',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(error) {
                console.log(error.responseJSON.message)
            },
            success: function(result) {
                jQuery("#exclude-" + id).html("")
                PubSub.publish('atualiza-lista-posts');
            }.bind(this)
        });
    },
    
    render: function(){
        
        var self = this;
        var data = this.props.data;
        
        var styles = {
            backgroundImage: "url(" + data._embedded.author[0].description + ")",
        };
        
        return (
            <div className='single-post'>
                <div className='info-post-author'>
                    <div className='author-photo photo-default-feed'>
                        <span style={styles} className="normal-user-photo"></span>
                    </div>
                    <div className='author-name'>
                        {data._embedded.author[0].name} fez uma publicação
                    </div>
                    {self.isPostAuthor(data._embedded.author[0].id) ? ( 
                        <span className="post-exclude" id={'exclude-' + data.id} onClick={function(){self.removerPost(data.id)}}><i className="fa fa-times"></i></span>
                    ):( <span></span> )}
                </div>

                <div className='info-post-title-feed'>
                    <h4 key={'post-title-'+ data.id}> {data.meta_box.titulo}</h4>
                </div>

                {data.meta_box.conteudo ? ( 
                    <div className='info-post-content'>
                        <p className={'post-content-'+ data.id} key={'post-content-'+ data.id}>
                            {data.meta_box.conteudo}
                            <span className='read-more'></span>
                        </p>
                    </div>
                ):( <span></span> )} 

                {data.meta_box.pais && data.meta_box.estado ? (
                    <div className='info-post'> 
                        <i className='fa fa-map-marker' />
                        <span className='pais'>
                            {data.meta_box.pais}
                        </span> 
                        <span className='estado'>
                            {data.meta_box.estado}
                        </span>
                    </div>
                ):( <span></span> )} 

                {data.meta_box.imagem ? (
                    <div className="featured-photo">
                        <img src={data.meta_box.imagem} /> 
                    </div>
                ):( <span></span> )}
                <div id="infoPost" className="vermais" onClick={function(){self.viewMore(data)}} data-toggle="modal" data-target="#view-post-modal">Ver Mais</div>
            </div>
        );
    },

});  
