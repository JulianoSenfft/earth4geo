var Comments = React.createClass({
    
    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function() {
        $.ajax({
            url: 'http://macbook-pro-de-juliano.local/earth4geo/server/wp-json/wp/v2/publicacao',
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
        return (
            <div>
                {this.state.data.map(function(data, i) {
                    
                    var titulo = data.meta_box.titulo
                    var latitude = data.meta_box.latitude
                    var longitude = data.meta_box.longitude
                    var pais = data.meta_box.pais
                    var estado = data.meta_box.estado
                    var conteudo = data.meta_box.conteudo
                    var imagem = data.meta_box.imagem
                    var likes = data.meta_box.likes
                    
                    return (
                        <div className='single-post'>
                            <div className='info-post-author'>
                                <div className='author-photo photo-default-feed'>
                                    <img className='photo' src='https://pbs.twimg.com/profile_images/643969868396670976/xA4pTpYb_400x400.png'></img>
                                </div>
                                <div className='author-name'>
                                    Juliano Senfft publicou um artigo
                                </div>
                            </div>
                            
                            <div className='info-post-title'>
                                <h4 key={'post-title-'+ i}> {titulo} </h4>
                            </div>
                            
                            {conteudo ? (   
                                <div className='info-post-content'>
                                    <p className={'post-content-'+ i} key={'post-content-'+ i}>
                                        {conteudo}
                                        <span className='read-more'></span>
                                    </p>
                                </div>
                            ):( <span></span> )} 
                            
                            {estado && pais ? (
                                <div className='info-post'> 
                                    <i className='fa fa-map-marker' />
                                    <span className='pais'>
                                        {pais}
                                    </span> 
                                    <span className='estado'>
                                        {estado}
                                    </span>
                                </div>
                            ):( <span></span> )} 
                            
                            {imagem ? (   
                                <div className="featured-photo">
                                    <img src={imagem} /> 
                                </div>
                            ):( <span></span> )}
                            
                            <div className="custom-infos">
                                <div className="action-custom-infos">
                                    <div className="like">
                                        <span className="likes-number">
                                            {likes ? (
                                                likes
                                            ):( <span>Nenhuma curtida</span> )}
                                        </span>
                                        <i className="fa fa-thumbs-o-up" aria-hidden="true" data-action="like"></i>
                                    </div>
                                    <div className="comment" data-action="view-comments">
                                        <span className="comments-number">
                                            {likes ? (
                                                likes
                                            ):( <span>Nenhum comentário</span> )}
                                            <div id="comments"></div>
                                        </span>
                                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
});